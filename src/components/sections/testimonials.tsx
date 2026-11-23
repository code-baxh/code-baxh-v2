import { ArrowUpRight, Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";
import { upworkProfile } from "@/content/testimonials";
import type { Testimonial } from "@/content/types";
import { cn } from "@/lib/utils";

const monthYear = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });

const defaultLead = `Unedited excerpts from reviews clients left on Upwork for our founder, Bilal Khursheed: ${upworkProfile.badge}, with ${upworkProfile.jobSuccess} Job Success.`;

/**
 * Client reviews quoted from Upwork, each attributed and dated, with a link to read
 * every review there. No review schema on purpose (see content/testimonials.ts).
 */
export function Testimonials({
  items,
  eyebrow = "Client reviews",
  title = "What clients say.",
  lead = defaultLead,
  className,
}: {
  items: Testimonial[];
  eyebrow?: string;
  title?: string;
  lead?: string;
  className?: string;
}) {
  if (!items.length) return null;
  return (
    <div className={className}>
      <Reveal>
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
      </Reveal>
      <ul className={cn("mt-12 grid gap-4", items.length > 2 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2")}>
        {items.map((t, i) => (
          <li key={t.id}>
            <Reveal delay={(i % 3) * 0.06} className="h-full">
              <figure className="card flex h-full flex-col p-6 text-left sm:p-7">
                <p className="flex items-center gap-0.5 text-accent-text">
                  {Array.from({ length: 5 }, (_, s) => (
                    <Star key={s} aria-hidden className={cn("size-4", s < Math.round(t.rating) && "fill-current")} />
                  ))}
                  <span className="sr-only">Rated {t.rating} out of 5 on Upwork</span>
                </p>
                <blockquote className="mt-4 flex-1 leading-relaxed text-fg">
                  <p>&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <p className="font-medium">{t.author ?? "Client on Upwork"}</p>
                  <p className="mt-0.5 text-sm text-muted">{t.project}</p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-muted">
                    Upwork · <time dateTime={t.date}>{monthYear(t.date)}</time>
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-center">
        <a
          href={upworkProfile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 font-medium text-accent-text hover:underline"
        >
          Read every review on Upwork <ArrowUpRight aria-hidden className="size-4" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}
