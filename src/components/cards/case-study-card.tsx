import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GlowCard } from "@/components/ui/glow-card";
import { Photo } from "@/components/ui/photo";
import { caseStudyImage } from "@/content/images";
import type { CaseStudy } from "@/content/types";

/** Client name, or a neutral label when we do not have permission to name them. */
export const clientLabel = (c: CaseStudy) =>
  c.clientNamePermission && c.clientName ? c.clientName : "Client name withheld";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <GlowCard className="flex h-full flex-col p-4">
      <Photo
        name={caseStudyImage[study.slug] ?? "circuit"}
        decorative
        scrim
        className="aspect-[16/9] rounded-[0.9rem]"
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
      >
        <p className="eyebrow absolute bottom-3 left-4 !text-white">{study.sector}</p>
        <ArrowUpRight aria-hidden className="absolute right-4 top-4 size-5 text-white" />
      </Photo>
      <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
        <p className="text-xs text-muted">{clientLabel(study)}</p>
        <h3 className="mt-1.5 text-xl font-semibold">
          <Link href={`/work/${study.slug}`} className="stretched">
            {study.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm text-muted">{study.summary}</p>
        {study.role === "founder-engineer" ? (
          <p className="mt-4 border-l-2 border-accent-text pl-3 text-sm text-fg">{study.roleNote}</p>
        ) : null}
        <ul className="mt-auto flex flex-wrap gap-2 pt-5">
          {study.stack.slice(0, 4).map((t) => (
            <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </GlowCard>
  );
}
