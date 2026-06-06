import type { Metadata } from "next";
import { CtaSection } from "../sections/cta";
import { FooterSection } from "../sections/footer";
import { HeaderSection } from "../sections/header";
import { PageHero, Reveal, SectionHeading } from "../sections/shared";
import {
  StatStrip,
  FounderSection,
  ClientLogos,
  Breadcrumbs,
} from "../sections/marketing";
import { JsonLd } from "../lib/JsonLd";
import { breadcrumbSchema } from "../lib/schema";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "About CodeBaxh — Senior Full-Stack Software Studio",
  description:
    "CodeBaxh is a senior full-stack software studio led by Bilal Khursheed, building production web, SaaS, and AI products for US and EU clients. Upwork Top Rated Plus.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "Senior, hands-on delivery",
    body: "No hand-offs to juniors. The people who scope your build are the people who write the production code.",
  },
  {
    title: "Clear, async communication",
    body: "Weekly demos, a shared board, and direct updates across US and EU hours. You always know where things stand.",
  },
  {
    title: "Built to last",
    body: "We ship fast, but on production-grade architecture — so your MVP becomes the foundation for v2, not a rewrite.",
  },
  {
    title: "Low-risk engagements",
    body: "Free discovery calls, clear contracts, NDAs on request, and milestone-based payments.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <HeaderSection />
      <main>
        <PageHero
          eyebrow="About CodeBaxh"
          title="A senior software studio that ships."
          description="We're a small, full-stack team that builds production web, SaaS, and AI products for companies in the US and EU — with the proof to back it."
          primaryHref="/contact"
          primaryLabel="Book a free discovery call"
          secondaryHref="/work"
          secondaryLabel="See our work"
        />

        <section className="theme-paper border-t border-border bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
              ]}
            />
            <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
              <Reveal>
                <p className="heading-accent text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                  Who we are
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
                  Production experience, not promises.
                </h2>
              </Reveal>
              <div className="space-y-6">
                <Reveal delay={100}>
                  <p className="text-lg leading-relaxed text-text-secondary">
                    CodeBaxh builds software that runs in production for real
                    customers. We led the build of Zoneomics — a geospatial SaaS
                    platform used by Redfin, CBRE, Moody&apos;s, and Cushman &amp;
                    Wakefield — and we&apos;ve shipped multi-tenant SaaS MVPs and
                    production AI systems for international clients.
                  </p>
                </Reveal>
                <Reveal delay={200}>
                  <p className="text-lg leading-relaxed text-text-secondary">
                    We&apos;re based in Islamabad and work with teams across the US
                    and EU. {SITE.timezoneNote}.
                  </p>
                </Reveal>
              </div>
            </div>

            <div className="mt-14">
              <StatStrip />
            </div>
          </div>
        </section>

        <FounderSection />

        <section className="theme-obsidian border-t border-border bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="What guides us"
              title="How we work with clients."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {VALUES.map((value, i) => (
                <Reveal
                  key={value.title}
                  delay={((i % 2) * 100) as 0 | 100}
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

        <section className="theme-paper border-t border-border bg-surface py-16">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <ClientLogos />
          </div>
        </section>
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}
