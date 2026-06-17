import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ShowcasePanel } from "./showcase-panels";

export function ShowcasePanelContent({
  panel,
  compact = false,
}: {
  panel: ShowcasePanel;
  compact?: boolean;
}) {
  return (
    <div
      className={[
        "showcase-panel relative grid grid-cols-1",
        compact ? "gap-3" : "gap-4",
        "md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-12 lg:gap-16",
      ].join(" ")}
    >
      <div>
        <p
          className={[
            "font-semibold uppercase tracking-[0.22em] text-accent",
            compact ? "text-[0.55rem] sm:text-[0.65rem]" : "text-[0.6rem]",
            "md:text-xs",
          ].join(" ")}
        >
          {panel.tag}
        </p>
        <h3
          className={[
            "font-semibold tracking-tight text-text-primary",
            compact ? "mt-1 text-[1rem] sm:text-2xl" : "mt-2 text-lg sm:text-2xl",
            "md:mt-4 md:text-4xl lg:text-[2.75rem] lg:leading-[1.08]",
          ].join(" ")}
        >
          {panel.title}
        </h3>
        <p
          className={[
            "max-w-md leading-relaxed text-text-secondary",
            compact ? "mt-1 text-[0.78rem] sm:mt-3 sm:text-base" : "mt-2 text-[0.85rem] sm:mt-3 sm:text-base",
            "md:mt-5 md:text-lg",
          ].join(" ")}
        >
          {panel.body}
        </p>
        <Link
          href={panel.href}
          className={[
            "group inline-flex items-center gap-2 rounded-full bg-accent font-semibold text-[#0d0d0d] transition-[transform,opacity] hover:-translate-y-px hover:opacity-90",
            compact ? "mt-2 px-3 py-1.5 text-[0.65rem] sm:mt-6 sm:px-6 sm:py-3 sm:text-sm" : "mt-3 px-4 py-2 text-[0.7rem] sm:mt-6 sm:px-6 sm:py-3 sm:text-sm",
            "md:mt-8 md:text-base",
          ].join(" ")}
        >
          {panel.cta}
          <ArrowUpRight
            className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={2}
            aria-hidden
          />
        </Link>
      </div>
      <ul className={compact ? "hidden md:grid md:gap-3" : "grid gap-1.5 md:gap-3"}>
        {panel.points.map((point) => (
          <li
            key={point}
            className={[
              "rounded-lg border border-white/10 bg-white/[0.04] font-medium text-text-primary transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent/30",
              compact
                ? "px-3 py-2 text-[0.72rem] sm:rounded-xl sm:px-5 sm:py-4 sm:text-sm md:text-base"
                : "px-3 py-2 text-[0.72rem] sm:rounded-xl sm:px-5 sm:py-4 sm:text-sm md:text-base",
            ].join(" ")}
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
