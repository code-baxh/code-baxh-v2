"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export type HeroSlide = {
  id: string;
  /** Short name shown in the slide selector. */
  label: string;
  eyebrow: string;
  /** Headline split so one part can take the accent gradient. */
  title: [before: string, accent: string, after: string];
  body: string;
  /** Files in /public/videos: hero-N.mp4 and its poster hero-N.jpg. */
  video: number;
};

const INTERVAL = 8000;

/**
 * Full-bleed video hero with a HUD-style slide selector.
 *
 * - Only the first poster loads with the page. Clips (and the next poster) wait until the
 *   page has loaded and gone idle, and clips are skipped for Save-Data and 2G/3G.
 * - All slide copy is stacked in one grid cell, so switching never shifts layout.
 * - Only the active headline is the <h1>; the others are inert and hidden from assistive tech.
 * - Rotation stops while focus is inside, via the pause button, and for reduced motion
 *   (where the posters are shown and no video plays).
 */
export function HeroRotator({ slides, actions }: { slides: HeroSlide[]; actions: React.ReactNode }) {
  const [active, setActive] = useState(0);
  // Highest slide index shown so far: its poster and every earlier one stay mounted.
  const [reach, setReach] = useState(0);
  const [paused, setPaused] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  // True once the page has loaded and gone idle. Video and the next poster wait for it,
  // so nothing competes with the first poster (the LCP image) for bandwidth.
  const [idle, setIdle] = useState(false);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const reduced = useRef(false);
  // Skip video entirely when the visitor asked to save data or is on a slow connection.
  const lowData = useRef(false);

  const go = (i: number) => {
    setActive(i);
    setReach((r) => Math.max(r, i));
  };

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    lowData.current = Boolean(conn?.saveData) || /2g|3g/.test(conn?.effectiveType ?? "");

    const markIdle = () => setIdle(true);
    const whenIdle = () => {
      if ("requestIdleCallback" in window) window.requestIdleCallback(markIdle, { timeout: 3000 });
      else setTimeout(markIdle, 1500);
    };
    if (document.readyState === "complete") whenIdle();
    else window.addEventListener("load", whenIdle, { once: true });
    return () => window.removeEventListener("load", whenIdle);
  }, []);

  // Play the active clip, pause the rest.
  useEffect(() => {
    const canPlay = idle && !paused && !reduced.current && !lowData.current;
    videos.current.forEach((v, i) => {
      if (!v) return;
      if (i === active && canPlay) {
        v.muted = true; // browsers only autoplay muted video
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active, paused, idle]);

  useEffect(() => {
    if (paused || focusWithin || reduced.current) return;
    const t = window.setTimeout(() => {
      const next = (active + 1) % slides.length;
      setActive(next);
      setReach((r) => Math.max(r, next));
    }, INTERVAL);
    return () => window.clearTimeout(t);
  }, [active, paused, focusWithin, slides.length]);

  const running = !paused && !focusWithin;

  return (
    <>
      {/* Video backdrop */}
      <div aria-hidden className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={cn(
              "absolute inset-0 transition-[opacity,transform] duration-[1200ms] ease-out",
              i === active ? "scale-100 opacity-100" : "scale-105 opacity-0",
            )}
          >
            {/* Posters sit in the viewport behind opacity-0, so "lazy" would still fetch all
                five at once. Mount each only once its slide has been reached or is next. */}
            {i <= reach || (idle && i === (active + 1) % slides.length) ? (
              <Image
                src={`/videos/hero-${s.video}.jpg`}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
                // The first poster is the LCP element: fetch it first, never lazily.
                {...(i === 0 ? { loading: "eager" as const, fetchPriority: "high" as const } : {})}
              />
            ) : null}
            <video
              ref={(el) => {
                videos.current[i] = el;
              }}
              src={`/videos/hero-${s.video}.mp4`}
              muted
              loop
              playsInline
              preload="none"
              tabIndex={-1}
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        ))}
        {/* Legibility and colour treatment */}
        <div className="absolute inset-0 bg-[#06080d]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,rgb(6_8_13/0.55),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-transparent to-[#06080d]/50" />
        <div className="absolute inset-0 bg-[#fab81e]/10 mix-blend-overlay" />
        <div className="scan-line absolute inset-x-0 top-0 h-40" />
        <div className="hud-corners absolute inset-x-5 bottom-5 top-5 hidden opacity-60 sm:block lg:inset-x-8" />
      </div>

      <div
        className="relative mx-auto grid min-h-[min(88vh,820px)] w-full max-w-[92rem] items-center px-5 pb-24 pt-16 text-center sm:px-8 lg:px-14 lg:pb-28"
        onFocusCapture={() => setFocusWithin(true)}
        onBlurCapture={() => setFocusWithin(false)}
      >
        <div>
          <div className="grid">
            {slides.map((s, i) => {
              const on = i === active;
              const Heading = on ? "h1" : "p";
              return (
                <div
                  key={s.id}
                  aria-hidden={!on}
                  inert={!on}
                  className={cn(
                    "col-start-1 row-start-1 transition-[opacity,transform] duration-700 ease-out",
                    on ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0",
                  )}
                >
                  <p className="eyebrow flex items-center justify-center gap-3">
                    <span aria-hidden className="h-px w-10 bg-accent" />
                    {s.eyebrow}
                    <span aria-hidden className="h-px w-10 bg-accent" />
                  </p>
                  <Heading className="mx-auto mt-6 max-w-5xl font-display text-[2.6rem] font-semibold leading-[1.03] tracking-[-0.025em] text-balance text-fg sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                    {s.title[0]}
                    <span className="text-gradient">{s.title[1]}</span>
                    {s.title[2]}
                  </Heading>
                  <p className="mx-auto mt-6 max-w-2xl text-lg text-fg/85 xl:text-xl">{s.body}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">{actions}</div>

          {/* Minimal slide controls: pause is required for content that moves on its own. */}
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play hero video and slides" : "Pause hero video and slides"}
              className="inline-flex size-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent-text hover:text-accent-text"
            >
              {paused ? <Play aria-hidden className="size-4" /> : <Pause aria-hidden className="size-4" />}
            </button>
            <div className="flex items-center" role="group" aria-label="Choose hero slide">
              {slides.map((s, i) => {
                const on = i === active;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => go(i)}
                    aria-current={on}
                    aria-label={`Slide ${i + 1} of ${slides.length}: ${s.label}`}
                    className="group flex h-11 items-center px-1"
                  >
                    <span
                      className={cn(
                        "relative block h-0.5 overflow-hidden rounded-full bg-line-strong transition-[width] duration-300",
                        on ? "w-14" : "w-7 group-hover:bg-muted",
                      )}
                    >
                      {on ? (
                        <span
                          key={`${active}-${running}`}
                          className="absolute inset-0 origin-left rounded-full bg-accent"
                          style={running ? { animation: `hero-progress ${INTERVAL}ms linear forwards` } : undefined}
                        />
                      ) : null}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
