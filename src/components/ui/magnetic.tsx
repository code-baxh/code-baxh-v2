"use client";

import { useRef } from "react";

/**
 * Pulls its child a few pixels toward the cursor. Mouse only; transform only, so no
 * layout shift. Plain DOM and a CSS transition (see `.magnetic` in globals.css) instead
 * of an animation library, which kept ~44 KB of JS off every page. The rect is measured
 * once on enter, so moving the pointer never forces a layout.
 */
export function Magnetic({ children, strength = 0.25 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const rect = useRef<DOMRect | null>(null);

  const moveTo = (x: number, y: number) => {
    if (ref.current) ref.current.style.transform = x || y ? `translate3d(${x}px, ${y}px, 0)` : "";
  };

  return (
    <span
      ref={ref}
      className="magnetic inline-flex"
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") rect.current = e.currentTarget.getBoundingClientRect();
      }}
      onPointerMove={(e) => {
        const r = rect.current;
        if (e.pointerType !== "mouse" || !r) return;
        moveTo((e.clientX - (r.left + r.width / 2)) * strength, (e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        rect.current = null;
        moveTo(0, 0);
      }}
    >
      {children}
    </span>
  );
}
