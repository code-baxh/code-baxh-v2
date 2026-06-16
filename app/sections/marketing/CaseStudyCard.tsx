import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "../../lib/work";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group kinetic-card flex h-full flex-col rounded-2xl border border-border bg-surface-elevated p-7 md:p-8"
    >
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent">
        {study.category}
      </p>
      <h3 className="mt-3 flex items-start justify-between gap-3 text-xl font-semibold tracking-tight text-text-primary">
        {study.title}
        <ArrowUpRight
          className="size-4 shrink-0 text-text-muted transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          strokeWidth={2}
          aria-hidden
        />
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary md:text-base">
        {study.summary}
      </p>
      {study.clients && study.clients.length > 0 && (
        <p className="mt-5 text-xs text-text-muted">
          {study.clients.join(" · ")}
        </p>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {study.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border px-2.5 py-1 text-[0.6875rem] text-text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
