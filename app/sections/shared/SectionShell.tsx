import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionShellProps = {
  id?: string;
  index: string;
  label: string;
  theme?: "paper" | "obsidian";
  tone?: "default" | "muted" | "elevated";
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  index,
  label,
  theme = "paper",
  tone = "default",
  children,
  className = "",
}: SectionShellProps) {
  const themeClass = theme === "paper" ? "theme-paper" : "theme-obsidian";
  const toneClass =
    tone === "muted"
      ? "bg-surface-muted"
      : tone === "elevated"
        ? "bg-surface-elevated"
        : "bg-surface";

  return (
    <section
      id={id}
      className={`snap-section ${themeClass} relative overflow-hidden border-t border-border ${toneClass} py-28 md:py-36 lg:py-44 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 flex items-end justify-between gap-8 border-b border-border pb-8 md:mb-16 md:pb-10">
          <div>
            <p className="text-sm font-semibold tabular-nums tracking-[0.08em] text-accent">
              {index}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-text-muted">
              {label}
            </p>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
