"use client";

import { Rocket, BrainCircuit, Gauge, ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading, SectionLink, useStackProgress } from "../shared";
import { CASE_STUDIES } from "../../lib/work";
import { ORDERED_SERVICES } from "../../lib/services";
import { CaseStudyCard, ServicesGrid, StatStrip } from "../marketing";

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

export function HomeStackedSections() {
  const { ref: whyRef, inView: whyInView } = useStackProgress<HTMLDivElement>();
  const { ref: buildRef, inView: buildInView } = useStackProgress<HTMLDivElement>();
  const { ref: servicesRef, inView: servicesInView } = useStackProgress<HTMLDivElement>();
  const { ref: workRef, inView: workInView } = useStackProgress<HTMLDivElement>();

  const featured = CASE_STUDIES.filter((c) => c.featured);

  return (
    <div className="home-stack-container">
      {/* Section 1: Why Code Baxh */}
      <div
        ref={whyRef}
        className={`stack-section section-why theme-paper bg-surface ${
          whyInView ? "section-visible" : ""
        }`}
      >
        <div className="stack-section-inner mx-auto max-w-6xl px-5 sm:px-8">
          <div className="section-entrance-item section-entrance-item--1 mb-12">
            <SectionHeading
              size="large"
              eyebrow="Why Code Baxh"
              title="A product partner, not a body shop."
              description="Breadth across web, SaaS, and AI — with the depth of an experienced team that ships."
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUE_PROPS.map((prop, i) => {
              const Icon = prop.icon;
              return (
                <div
                  key={prop.title}
                  className={`section-entrance-item section-entrance-item--${i + 2} kinetic-card rounded-2xl border border-border bg-surface-elevated p-7`}
                >
                  <Icon className="size-7 text-accent" strokeWidth={1.75} aria-hidden />
                  <h3 className="mt-5 text-lg font-semibold text-text-primary">
                    {prop.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {prop.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section 2: What We Build */}
      <div
        ref={buildRef}
        className={`stack-section section-build theme-obsidian bg-surface ${
          buildInView ? "section-visible" : ""
        }`}
      >
        <div className="relative mx-auto max-w-5xl px-5 pb-32 pt-24 sm:px-8 md:pb-40 md:pt-36">
          <div className="section-entrance-item section-entrance-item--1 mx-auto mb-16 max-w-2xl text-center">
            <p className="heading-accent mx-auto inline-block text-xs font-semibold uppercase tracking-[0.2em] text-text-muted [&::before]:mx-auto">
              What we build
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary md:text-5xl md:leading-[1.05]">
              Three things we do exceptionally well.
            </h2>
          </div>
          <div className="space-y-12 md:space-y-16">
            {/* Card 1: Web & Mobile */}
            <div className="section-entrance-item section-entrance-item--2">
              <article className="showcase-card relative overflow-hidden rounded-3xl border border-white/10 p-8 md:p-12 h-fit">
                <div
                  className="showcase-card-glow pointer-events-none absolute inset-0"
                  aria-hidden="true"
                ></div>
                <div className="relative grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                      01 · Web &amp; Mobile
                    </p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
                      Web &amp; mobile apps your users love
                    </h3>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary md:text-lg">
                      Fast, polished web apps and cross-platform mobile apps — built once, shipped to
                      every screen.
                    </p>
                    <Link
                      href="/services/web-development"
                      className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#0d0d0d] transition-[transform,opacity] hover:-translate-y-px hover:opacity-90 md:text-base"
                    >
                      Web development
                      <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                  <ul className="grid gap-3">
                    <li className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-text-primary transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent/30 md:text-base">
                      Next.js &amp; React on the web
                    </li>
                    <li className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-text-primary transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent/30 md:text-base">
                      React Native for iOS &amp; Android
                    </li>
                    <li className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-text-primary transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent/30 md:text-base">
                      Design, build, and launch
                    </li>
                  </ul>
                </div>
              </article>
            </div>

            {/* Card 2: SaaS Platforms */}
            <div className="section-entrance-item section-entrance-item--3">
              <article className="showcase-card relative overflow-hidden rounded-3xl border border-white/10 p-8 md:p-12 h-fit">
                <div
                  className="showcase-card-glow pointer-events-none absolute inset-0"
                  aria-hidden="true"
                ></div>
                <div className="relative grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                      02 · SaaS Platforms
                    </p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
                      SaaS platforms, from MVP to scale
                    </h3>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary md:text-lg">
                      Secure multi-tenant SaaS with billing, auth, and dashboards — on architecture
                      that grows with you.
                    </p>
                    <Link
                      href="/services/saas-development"
                      className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#0d0d0d] transition-[transform,opacity] hover:-translate-y-px hover:opacity-90 md:text-base"
                    >
                      SaaS development
                      <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                  <ul className="grid gap-3">
                    <li className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-text-primary transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent/30 md:text-base">
                      Multi-tenant architecture
                    </li>
                    <li className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-text-primary transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent/30 md:text-base">
                      Stripe billing &amp; subscriptions
                    </li>
                    <li className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-text-primary transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent/30 md:text-base">
                      MVP delivered in 11 weeks
                    </li>
                  </ul>
                </div>
              </article>
            </div>

            {/* Card 3: AI Products */}
            <div className="section-entrance-item section-entrance-item--4">
              <article className="showcase-card relative overflow-hidden rounded-3xl border border-white/10 p-8 md:p-12 h-fit">
                <div
                  className="showcase-card-glow pointer-events-none absolute inset-0"
                  aria-hidden="true"
                ></div>
                <div className="relative grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                      03 · AI Products
                    </p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
                      AI features that actually work
                    </h3>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary md:text-lg">
                      RAG pipelines, LLM features, and AI agents grounded in your data — accurate,
                      evaluated, and cost-controlled.
                    </p>
                    <Link
                      href="/services/ai-integration"
                      className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#0d0d0d] transition-[transform,opacity] hover:-translate-y-px hover:opacity-90 md:text-base"
                    >
                      AI integration
                      <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                  <ul className="grid gap-3">
                    <li className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-text-primary transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent/30 md:text-base">
                      RAG &amp; vector search
                    </li>
                    <li className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-text-primary transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent/30 md:text-base">
                      OpenAI &amp; Anthropic
                    </li>
                    <li className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-text-primary transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent/30 md:text-base">
                      Chatbots &amp; AI agents
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: All Services */}
      <div
        ref={servicesRef}
        className={`stack-section section-services theme-paper bg-surface ${
          servicesInView ? "section-visible" : ""
        }`}
      >
        <div className="stack-section-inner mx-auto max-w-6xl px-5 sm:px-8">
          <div className="section-entrance-item section-entrance-item--1 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between mb-10">
            <SectionHeading
              size="large"
              eyebrow="All services"
              title="Everything you need to ship a product."
              description="From web and mobile to SaaS, AI, backend, and cloud — pick the service that fits. Each is handled by an experienced team."
            />
            <SectionLink href="/services" label="View all services" />
          </div>
          <div className="section-entrance-item section-entrance-item--2">
            <ServicesGrid limit={6} />
          </div>
        </div>
      </div>

      {/* Section 4: Selected Work */}
      <div
        ref={workRef}
        className={`stack-section section-work theme-obsidian bg-surface ${
          workInView ? "section-visible" : ""
        }`}
      >
        <div className="stack-section-inner mx-auto max-w-6xl px-5 sm:px-8">
          <div className="section-entrance-item section-entrance-item--1 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between mb-10">
            <SectionHeading
              size="large"
              eyebrow="Selected work"
              title="Real software, real results."
              description="From multi-tenant SaaS to AI systems — work that shipped, scaled, and is used by real customers."
            />
            <SectionLink href="/work" label="All case studies" />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((study, i) => (
              <div
                key={study.slug}
                className={`section-entrance-item section-entrance-item--${i + 2} h-full`}
              >
                <CaseStudyCard study={study} />
              </div>
            ))}
          </div>
          <div className="section-entrance-item section-entrance-item--5 mt-12">
            <StatStrip />
          </div>
        </div>
      </div>
    </div>
  );
}
