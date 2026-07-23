import type { Metadata } from "next";
import { pageOpenGraph } from "../lib/metadata";
import { Compass, PenTool, RefreshCw, Rocket, Check } from "lucide-react";
import { CtaSection } from "../sections/cta";
import { FooterSection } from "../sections/footer";
import { HeaderSection } from "../sections/header";
import { PageHero, Reveal, SectionHeading } from "../sections/shared";
import { Breadcrumbs, FaqSection } from "../sections/marketing";
import { JsonLd } from "../lib/JsonLd";
import { breadcrumbSchema } from "../lib/schema";
import { PROCESS_STEPS } from "../lib/services";

export const metadata: Metadata = {
  title: "Our Process — From Discovery to Launch",
  description:
    "How CodeBaxh runs engagements: discovery, design & architecture, build in short loops, then deploy & support — with weekly demos and async updates.",
  alternates: { canonical: "/process" },
  openGraph: pageOpenGraph({
    url: "/process",
    title: "Our Process — From Discovery to Launch",
    description: "How CodeBaxh runs engagements: discovery, design & architecture, build in short loops, then deploy & support — with weekly demos and async updates.",
  }),
};

/**
 * Page-local enrichment for each PROCESS_STEP (shared data stays lean for the
 * homepage grid). Index-aligned with PROCESS_STEPS.
 */
const PROCESS_DETAIL = [
  {
    icon: Compass,
    meta: "Week 0 · Free call",
    points: [
      "Align on the outcome, scope, and success metrics",
      "Surface risks, constraints, and dependencies early",
      "Leave with a clear plan and a fixed next step",
    ],
  },
  {
    icon: PenTool,
    meta: "Before we write code",
    points: [
      "Data model and system architecture mapped up front",
      "Key flows and UX designed and reviewed with you",
      "Tech chosen for your project — not a template",
    ],
  },
  {
    icon: RefreshCw,
    meta: "Weekly cadence",
    points: [
      "A working demo every week — never status decks",
      "A shared board you can check anytime",
      "Async updates across your working hours",
    ],
  },
  {
    icon: Rocket,
    meta: "Launch & beyond",
    points: [
      "CI/CD, monitoring, and production hardening",
      "Clean handover: documentation, infra, and access",
      "Optional retainer for iteration and scaling",
    ],
  },
] as const;

const PROCESS_FAQS = [
  {
    q: "How often will we hear from you?",
    a: "Weekly, at minimum — a demo of working software plus a shared board you can check anytime, and async updates throughout the week across your working hours.",
  },
  {
    q: "What do you need from us to start?",
    a: "A discovery call to align on the outcome, then access to any existing systems or content. We handle the rest and keep you involved at each weekly checkpoint.",
  },
  {
    q: "What happens after launch?",
    a: "We provide a clean handover (documentation, infrastructure, access) and can stay on for support, iteration, and scaling via a retainer.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Process", path: "/process" },
        ])}
      />
      <HeaderSection />
      <main>
        <PageHero
          eyebrow="Process"
          title="A calm, visible way to ship software."
          description="Structured enough to trust, light enough to move fast. The same rhythm from first call to launch."
          primaryHref="/contact"
          primaryLabel="Book a free discovery call"
        />

        <section className="theme-paper border-t border-border bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Process", path: "/process" },
              ]}
            />

            <Reveal>
              <SectionHeading
                eyebrow="How we work"
                title="From first call to launch, step by step."
                description="Four steps, one steady rhythm — here's exactly what happens, and what you get, at each stage of an engagement."
              />
            </Reveal>

            <ol className="mt-12 sm:mt-16">
              {PROCESS_STEPS.map((step, i) => {
                const detail = PROCESS_DETAIL[i];
                const Icon = detail.icon;
                const isLast = i === PROCESS_STEPS.length - 1;

                return (
                  <Reveal
                    as="li"
                    key={step.title}
                    delay={((i % 3) * 100) as 0 | 100 | 200}
                    className="relative flex gap-5 pb-8 last:pb-0 sm:gap-6"
                  >
                    {/* Timeline rail: node + connector to the next step */}
                    <div className="relative flex flex-col items-center">
                      <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-surface-elevated text-accent shadow-sm">
                        <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                      </span>
                      {!isLast ? (
                        <span
                          aria-hidden
                          className="absolute left-1/2 top-12 -bottom-8 w-px -translate-x-1/2 bg-linear-to-b from-accent/40 via-border to-border"
                        />
                      ) : null}
                    </div>

                    {/* Step card */}
                    <div className="accent-hover-card kinetic-card min-w-0 flex-1 rounded-2xl p-6 md:p-7">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="font-mono text-xs font-semibold tabular-nums text-accent">
                          0{i + 1}
                        </span>
                        <span
                          className="size-1 rounded-full bg-text-muted/50"
                          aria-hidden
                        />
                        <span className="text-xs font-medium uppercase tracking-[0.14em] text-text-muted">
                          {detail.meta}
                        </span>
                      </div>

                      <h2 className="mt-2 text-xl font-semibold text-text-primary md:text-2xl">
                        {step.title}
                      </h2>
                      <p className="mt-3 text-base leading-relaxed text-text-secondary">
                        {step.body}
                      </p>

                      <ul className="mt-5 grid gap-2.5 border-t border-border pt-5">
                        {detail.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary"
                          >
                            <Check
                              className="mt-0.5 size-4 shrink-0 text-accent"
                              strokeWidth={2.25}
                              aria-hidden
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </section>

        <FaqSection faqs={PROCESS_FAQS} />
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}
