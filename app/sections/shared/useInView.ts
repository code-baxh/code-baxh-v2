"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export type RevealPhase = "static" | "hidden" | "revealed";

/**
 * Scroll-reveal that is safe for SSR/LCP: the server HTML is always fully
 * visible ("static"); after hydration, only elements still BELOW the viewport
 * are hidden and revealed on scroll. Elements already on screen stay visible
 * with no animation, and reduced-motion users never see the effect.
 *
 * Do not go back to shipping `opacity-0` in server markup — hiding content
 * until hydration + IntersectionObserver gated article FCP/LCP at ~8s on
 * CPU-throttled mobile (found in the 2026-07 CWV audit).
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  threshold = 0.15,
): { ref: RefObject<T | null>; phase: RevealPhase } {
  const ref = useRef<T>(null);
  const [phase, setPhase] = useState<RevealPhase>("static");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = element.getBoundingClientRect();
    const alreadyOnScreen = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyOnScreen) return;

    setPhase("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("revealed");
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, phase };
}

export function useInView<T extends HTMLElement = HTMLElement>(
  threshold = 0.15,
  rootMargin = "0px",
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
}
