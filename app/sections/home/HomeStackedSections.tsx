"use client";

import { Rocket, BrainCircuit, Gauge, ShieldCheck } from "lucide-react";
import { SectionHeading, SectionLink, useStackProgress } from "../shared";
import { CASE_STUDIES } from "../../lib/work";
import { CaseStudyCard, HomeShowcase, ServicesGrid, StatStrip } from "../marketing";

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

      {/* Section 2: What we build (tall runway — All Services stacks on top after) */}
      <HomeShowcase />

      {/* Section 3: All Services — stacks over What we build */}
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

      {/* Section 7: Selected Work */}
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
