"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { SectionHeading, Reveal } from "../shared";
import { INTERACTIVE_TESTIMONIALS } from "./interactive-testimonials-data";

const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789#@!%&";
const N = INTERACTIVE_TESTIMONIALS.length;
const ANIM_DUR = 520;
const DECRYPT_DUR = 1300;
const CENTER_T = 0.5;
/** Arc horizontal span = this × measured quote column width */
const ARC_WIDTH_RATIO = 0.68;
const ARC_MAX_WIDTH = 620;
const ARC_APEX_Y = 26;
/** How far the U legs sit below the peak */
const ARCH_DEPTH_RATIO = 0.27;
const ARCH_DEPTH_MIN = 96;
const CANVAS_PAD_BOTTOM = 10;
const ARC_OFFSET_X = -36;
const ARC_OFFSET_X_MOBILE = -18;
const BRAND_OFFSET_X = 34;
const BRAND_OFFSET_X_MOBILE = 20;
const BRAND_DROP_DESKTOP = 32;
const BRAND_DROP_MOBILE = 28;

type LayoutOffsets = {
  arcX: number;
  brandX: number;
  brandDrop: number;
};

function layoutOffsets(width: number): LayoutOffsets {
  const isMobile = width < 640;
  return {
    arcX: isMobile ? ARC_OFFSET_X_MOBILE : ARC_OFFSET_X,
    brandX: isMobile ? BRAND_OFFSET_X_MOBILE : BRAND_OFFSET_X,
    brandDrop: isMobile ? BRAND_DROP_MOBILE : BRAND_DROP_DESKTOP,
  };
}

type BrandAnim = {
  fromIdx: number;
  toIdx: number;
  fromT: number;
  toT: number;
};

type ArcGeom = {
  r: number;
  cy: number;
  startA: number;
  endA: number;
  legY: number;
};

type ArcLayout = {
  width: number;
  height: number;
  arcCx: number;
  brandOffsetX: number;
  brandDrop: number;
  arcSpanW: number;
};

function arcDepth(arcSpanW: number) {
  return Math.max(ARCH_DEPTH_MIN, arcSpanW * ARCH_DEPTH_RATIO);
}

function arcGeometry(arcSpanW: number): ArcGeom {
  const depth = arcDepth(arcSpanW);
  const halfW = arcSpanW / 2;
  const r = (halfW * halfW + depth * depth) / (2 * depth);
  const cy = ARC_APEX_Y + r;
  const legY = ARC_APEX_Y + depth;
  const dy = legY - cy;
  return {
    r,
    cy,
    startA: Math.atan2(dy, -halfW),
    endA: Math.atan2(dy, halfW),
    legY,
  };
}

