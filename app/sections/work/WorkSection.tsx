import { SectionHeading } from "../shared";
import { WorkCard } from "./WorkCard";

const PLACEHOLDER_COUNT = 2;

export function WorkSection() {
  return (
    <section
      id="work"
      className="theme-obsidian border-t border-border bg-surface py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Products we've shipped with teams like yours."
          description="From MVPs to mature platforms — we focus on clean architecture, sharp UX, and code you'll want to maintain."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 md:gap-5">
          {Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => (
            <WorkCard key={i + 1} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
