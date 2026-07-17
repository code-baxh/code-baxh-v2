"use client";

import type { ElementType, ReactNode } from "react";
import { useInView } from "./useInView";

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

export function Reveal({
  as: Component = "div",
  children,
  className = "",
  delay = 0,
  id,
  threshold = 0.16,
  variant = "fade-up",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>(threshold);
  const delayClass = delay > 0 ? `delay-${delay}` : "";
  const hiddenClass =
    variant === "pop-in"
      ? "translate-y-4 scale-[0.985] opacity-0"
      : "translate-y-5 opacity-0";
  const visibleClass = variant === "pop-in" ? "animate-pop-in" : "animate-fade-up";

  return (
    <Component
      ref={ref}
      id={id}
      className={[
        "reveal-motion",
        inView ? visibleClass : hiddenClass,
        delayClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}
