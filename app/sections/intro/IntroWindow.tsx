"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { IntroCodeTyping } from "./IntroCodeTyping";
import { IntroMorphLoader } from "./IntroMorphLoader";
import {
  MAX_INTRO_MS,
  runLoadingPhase,
  type IntroPhase,
} from "./useIntroSequence";

type IntroWindowProps = {
  onComplete: () => void;
};

/**
 * Brief branded interstitial: a fixed, compact "IDE window" that types a few
 * lines of studio.ts, then fades out. Constraints that must hold (they came
 * out of a Core Web Vitals audit — don't regress them):
 *
 * - The overlay is mounted client-side only (see IntroProvider), so the hero
 *   underneath paints immediately and is measured as LCP.
 * - Everything animates with opacity ONLY. The window never moves or
 *   resizes — the old compact→fullscreen expand morph animated
 *   top/left/width/height and scored ~0.39 CLS on its own.
 * - Hard-capped at MAX_INTRO_MS; any user intent (click, key, scroll, touch)
 *   skips instantly.
 */
export function IntroWindow({ onComplete }: IntroWindowProps) {
  const [phase, setPhase] = useState<IntroPhase>("code");
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const finishedRef = useRef(false);

  const finishIntro = useCallback(() => {
    // Idempotent: the cap, the sequence completing, and a user skip can all fire.
    if (finishedRef.current) return;
    finishedRef.current = true;
    setOverlayOpacity(0);
    window.setTimeout(onComplete, 450);
  }, [onComplete]);

  // Fade in on mount; hard-cap the whole intro.
  useEffect(() => {
    const raf = window.requestAnimationFrame(() => setOverlayOpacity(1));
    const capTimer = window.setTimeout(finishIntro, MAX_INTRO_MS);
    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(capTimer);
    };
  }, [finishIntro]);

  // Never block the user: any intent to move on (Escape, click/tap, scroll,
  // wheel) skips the intro immediately and reveals the already-rendered page.
  useEffect(() => {
    const skip = () => finishIntro();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Enter" || event.key === " ") {
        skip();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", skip, { passive: true });
    window.addEventListener("touchmove", skip, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", skip);
      window.removeEventListener("touchmove", skip);
    };
  }, [finishIntro]);

  const handleCodeComplete = useCallback(() => {
    setPhase("loading");
  }, []);

  useEffect(() => {
    if (phase !== "loading") return;
    return runLoadingPhase(() => {
      setPhase("exit");
      finishIntro();
    });
  }, [phase, finishIntro]);

  const showLoader = phase === "loading";

  return (
    <div
      className="intro-overlay intro-overlay--obsidian theme-obsidian fixed inset-0 z-[300] transition-opacity duration-500"
      style={{ opacity: overlayOpacity }}
      aria-hidden={overlayOpacity === 0}
      role="presentation"
      onClick={finishIntro}
    >
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          finishIntro();
        }}
        className="absolute right-4 top-4 z-[2] inline-flex h-11 items-center rounded-full border border-border bg-surface/70 px-4 text-xs font-medium tracking-[0.08em] text-text-secondary backdrop-blur transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:right-6 sm:top-6"
      >
        Skip intro
      </button>
      <div className="intro-window intro-window--compact theme-obsidian overflow-hidden border border-border bg-surface shadow-2xl">
        <div className="intro-window-chrome flex items-center gap-3 border-b border-border px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="intro-dot intro-dot-red" aria-hidden />
            <span className="intro-dot intro-dot-yellow" aria-hidden />
            <span className="intro-dot intro-dot-green" aria-hidden />
          </div>
          <span className="truncate font-mono text-xs text-text-muted">
            studio.ts
          </span>
        </div>

        <div className="intro-window-body flex flex-col p-5 md:p-8">
          <div
            className={
              showLoader ? "opacity-40 transition-opacity duration-500" : ""
            }
          >
            <IntroCodeTyping
              active={phase === "code"}
              charDelayMs={7}
              charsPerTick={1.2}
              onComplete={handleCodeComplete}
            />
          </div>

          {showLoader ? (
            <>
              <div
                className="intro-loader-backdrop absolute inset-0 z-[1]"
                aria-hidden
              />
              <div className="absolute inset-0 z-[2] flex items-center justify-center">
                <IntroMorphLoader />
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
