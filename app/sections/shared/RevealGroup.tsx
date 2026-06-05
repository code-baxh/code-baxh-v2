"use client";

import type { ElementType, ReactNode } from "react";
import { useInView } from "./useInView";

type RevealGroupProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  id?: string;
  threshold?: number;
};

export function RevealGroup({
  as: Component = "div",
  children,
  className = "",
  id,
  threshold = 0.12,
}: RevealGroupProps) {
  const { ref, inView } = useInView<HTMLElement>(threshold);

  return (
    <Component
      ref={ref}
      id={id}
      className={["reveal-group", inView ? "reveal-group--visible" : "", className]
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
