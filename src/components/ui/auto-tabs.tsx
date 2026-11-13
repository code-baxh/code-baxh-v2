"use client";

import { Children, useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const INTERVAL = 6000;

/**
 * Tabs that advance on their own, one panel at a time. Panels are stacked in a
 * single grid cell so the tallest sets the height and nothing shifts. Rotation
 * pauses on hover and focus, stops for good once a tab is chosen, and never
 * starts for people who prefer reduced motion.
 */
export function AutoTabs({ labels, children }: { labels: string[]; children: React.ReactNode }) {
  const panels = Children.toArray(children);
  const id = useId();
  const [active, setActive] = useState(0);
  const [hold, setHold] = useState(false);
  const [manual, setManual] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (hold || manual || reduced.current) return;
    const t = window.setTimeout(() => setActive((i) => (i + 1) % panels.length), INTERVAL);
    return () => window.clearTimeout(t);
  }, [active, hold, manual, panels.length]);

  const running = !hold && !manual;

  return (
    <div
      onPointerEnter={(e) => e.pointerType === "mouse" && setHold(true)}
      onPointerLeave={() => setHold(false)}
      onFocusCapture={() => setHold(true)}
      onBlurCapture={() => setHold(false)}
    >
      <div role="tablist" aria-label="Tool categories" className="flex flex-wrap justify-center gap-2">
        {labels.map((label, i) => {
          const on = i === active;
          return (
            <button
              key={label}
              type="button"
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={on}
              aria-controls={`${id}-panel-${i}`}
              tabIndex={on ? 0 : -1}
              onClick={() => {
                setActive(i);
                setManual(true);
              }}
              onKeyDown={(e) => {
                if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
                const next = (i + (e.key === "ArrowRight" ? 1 : labels.length - 1)) % labels.length;
                setActive(next);
                setManual(true);
                document.getElementById(`${id}-tab-${next}`)?.focus();
              }}
              className={cn(
                "relative min-h-11 overflow-hidden rounded-full border px-5 text-sm transition-colors",
                on ? "border-accent text-fg" : "border-line-strong text-muted hover:border-accent-text hover:text-fg",
              )}
            >
              {on ? (
                <span
                  key={`${active}-${running}`}
                  aria-hidden
                  className="absolute inset-0 origin-left bg-accent/20"
                  style={running ? { animation: `hero-progress ${INTERVAL}ms linear forwards` } : undefined}
                />
              ) : null}
              <span className="relative">{label}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-8 grid">
        {panels.map((panel, i) => {
          const on = i === active;
          return (
            <div
              key={i}
              role="tabpanel"
              id={`${id}-panel-${i}`}
              aria-labelledby={`${id}-tab-${i}`}
              aria-hidden={!on}
              inert={!on}
              className={cn(
                "col-start-1 row-start-1 h-full transition-[opacity,transform] duration-500 ease-out",
                on ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0",
              )}
            >
              {panel}
            </div>
          );
        })}
      </div>
    </div>
  );
}