function canvasHeightForArc(arcSpanW: number, brandDrop: number) {
  const { legY } = arcGeometry(arcSpanW);
  const brandBottom = ARC_APEX_Y + brandDrop + 16;
  return Math.ceil(Math.max(legY, brandBottom) + CANVAS_PAD_BOTTOM);
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

/** Forward in the ring → exit right; backward → exit left */
function exitTargetT(fromIdx: number, toIdx: number): 0 | 1 {
  const forward = ((toIdx - fromIdx + N) % N) <= N / 2;
  return forward ? 1 : 0;
}

function edgeFade(t: number) {
  const distanceFromCenter = Math.abs(t - CENTER_T) / CENTER_T;
  return Math.max(0, Math.min(1, 1 - distanceFromCenter));
}

function themeColors(el: HTMLElement | null) {
  const root = el ?? document.documentElement;
  const style = getComputedStyle(root);
  const pick = (name: string, fallback: string) =>
    style.getPropertyValue(name).trim() || fallback;
  return {
    accent: pick("--accent", "#ffb800"),
    surfaceElevated: pick("--surface-elevated", "#141414"),
    textSecondary: pick("--text-secondary", "#a8a6a0"),
    border: pick("--border", "rgba(240, 238, 234, 0.1)"),
  };
}

function ptOnArc(
  t: number,
  cx: number,
  arcSpanW: number
): { x: number; y: number } {
  const { r, cy, startA, endA } = arcGeometry(arcSpanW);
  const a = startA + (endA - startA) * t;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function ptForBrand(
  t: number,
  arcCx: number,
  arcSpanW: number,
  brandOffsetX: number,
  brandDrop: number
): { x: number; y: number } {
  const pt = ptOnArc(t, arcCx, arcSpanW);
  return { x: pt.x + brandOffsetX, y: pt.y + brandDrop };
}

export function InteractiveTestimonials() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const arcSpanRef = useRef(327);
  const canvasHRef = useRef(130);
  const activeIdxRef = useRef(0);
  const brandAnimRef = useRef<BrandAnim | null>(null);
  const animatingRef = useRef(false);
  const animRafRef = useRef<number | null>(null);
  const decryptRafRef = useRef<number | null>(null);

  const [activeIdx, setActiveIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [arcLayout, setArcLayout] = useState<ArcLayout | null>(null);
  const [brandAnim, setBrandAnim] = useState<BrandAnim | null>(null);

  const measureLayout = useCallback(() => {
    const quoteW = quoteRef.current?.clientWidth ?? 0;
    const columnW = quoteW > 0 ? quoteW : wrapRef.current?.clientWidth ?? 0;
    const span = columnW > 0 ? Math.min(columnW * ARC_WIDTH_RATIO, ARC_MAX_WIDTH) : 360;
    const offsets = layoutOffsets(columnW > 0 ? columnW : 375);
    arcSpanRef.current = span;
    canvasHRef.current = canvasHeightForArc(span, offsets.brandDrop);
  }, []);

  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const W = wrap.clientWidth;
    if (W === 0) {
      requestAnimationFrame(drawFrame);
      return;
    }

    measureLayout();
    const H = canvasHRef.current;
    const arcSpanW = arcSpanRef.current;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";

    const ctx = canvas.getContext("2d")!;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, W, H);

    const offsets = layoutOffsets(W);
    const arcCx = W / 2 + offsets.arcX;
    const colors = themeColors(wrap);
    setArcLayout((prev) => {
      if (
        prev &&
        prev.width === W &&
        prev.height === H &&
        prev.arcCx === arcCx &&
        prev.brandOffsetX === offsets.brandX &&
        prev.brandDrop === offsets.brandDrop &&
        prev.arcSpanW === arcSpanW
      ) {
        return prev;
      }
      return {
        width: W,
        height: H,
        arcCx,
        brandOffsetX: offsets.brandX,
        brandDrop: offsets.brandDrop,
        arcSpanW,
      };
    });

    // Arc behind the active brand, like a rail over the quote.
    const { r, cy, startA, endA } = arcGeometry(arcSpanW);
    ctx.beginPath();
    ctx.arc(arcCx, cy, r, startA, endA, false);
    ctx.strokeStyle = colors.border;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }, [measureLayout]);

  const startDecrypt = useCallback((finalText: string) => {
    if (decryptRafRef.current) cancelAnimationFrame(decryptRafRef.current);
    const full = "\u201c" + finalText + "\u201d";
    let startTs: number | null = null;
    function step(ts: number) {
      if (!startTs) startTs = ts;
      const prog = Math.min((ts - startTs) / DECRYPT_DUR, 1);
      const revealed = Math.floor(prog * full.length);
      let out = "";
      for (let i = 0; i < full.length; i++) {
        if (i < revealed) {
          out += full[i];
        } else if (
          full[i] === " " ||
          full[i] === "\u201c" ||
          full[i] === "\u201d" ||
          full[i] === "." ||
          full[i] === ","
        ) {
          out += full[i];
        } else {
          out += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setDisplayText(out);
      if (prog < 1) {
        decryptRafRef.current = requestAnimationFrame(step);
      } else {
        setDisplayText(full);
      }
    }
    decryptRafRef.current = requestAnimationFrame(step);
  }, []);

  const animateExit = useCallback(
    (fromIdx: number, toIdx: number, onDone: () => void) => {
      if (animRafRef.current) cancelAnimationFrame(animRafRef.current);

      const oldIdx = fromIdx;
      const targetT = exitTargetT(fromIdx, toIdx);
      const enterStartT = targetT === 1 ? 0 : 1;
      const initialAnim = {
        fromIdx: oldIdx,
        toIdx,
        fromT: CENTER_T,
        toT: enterStartT,
      };
      brandAnimRef.current = initialAnim;
      setBrandAnim(initialAnim);
      drawFrame();

      let start: number | null = null;
      function step(ts: number) {
        if (!start) start = ts;
        const prog = Math.min((ts - start) / ANIM_DUR, 1);
        const e = easeInOut(prog);
        const nextAnim = {
          fromIdx: oldIdx,
          toIdx,
          fromT: CENTER_T + (targetT - CENTER_T) * e,
          toT: enterStartT + (CENTER_T - enterStartT) * e,
        };
        brandAnimRef.current = nextAnim;
        setBrandAnim(nextAnim);
        drawFrame();
        if (prog < 1) {
          animRafRef.current = requestAnimationFrame(step);
        } else {
          brandAnimRef.current = null;
          setBrandAnim(null);
          activeIdxRef.current = toIdx;
          setActiveIdx(toIdx);
          drawFrame();
          onDone();
        }
      }
      animRafRef.current = requestAnimationFrame(step);
    },
    [drawFrame]
  );

  const selectIdx = useCallback(
    (newIdx: number) => {
      if (animatingRef.current || newIdx === activeIdxRef.current) return;
      animatingRef.current = true;
      const fromIdx = activeIdxRef.current;

      animateExit(fromIdx, newIdx, () => {
        startDecrypt(INTERACTIVE_TESTIMONIALS[newIdx].quote);
        animatingRef.current = false;
      });
    },
    [animateExit, startDecrypt]
  );

  useEffect(() => {
    activeIdxRef.current = activeIdx;
  }, [activeIdx]);

  useEffect(() => {
    measureLayout();
    const t1 = setTimeout(() => {
      measureLayout();
      drawFrame();
      startDecrypt(INTERACTIVE_TESTIMONIALS[0].quote);
    }, 50);
    const t2 = setTimeout(() => {
      measureLayout();
      drawFrame();
    }, 300);

    const ro = new ResizeObserver(() => drawFrame());
    if (wrapRef.current) ro.observe(wrapRef.current);
    if (quoteRef.current) ro.observe(quoteRef.current);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      ro.disconnect();
    };
  }, [drawFrame, measureLayout, startDecrypt]);

  const renderBrand = (dataIdx: number, t: number, alpha: number) => {
    if (!arcLayout || alpha <= 0.01) return null;

    const item = INTERACTIVE_TESTIMONIALS[dataIdx];
    const pt = ptForBrand(
      t,
      arcLayout.arcCx,
      arcLayout.arcSpanW,
      arcLayout.brandOffsetX,
      arcLayout.brandDrop
    );

    return (
      <div
        key={`${item.id}-${t}`}
        className="pointer-events-none absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 whitespace-nowrap text-text-secondary"
        style={{
          left: pt.x,
          top: pt.y,
          opacity: alpha,
        }}
      >
        <span className="flex size-[22px] items-center justify-center rounded-full border border-accent bg-surface-elevated text-[9px] font-bold leading-none text-accent">
          {item.initials.slice(0, 1)}
        </span>
        <span className="text-[17px] font-semibold leading-none sm:text-[19px]">
          {item.company.toLowerCase()}
        </span>
      </div>
    );
  };

  const brandLayer = brandAnim
    ? [
        renderBrand(brandAnim.fromIdx, brandAnim.fromT, edgeFade(brandAnim.fromT)),
        renderBrand(brandAnim.toIdx, brandAnim.toT, edgeFade(brandAnim.toT)),
      ]
    : renderBrand(activeIdx, CENTER_T, 1);

  return (
    <section className="theme-obsidian border-t border-border bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-14 flex justify-center md:mb-16">
          <SectionHeading
            align="center"
            eyebrow="Testimonials"
            title="Why trust us?"
            description="Independent feedback from international clients — real outcomes from products we shipped together."
          />
        </Reveal>

        <Reveal variant="pop-in" delay={100}>
          <div className="overflow-visible rounded-2xl border border-border bg-surface-elevated pb-10 transition-[transform,box-shadow,border-color] duration-300 hover:border-accent/25 hover:shadow-[var(--glass-shadow)] md:pb-12">
            <div
              ref={wrapRef}
              className="relative mx-auto w-full max-w-3xl px-6 md:px-10"
              style={arcLayout ? { minHeight: arcLayout.height } : undefined}
            >
              <canvas ref={canvasRef} className="block w-full" />
              {brandLayer}
            </div>

            <div className="mx-auto max-w-3xl px-6 pt-2 text-center md:px-10 md:pt-3">
              <blockquote
                ref={quoteRef}
                className="mx-auto mb-10 font-mono text-base leading-[1.95] text-text-secondary md:text-lg"
                style={{ minHeight: "5.5em" }}
              >
                {displayText || "\u00a0"}
              </blockquote>

              <div className="flex flex-wrap justify-center gap-2.5">
                {INTERACTIVE_TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => selectIdx(i)}
                    className={[
                      "rounded-full border px-4 py-2.5 text-sm transition-[colors,transform] duration-200 hover:-translate-y-0.5",
                      i === activeIdx
                        ? "border-accent bg-accent/10"
                        : "border-border bg-transparent hover:border-accent/40",
                    ].join(" ")}
                  >
                    <span
                      className={
                        i === activeIdx
                          ? "font-semibold text-accent"
                          : "font-semibold text-text-secondary"
                      }
                    >
                      {t.name}
                    </span>
                    <span
                      className={`ml-1.5 ${
                        i === activeIdx ? "text-text-secondary" : "text-text-muted"
                      }`}
                    >
                      {t.role}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
