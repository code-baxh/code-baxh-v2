"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { useStackProgress, SectionHeading } from "../shared";
import { SHOWCASE_PANELS, type ShowcasePanel } from "./showcase-panels";
import { ShowcasePanelContent } from "./ShowcasePanelCard";

const PANEL_COUNT = SHOWCASE_PANELS.length;
const RUNWAY_VH_PER_PANEL = 145;
const RUNWAY_END_BUFFER_VH = 100;
const TRAVEL_PCT = 68;

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function easeInCubic(t: number) {
  return t ** 3;
}

function enterRatio(index: number, total: number) {
  if (index === 0) return 0.05;
  return 0.11;
}

function exitRatio(index: number, total: number) {
  if (index === total - 1) return 0.05;
  return 0.11;
}

function slideState(
  p: number,
  index: number,
  total: number,
  fromLeft: boolean,
) {
  const seg = 1 / total;
  const start = index * seg;
  const enterR = enterRatio(index, total);
  const exitR = exitRatio(index, total);
  const off = fromLeft ? -TRAVEL_PCT : TRAVEL_PCT;
  const local = (p - start) / seg;

  if (local < 0) {
    if (index === 0) return { x: "0%", opacity: 1 };
    return { x: `${off}%`, opacity: 0 };
  }

  if (local > 1) {
    if (index === total - 1) return { x: "0%", opacity: 1 };
    return { x: `${off}%`, opacity: 0 };
  }

  if (index === 0 && local < enterR) {
    return { x: "0%", opacity: 1 };
  }

  if (index === total - 1 && local > 1 - exitR) {
    return { x: "0%", opacity: 1 };
  }

  if (local < enterR) {
    const t = easeOutCubic(local / enterR);
    const x = off * (1 - t);
    return { x: `${x}%`, opacity: t };
  }

  if (local < 1 - exitR) {
    return { x: "0%", opacity: 1 };
  }

  const t = easeInCubic((local - (1 - exitR)) / exitR);
  const x = off * t;
  return { x: `${x}%`, opacity: 1 - t };
}

function ShowcaseSlide({
  panel,
  index,
  total,
  progress,
}: {
  panel: ShowcasePanel;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const fromLeft = index % 2 === 0;

  const x = useTransform(progress, (p) =>
    slideState(p, index, total, fromLeft).x,
  );
  const opacity = useTransform(progress, (p) =>
    slideState(p, index, total, fromLeft).opacity,
  );

  return (
    <motion.div
      className="showcase-slide absolute inset-0 flex items-center"
      style={{ x, opacity }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <ShowcasePanelContent panel={panel} />
      </div>
    </motion.div>
  );
}

function ShowcaseStatic({
  mobileOnly = true,
  compact = false,
}: {
  mobileOnly?: boolean;
  compact?: boolean;
}) {
  return (
    <section
      aria-label="What we build"
      className={`relative overflow-hidden theme-obsidian border-t border-border bg-surface ${
        mobileOnly ? "block lg:hidden" : ""
      }`}
    >
      <div
        className="section-build-card__glow pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-16">
        <div className="mx-auto mb-6 max-w-2xl text-center sm:mb-10 md:mb-14">
          <SectionHeading
            align="center"
            eyebrow="What we build"
            title="Three things we do exceptionally well."
          />
        </div>
        <div className="flex flex-col gap-6 sm:gap-10 md:gap-16">
          {SHOWCASE_PANELS.map((panel) => (
            <ShowcasePanelContent
              key={panel.tag}
              panel={panel}
              compact={compact}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Tall stack layer (z-index 2). Sticky viewport pins while cards slide;
 * All Services (z-index 3) stacks on top once this section is scrolled through.
 */
export function HomeShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { ref: stackRef, inView } = useStackProgress<HTMLDivElement>();
  const runwayHeight =
    PANEL_COUNT * RUNWAY_VH_PER_PANEL + RUNWAY_END_BUFFER_VH;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  if (reduce) {
    return <ShowcaseStatic mobileOnly={false} compact={false} />;
  }

  return (
    <>
      <section
        ref={sectionRef}
        aria-label="What we build"
        className="section-build section-build--runway theme-obsidian border-t border-border bg-surface hidden lg:block"
        style={{ height: `${runwayHeight}vh` }}
      >
        <div
          ref={stackRef}
          className={`showcase-sticky-viewport ${
            inView ? "section-visible" : ""
          }`}
        >
          <div
            className="section-build-card__glow pointer-events-none absolute inset-0"
            aria-hidden
          />
          <div className="showcase-sticky-inner relative mx-auto flex w-full max-w-6xl flex-col px-5 pb-8 sm:px-8 md:pb-12">
            <div className="section-entrance-item section-entrance-item--1 mx-auto mb-10 max-w-2xl shrink-0 text-center md:mb-12">
              <SectionHeading
                align="center"
                eyebrow="What we build"
                title="Three things we do exceptionally well."
              />
            </div>

            <div className="showcase-stage relative min-h-0 flex-1 overflow-hidden">
              {SHOWCASE_PANELS.map((panel, i) => (
                <ShowcaseSlide
                  key={panel.tag}
                  panel={panel}
                  index={i}
                  total={PANEL_COUNT}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ShowcaseStatic mobileOnly compact />
    </>
  );
}
