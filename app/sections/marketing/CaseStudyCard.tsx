import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "../../lib/work";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group kinetic-card flex h-full flex-col rounded-xl border border-border bg-surface-elevated p-4 sm:rounded-2xl sm:p-5 md:p-7 md:p-8"
    >
      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-accent sm:text-[0.6875rem]">
        {study.category}
      </p>
      <h3 className="mt-2 flex items-start justify-between gap-2 text-base font-semibold tracking-tight text-text-primary sm:mt-3 sm:gap-3 sm:text-lg md:text-xl">
        {study.title}
        <ArrowUpRight
          className="size-3 shrink-0 text-text-muted transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent sm:size-4"
          strokeWidth={2}
          aria-hidden
        />
      </h3>
      <p className="mt-2 flex-1 text-xs leading-relaxed text-text-secondary sm:mt-3 sm:text-sm md:text-base">
        {study.summary}
      </p>
      {study.clients && study.clients.length > 0 && (
        <p className="mt-3 text-[0.65rem] text-text-muted sm:mt-5 sm:text-xs">
          {study.clients.join(" · ")}
        </p>
      )}
      <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2 sm:mt-4">
        {study.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border px-2 py-0.5 text-[0.6rem] text-text-muted sm:px-2.5 sm:py-1 sm:text-[0.6875rem]"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
