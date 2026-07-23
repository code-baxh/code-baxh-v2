import type { Metadata } from "next";
import { pageOpenGraph } from "../lib/metadata";
import { Check } from "lucide-react";
import { CtaSection } from "../sections/cta";
import { FooterSection } from "../sections/footer";
import { HeaderSection } from "../sections/header";
import { PageHero, Reveal, SectionHeading } from "../sections/shared";
import { Breadcrumbs, FaqSection } from "../sections/marketing";
import { JsonLd } from "../lib/JsonLd";
import { breadcrumbSchema } from "../lib/schema";

export const metadata: Metadata = {
  title: "Engagement Models & Pricing",
  description:
    "Work with CodeBaxh your way: fixed-scope projects, monthly retainers, or staff augmentation. Transparent estimates after a free discovery call.",
  alternates: { canonical: "/engagement" },
  openGraph: pageOpenGraph({
    url: "/engagement",
    title: "Engagement Models & Pricing",
    description: "Work with CodeBaxh your way: fixed-scope projects, monthly retainers, or staff augmentation. Transparent estimates after a free discovery call.",
  }),
};

const MODELS = [
  {
    name: "Fixed-scope project",
    anchor: "Best for a defined build",
    body: "We scope the work, agree a fixed price and milestones, and ship it. Ideal for MVPs and well-defined products.",
    points: [
      "Clear scope and fixed price",
      "Milestone-based payments",
      "Defined timeline and deliverables",
    ],
  },
  {
    name: "Monthly retainer",
    anchor: "Best for ongoing work",
    body: "A dedicated allocation of our team each month for continuous delivery, iteration, and support after launch.",
    points: [
      "Predictable monthly cost",
      "Continuous delivery & support",
      "Flexible, re-prioritized each sprint",
    ],
    featured: true,
  },
  {
    name: "Staff augmentation",
    anchor: "Best for extending your team",
    body: "Senior engineers embedded into your existing team and workflow, contributing like in-house developers.",
    points: [
      "Senior engineers, your stack",
      "Works in your tools & process",
      "Scale up or down as needed",
    ],
  },
];

const ENGAGEMENT_FAQS = [
  {
    q: "How much does a project cost?",
    a: "It depends on scope, but most production-ready MVPs start in the low five figures (USD). After a free discovery call we provide a fixed, transparent estimate — no surprises.",
  },
  {
    q: "Do you offer milestone-based payments?",
    a: "Yes. For fixed-scope projects we structure payments around milestones to reduce your risk and keep delivery accountable.",
  },
  {
    q: "Can we start small?",
    a: "Absolutely. Many clients start with a small fixed-scope project or a discovery sprint, then move to a retainer once we've proven the fit.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes — we're happy to sign an NDA before discussing sensitive details.",
  },
];

export default function EngagementPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Engagement", path: "/engagement" },
        ])}
      />
      <HeaderSection />
      <main>
        <PageHero
          eyebrow="Engagement & pricing"
          title="Work with us the way that fits."
          description="Three simple ways to engage — with transparent estimates and low-risk terms. Pricing is scoped to your project after a free discovery call."
          primaryHref="/contact"
          primaryLabel="Get a project estimate"
        />

        <section className="theme-paper border-t border-border bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Engagement", path: "/engagement" },
              ]}
            />
            <SectionHeading
              eyebrow="Engagement models"
              title="Three ways to build with CodeBaxh."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {MODELS.map((model, i) => (
                <Reveal
                  key={model.name}
                  delay={(i * 100) as 0 | 100 | 200}
                  className={`flex h-full flex-col rounded-2xl border p-7 ${
                    model.featured
                      ? "border-accent/40 bg-surface-elevated shadow-[var(--glass-shadow)]"
                      : "border-border bg-surface-elevated"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {model.anchor}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-text-primary">
                    {model.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                    {model.body}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-border pt-6">
                    {model.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-text-secondary"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2.25} aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <FaqSection faqs={ENGAGEMENT_FAQS} />
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}
