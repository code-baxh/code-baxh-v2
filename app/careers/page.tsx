import type { Metadata } from "next";
import { CtaSection } from "../sections/cta";
import { FooterSection } from "../sections/footer";
import { HeaderSection } from "../sections/header";
import { PageHero, Reveal } from "../sections/shared";

const ROLE_AREAS = [
  "Recruitment consultants",
  "Frontend and full-stack engineers",
  "Product-minded designers",
  "Operators who keep work moving",
] as const;

const CULTURE_NOTES = [
  {
    title: "High agency",
    body: "We like people who can notice what needs doing, communicate clearly, and move without waiting for perfect instructions.",
  },
  {
    title: "Craft matters",
    body: "Whether you are speaking with candidates or building UI, quality shows up in the small details.",
  },
  {
    title: "Calm momentum",
    body: "Fast does not mean chaotic. We value steady progress, direct feedback, and practical ownership.",
  },
] as const;

export const metadata: Metadata = {
  title: "Careers — Code Baxh",
  description:
    "Join Code Baxh across recruitment, engineering, design, and operations.",
};

export default function CareersPage() {
  return (
    <>
      <HeaderSection />
      <main>
        <PageHero
          eyebrow="Careers"
          title="Join a small team with a wide field of work."
          description="We work across people, product, and delivery. If you care about sharp communication and thoughtful execution, we want to hear from you."
          primaryHref="mailto:code.baxh@gmail.com?subject=Careers%20at%20Code%20Baxh"
          primaryLabel="Apply now"
          secondaryHref="/about"
          secondaryLabel="Learn about us"
        />

        <section className="theme-paper border-t border-border bg-surface py-20 md:py-28">
          <div className="mx-auto grid max-w-5xl gap-12 px-5 sm:px-8 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <Reveal>
              <p className="heading-accent text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                Open paths
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
                We are always looking for sharp people.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-text-secondary md:text-lg">
                Send your CV, portfolio, LinkedIn, or a short note. We care
                more about signal than format.
              </p>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {ROLE_AREAS.map((role, index) => (
                <Reveal
                  key={role}
                  delay={(index * 100) as 0 | 100 | 200 | 300}
                  className="kinetic-card rounded-2xl border border-border bg-surface-elevated p-6"
                >
                  <p className="text-sm font-semibold text-text-primary">
                    {role}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="theme-obsidian border-t border-border bg-surface-muted py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <p className="heading-accent text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                How we work
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
                Small team energy, professional standards.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {CULTURE_NOTES.map((note, index) => (
                <Reveal
                  key={note.title}
                  delay={(index * 100) as 0 | 100 | 200}
                  className="rounded-2xl border border-border bg-surface-elevated p-7"
                >
                  <h3 className="text-xl font-semibold text-text-primary">
                    {note.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
                    {note.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}
