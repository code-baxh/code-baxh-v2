import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ShowcasePanel } from "./showcase-panels";

export function ShowcasePanelContent({ panel }: { panel: ShowcasePanel }) {
  return (
    <div className="showcase-panel relative grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-12 lg:gap-16">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          {panel.tag}
        </p>
        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
          {panel.title}
        </h3>
        <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary md:text-lg">
          {panel.body}
        </p>
        <Link
          href={panel.href}
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#0d0d0d] transition-[transform,opacity] hover:-translate-y-px hover:opacity-90 md:text-base"
        >
          {panel.cta}
          <ArrowUpRight
            className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={2}
            aria-hidden
          />
        </Link>
      </div>
      <ul className="grid gap-3">
        {panel.points.map((point) => (
          <li
            key={point}
            className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-medium text-text-primary transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent/30 md:text-base"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
