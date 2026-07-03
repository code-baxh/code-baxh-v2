"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Reveals a section once it has scrolled a little way into the viewport.
 *
 * Uses IntersectionObserver rather than a per-frame scroll/getBoundingClientRect
 * loop, so several instances can run at once without forcing layout every frame
 * (that per-frame reflow was a real source of scroll jank).
 *
 * `deadZoneStart` is how far into the viewport (0–1, measured up from the
 * bottom edge) the element must travel before it counts as in view.
 */
export function useStackProgress<T extends HTMLElement = HTMLElement>(
  deadZoneStart = 0.15,
): { ref: RefObject<T | null>; inView: boolean } {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      const timer = window.setTimeout(() => setInView(true), 0);
      return () => window.clearTimeout(timer);
    }

    // Trigger when the element's top edge crosses a line `deadZoneStart` of the
    // way up from the bottom of the viewport (matches the old threshold).
    const bottomMargin = Math.round(deadZoneStart * 100);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: `0px 0px -${bottomMargin}% 0px`, threshold: 0 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [deadZoneStart]);

  return { ref, inView };
}
