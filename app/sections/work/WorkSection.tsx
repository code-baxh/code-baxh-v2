import { Reveal, SectionHeading } from "../shared";
import { WorkCard } from "./WorkCard";
import { WORK_ITEMS } from "./constants";

const NOTES = [
  "shortlists with context",
  "fast technical alignment",
  "contractor compliance",
  "product-minded builds",
  "clear launch handoff",
  "market signal over noise",
] as const;

export function WorkSection() {
  return (
    <section
      id="work"
      className="snap-section theme-obsidian relative overflow-hidden border-t border-border bg-surface py-20 md:py-28"
    >
      <div className="section-orb -right-32 top-20 h-80 w-80 opacity-50" />
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Placements and products we've delivered."
            description="From engineering hires and contractor rollouts to shipped websites and platforms — a sample of how we work with teams."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:gap-5">
          {WORK_ITEMS.map((item, index) => (
            <Reveal
              key={item.title}
              delay={(index * 100) as 0 | 100 | 200 | 300}
            >
              <WorkCard {...item} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={400} className="mt-14 overflow-hidden border-y border-border py-5">
          <div className="hero-marquee-track">
            {[...NOTES, ...NOTES].map((note, index) => (
              <span
                key={`${note}-${index}`}
                className="rounded-full border border-border bg-surface-elevated px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-text-secondary"
              >
                {note}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
