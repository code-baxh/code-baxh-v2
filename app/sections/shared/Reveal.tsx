"use client";

import type { ElementType, ReactNode } from "react";
import { useInView } from "./useInView";

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: 0 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
  id?: string;
  threshold?: number;
};

export function Reveal({
  as: Component = "div",
  children,
  className = "",
  delay = 0,
  id,
  threshold = 0.16,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>(threshold);
  const delayClass = delay > 0 ? `delay-${delay}` : "";

  return (
    <Component
      ref={ref}
      id={id}
      className={[
        "reveal-motion",
        inView ? "animate-fade-up" : "translate-y-5 opacity-0",
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
