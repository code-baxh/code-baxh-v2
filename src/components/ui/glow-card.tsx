"use client";

import { cn } from "@/lib/utils";

/** Card whose border lights up under the pointer. */
export function GlowCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn("card card-glow", className)}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
    >
      {children}
    </div>
  );
}
