"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export function useStackProgress<T extends HTMLElement = HTMLElement>(
  deadZoneStart = 0.15,
  deadZoneEnd = 0.85,
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
      const timer = window.setTimeout(() => {
        setInView(true);
      }, 0);
      return () => window.clearTimeout(timer);
    }

    let animationFrameId: number;

    const updateProgress = () => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate progress: 0 when section top is at bottom of viewport, 1 when top is at top
      const distanceFromBottom = rect.top;
      const progress = 1 - distanceFromBottom / viewportHeight;

      // Clamp to 0-1
      const clampedProgress = Math.max(0, Math.min(1, progress));

      // Apply dead zone
      const adjustedProgress = Math.max(
        0,
        Math.min(
          1,
          (clampedProgress - deadZoneStart) / (deadZoneEnd - deadZoneStart),
        ),
      );

      // Only show when past dead zone
      if (adjustedProgress > 0.01) {
        setInView(true);
      }

      animationFrameId = requestAnimationFrame(updateProgress);
    };

    updateProgress();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [deadZoneStart, deadZoneEnd]);

  return { ref, inView };
}
