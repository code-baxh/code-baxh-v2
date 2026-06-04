import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "../sections/cta";
import { FooterSection } from "../sections/footer";
import { HeaderSection } from "../sections/header";
import { PageHero, Reveal } from "../sections/shared";

const VALUES = [
  {
    title: "Specialist recruiting",
    body: "We understand engineering markets, team shapes, and the signals that separate good profiles from great fits.",
  },
  {
    title: "Builder mindset",
    body: "Because we ship software too, we talk to clients and candidates with practical product and delivery context.",
  },
  {
    title: "Clear communication",
    body: "Short loops, direct feedback, and visible progress keep hiring and build work moving without noise.",
  },
] as const;

export const metadata: Metadata = {
  title: "About — Code Baxh",
  description:
    "Learn how Code Baxh combines tech recruitment expertise with a software studio mindset.",
};

export default function AboutPage() {
  return (
    <>
      <HeaderSection />
      <main>
        <PageHero
          eyebrow="About Code Baxh"
          title="A recruitment team with a builder's eye."
          description="Code Baxh connects companies with strong technical talent and helps teams ship the digital products they need. We are small, focused, and built around momentum."
          primaryHref="/contact"
          primaryLabel="Talk to us"
          secondaryHref="/services"
          secondaryLabel="Explore services"
        />

        <section className="theme-paper border-t border-border bg-surface py-20 md:py-28">
          <div className="mx-auto grid max-w-5xl gap-12 px-5 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <Reveal>
              <p className="heading-accent text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                Our story
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
                We started with talent. We kept getting closer to the work.
              </h2>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={100}>
                <p className="text-lg leading-relaxed text-text-secondary">
                  Recruitment taught us how teams are built: the pressure of
                  deadlines, the shape of strong technical judgment, and the
                  difference the right person can make.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg leading-relaxed text-text-secondary">
                  Software delivery taught us the other side: how strategy,
                  design, engineering, and communication turn ideas into things
                  people can use. Code Baxh sits at that intersection.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <Link
                  href="/careers"
                  className="inline-flex rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-surface-muted"
                >
                  Careers at Code Baxh
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="theme-obsidian border-t border-border bg-surface-muted py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <p className="heading-accent text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                What guides us
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
                Practical, direct, and built for momentum.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {VALUES.map((value, index) => (
                <Reveal
                  key={value.title}
                  delay={(index * 100) as 0 | 100 | 200}
                  className="kinetic-card rounded-2xl border border-border bg-surface-elevated p-7"
                >
                  <h3 className="text-xl font-semibold text-text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
                    {value.body}
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
