import { Reveal, SectionHeading, SectionShell } from "../shared";

const STEPS = [
  {
    title: "Understand the outcome",
    body: "We start with the hiring brief, product goal, or delivery constraint — not a generic pitch.",
  },
  {
    title: "Shape the right response",
    body: "Recruitment, contractor support, or build work — mapped to what the team actually needs.",
  },
  {
    title: "Move in short loops",
    body: "Clear updates, fast feedback, and visible progress keep momentum from stalling.",
  },
  {
    title: "Deliver with clarity",
    body: "Placements, compliant packages, or shipped work — handed over cleanly and ready to use.",
  },
] as const;

export function HomeProcessSection() {
  return (
    <SectionShell index="04" label="Process" theme="paper" tone="muted">
      <Reveal className="max-w-3xl">
        <SectionHeading
          size="large"
          eyebrow="How we work"
          title="Structured enough to trust. Light enough to move."
          description="Whether the work is people or product, the rhythm stays the same: understand, shape, move, deliver."
        />
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {STEPS.map((step, index) => (
          <Reveal
            key={step.title}
            delay={(index * 100) as 0 | 100 | 200 | 300}
            className="kinetic-card rounded-2xl border border-border bg-surface-elevated p-7 md:p-8"
          >
            <p className="text-sm font-semibold tabular-nums text-accent">
              0{index + 1}
            </p>
            <h3 className="mt-5 text-xl font-semibold text-text-primary">
              {step.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
              {step.body}
            </p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
