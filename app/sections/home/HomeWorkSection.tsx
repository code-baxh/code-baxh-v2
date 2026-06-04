import { Reveal, SectionHeading, SectionLink, SectionShell } from "../shared";
import { WorkCard } from "../work/WorkCard";
import { WORK_ITEMS } from "../work/constants";

const NOTES = [
  "shortlists with context",
  "fast technical alignment",
  "contractor compliance",
  "product-minded builds",
  "clear launch handoff",
  "market signal over noise",
] as const;

export function HomeWorkSection() {
  return (
    <SectionShell
      id="work"
      index="03"
      label="Selected work"
      theme="obsidian"
      className="relative"
    >
      <div className="section-orb -right-32 top-16 h-80 w-80 opacity-40" />

      <div className="relative">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-3xl">
            <SectionHeading
              size="large"
              eyebrow="Proof of work"
              title="Placements and products we have delivered."
              description="A sample of the kind of outcomes we create — engineering hires, contractor rollouts, and shipped digital work."
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionLink href="/services" label="See how we work" />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 md:gap-6">
          {WORK_ITEMS.map((item, index) => (
            <Reveal
              key={item.title}
              delay={(index * 100) as 0 | 100 | 200 | 300}
            >
              <WorkCard {...item} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={400} className="mt-16 overflow-hidden border-y border-border py-6">
          <div className="hero-marquee-track">
            {[...NOTES, ...NOTES].map((note, index) => (
              <span
                key={`${note}-${index}`}
                className="rounded-full border border-border bg-surface-elevated px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-text-secondary"
              >
                {note}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
