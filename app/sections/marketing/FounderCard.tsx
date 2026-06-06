import Link from "next/link";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { FOUNDER } from "../../lib/site";
import { Reveal, SectionHeading } from "../shared";

export function FounderSection() {
  return (
    <section className="theme-paper border-t border-border bg-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 px-5 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Who you'll work with"
            title="Senior delivery, led by the founder."
          />
        </Reveal>
        <div className="space-y-6">
          <Reveal delay={100}>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3.5 py-1.5 text-sm font-medium text-text-primary">
              <BadgeCheck className="size-4 text-accent" strokeWidth={2} aria-hidden />
              Upwork {FOUNDER.upworkBadge}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg leading-relaxed text-text-secondary">
              {FOUNDER.bio}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex rounded-full bg-text-primary px-6 py-3 text-sm font-medium text-surface transition-opacity hover:opacity-90"
              >
                More about us
              </Link>
              <a
                href={FOUNDER.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-surface-muted"
              >
                {FOUNDER.name}&apos;s portfolio
                <ArrowUpRight
                  className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2}
                  aria-hidden
                />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
