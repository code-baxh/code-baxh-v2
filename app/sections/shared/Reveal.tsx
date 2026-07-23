"use client";

import type { ElementType, ReactNode } from "react";
import { useScrollReveal } from "./useInView";

type RevealVariant = "fade-up" | "pop-in";

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: 0 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
  id?: string;
  threshold?: number;
  variant?: RevealVariant;
};

/**
 * Scroll-in animation wrapper. Server HTML renders content fully visible;
 * only elements below the viewport at hydration get hidden and animated in
 * (see useScrollReveal for why — this is LCP-critical).
 */
export function Reveal({
  as: Component = "div",
  children,
  className = "",
  delay = 0,
  id,
  threshold = 0.16,
  variant = "fade-up",
}: RevealProps) {
  const { ref, phase } = useScrollReveal<HTMLElement>(threshold);
  const delayClass = delay > 0 ? `delay-${delay}` : "";
  const hiddenClass =
    variant === "pop-in"
      ? "translate-y-4 scale-[0.985] opacity-0"
      : "translate-y-5 opacity-0";
  const visibleClass = variant === "pop-in" ? "animate-pop-in" : "animate-fade-up";
  const phaseClass =
    phase === "hidden" ? hiddenClass : phase === "revealed" ? visibleClass : "";

  return (
    <Component
      ref={ref}
      id={id}
      className={[
        "reveal-motion",
        phaseClass,
        phase === "static" ? "" : delayClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}
