import Link from "next/link";
import { Rocket, BrainCircuit, Gauge, ShieldCheck } from "lucide-react";
import { CtaSection } from "./sections/cta";
import { FooterSection } from "./sections/footer";
import { HeaderSection } from "./sections/header";
import { HeroSection } from "./sections/hero";
import {
  ClientLogos,
  HomeShowcase,
  StatStrip,
  ServicesGrid,
  CaseStudyCard,
  ProcessSteps,
  TechStackStrip,
  Testimonials,
  FounderSection,
  FaqSection,
} from "./sections/marketing";
import { Reveal, SectionHeading, SectionLink } from "./sections/shared";
import { CASE_STUDIES } from "./lib/work";

const VALUE_PROPS = [
  {
    icon: Rocket,
    title: "We ship real products",
    body: "Web and mobile apps to multi-tenant SaaS — real software people use, including an MVP delivered in 11 weeks. Not prototypes.",
  },
  {
    icon: BrainCircuit,
    title: "AI that actually works",
    body: "RAG pipelines, LLM features, and AI agents built for real users — grounded in your data, evaluated, and cost-controlled.",
  },
  {
    icon: Gauge,
    title: "Fast time-to-launch",
    body: "Tight scoping and experienced delivery get you to a launched, fundable product in weeks, not quarters.",
  },
  {
    icon: ShieldCheck,
    title: "One team, end to end",
    body: "Design, web, mobile, backend, AI, and cloud under one roof. The people who scope your build write the code.",
  },
];

const HOME_FAQS = [
  {
    q: "What does CodeBaxh do?",
    a: "CodeBaxh is a full-stack software development team. We build web apps, multi-tenant SaaS platforms, and AI/LLM products using Next.js, React, Node.js, Python, and more — for startups and companies worldwide.",
  },
  {
    q: "Where is CodeBaxh based, and who do you work with?",
    a: "We're based in Islamabad, Pakistan, and work with clients worldwide — across North America, Europe, the Middle East, and beyond. We flex our hours to overlap with yours, run an async-first workflow, and communicate in fluent English.",
  },
  {
    q: "How fast can you ship a product?",
    a: "It depends on scope, but we delivered a launch-ready multi-tenant SaaS MVP in 11 weeks. We scope tightly and ship in weekly loops so you see working software quickly.",
  },
  {
    q: "How do we get started?",
    a: "Book a free, no-obligation discovery call. We'll map your outcome, scope the work, and give you a clear estimate and next step.",
  },
  {
    q: "Do you sign NDAs and use milestone-based payments?",
    a: "Yes. We're happy to sign an NDA, work to clear contracts, and structure payments around milestones to reduce your risk.",
  },
];

export default function Home() {
  const featured = CASE_STUDIES.filter((c) => c.featured);

  return (
    <>
      <HeaderSection />
      <main>
        <HeroSection />

        {/* Trust strip — above the fold */}
        <section className="theme-obsidian border-t border-border bg-surface py-10">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <ClientLogos />
          </div>
        </section>

        {/* Value proposition */}
        <section className="theme-paper border-t border-border bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Why CodeBaxh"
              title="A product partner, not a body shop."
              description="Breadth across web, SaaS, and AI — with the depth of an experienced team that ships."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {VALUE_PROPS.map((prop, i) => {
                const Icon = prop.icon;
                return (
                  <Reveal
                    key={prop.title}
                    delay={(i * 100) as 0 | 100 | 200 | 300}
                    className="kinetic-card rounded-2xl border border-border bg-surface-elevated p-7"
                  >
                    <Icon className="size-7 text-accent" strokeWidth={1.75} aria-hidden />
                    <h3 className="mt-5 text-lg font-semibold text-text-primary">
                      {prop.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {prop.body}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Signature sticky-stacking showcase */}
        <HomeShowcase />

        {/* Services overview */}
        <section className="theme-obsidian border-t border-border bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="All services"
                title="Everything you need to ship a product."
                description="From web and mobile to SaaS, AI, backend, and cloud — pick the service that fits. Each is handled by an experienced team."
              />
              <SectionLink href="/services" label="View all services" />
            </div>
            <div className="mt-12">
              <ServicesGrid limit={6} />
            </div>
          </div>
        </section>

        {/* Social proof / portfolio */}
        <section className="theme-paper border-t border-border bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Selected work"
                title="Real software, real results."
                description="From multi-tenant SaaS to AI systems — work that shipped, scaled, and is used by real customers."
              />
              <SectionLink href="/work" label="All case studies" />
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {featured.map((study) => (
                <Reveal key={study.slug} className="h-full">
                  <CaseStudyCard study={study} />
                </Reveal>
              ))}
            </div>
            <div className="mt-12">
              <StatStrip />
            </div>
          </div>
        </section>

        <ProcessSteps />
        <TechStackStrip />
        <Testimonials />
        <FounderSection />

        <FaqSection faqs={HOME_FAQS} title="Common questions" />

        {/* Final CTA before the standard CTA band */}
        <section className="theme-obsidian border-t border-border bg-surface py-16">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="text-base text-text-secondary">
              Have a product to build?{" "}
              <Link href="/contact" className="font-semibold text-accent hover:underline">
                Book a free discovery call
              </Link>{" "}
              — no obligation, just a clear next step.
            </p>
          </div>
        </section>
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}
