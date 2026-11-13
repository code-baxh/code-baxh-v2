"use client";

import { useState } from "react";
import { CaseStudyCard } from "@/components/cards/case-study-card";
import type { CaseStudy } from "@/content/types";
import { cn } from "@/lib/utils";

/** Filterable case-study grid. All cards are in the HTML; the filter only hides non-matching ones. */
export function WorkGrid({ studies }: { studies: CaseStudy[] }) {
  const categories = ["All", ...Array.from(new Set(studies.map((s) => s.category)))];
  const [active, setActive] = useState("All");
  const shown = studies.filter((s) => active === "All" || s.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter case studies by type" className="flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={cn(
              "min-h-11 rounded-full border px-5 text-sm transition-colors",
              active === c
                ? "border-accent bg-accent text-accent-fg"
                : "border-line-strong text-fg hover:border-accent-text hover:text-accent-text",
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="mt-6 text-center text-sm text-muted">
        Showing {shown.length} of {studies.length} case studies
      </p>
      <ul className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {studies.map((s) => (
          <li key={s.slug} hidden={!shown.includes(s)}>
            <CaseStudyCard study={s} />
          </li>
        ))}
      </ul>
    </div>
  );
}
