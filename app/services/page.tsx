import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "../sections/cta";
import { FooterSection } from "../sections/footer";
import { HeaderSection } from "../sections/header";
import { ServiceCard } from "../sections/services/ServiceCard";
import {
  BUILD_SERVICES,
  RECRUITMENT_SERVICES,
} from "../sections/services/constants";
import { PageHero, Reveal } from "../sections/shared";

const PROCESS = [
  "Map the outcome",
  "Shape the right team",
  "Move in short loops",
  "Deliver with clarity",
] as const;

export const metadata: Metadata = {
  title: "Services — Code Baxh",
  description:
    "Tech recruitment, contractor packages, websites, and software delivery services from Code Baxh.",
};

export default function ServicesPage() {
  return (
    <>
      <HeaderSection />
      <main>
        <PageHero
          eyebrow="Services"
          title="Talent when you need people. Product when you need momentum."
          description="We support hiring teams with specialist recruitment and delivery teams with practical design and software build work."
          primaryHref="/contact"
          primaryLabel="Start a conversation"
          secondaryHref="/about"
          secondaryLabel="About the team"
        />

        <section className="theme-paper border-t border-border bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <p className="heading-accent text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                Talent and recruitment
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
                The right people, found with context.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
              {RECRUITMENT_SERVICES.map((service, index) => (
                <Reveal
                  key={service.title}
                  delay={(index * 100) as 0 | 100 | 200}
                >
                  <ServiceCard {...service} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="theme-obsidian border-t border-border bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <p className="heading-accent text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                Design and development
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
                Websites, tools, and software built with care.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
              {BUILD_SERVICES.map((service, index) => (
                <Reveal
                  key={service.title}
                  delay={(index * 100) as 0 | 100 | 200}
                >
                  <ServiceCard {...service} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="theme-paper border-t border-border bg-surface-muted py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <p className="heading-accent text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                How work moves
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
                Simple enough to follow. Structured enough to scale.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-4">
              {PROCESS.map((step, index) => (
                <Reveal
                  key={step}
                  delay={(index * 100) as 0 | 100 | 200 | 300}
                  className="rounded-2xl border border-border bg-surface-elevated p-6"
                >
                  <p className="text-sm font-semibold text-accent">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-text-primary">
                    {step}
                  </h3>
                </Reveal>
              ))}
            </div>
            <Reveal delay={400} className="mt-12">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-text-primary px-7 py-3.5 text-sm font-medium text-surface transition-opacity hover:opacity-90 md:text-base"
              >
                Scope your need
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}
