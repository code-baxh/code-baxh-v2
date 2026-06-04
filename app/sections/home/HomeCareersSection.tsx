import Link from "next/link";
import { Reveal, SectionHeading, SectionLink, SectionShell } from "../shared";

const ROLES = [
  "Recruitment consultants",
  "Frontend and full-stack engineers",
  "Product-minded designers",
  "Operators who keep work moving",
] as const;

export function HomeCareersSection() {
  return (
    <SectionShell
      id="careers"
      index="06"
      label="Careers"
      theme="paper"
      tone="muted"
    >
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            size="large"
            eyebrow="Join us"
            title="Small team. Wide field of work."
            description="We are always looking for sharp recruiters, engineers, and operators who care about talent and craft."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="mailto:code.baxh@gmail.com?subject=Careers%20at%20Code%20Baxh"
              className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#0d0d0d] transition-[transform,opacity] hover:-translate-y-px hover:opacity-90"
            >
              Apply now
            </Link>
            <SectionLink href="/careers" label="Explore careers" />
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {ROLES.map((role, index) => (
            <Reveal
              key={role}
              delay={(index * 100) as 0 | 100 | 200 | 300}
              className="kinetic-card flex min-h-[7.5rem] items-end rounded-2xl border border-border bg-surface-elevated p-6"
            >
              <p className="text-base font-medium leading-snug text-text-primary">
                {role}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
