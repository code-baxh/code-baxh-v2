"use client";

import type { ElementType, ReactNode } from "react";
import { useScrollReveal } from "./useInView";

type RevealGroupProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  id?: string;
  threshold?: number;
};

/**
 * Staggered scroll-in for a group of RevealItems. Items are visible in the
 * server HTML; the group only hides items ("--pending") after hydration when
 * it is still below the viewport (see useScrollReveal — LCP-critical).
 */
export function RevealGroup({
  as: Component = "div",
  children,
  className = "",
  id,
  threshold = 0.12,
}: RevealGroupProps) {
  const { ref, phase } = useScrollReveal<HTMLElement>(threshold);
  const phaseClass =
    phase === "hidden"
      ? "reveal-group--pending"
      : phase === "revealed"
        ? "reveal-group--visible"
        : "";

  return (
    <Component
      ref={ref}
      id={id}
      className={["reveal-group", phaseClass, className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  index: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
};

export function RevealItem({ children, className = "", index }: RevealItemProps) {
  return (
    <div className={["reveal-item", `reveal-item--${index}`, className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
