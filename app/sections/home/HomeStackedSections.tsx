"use client";

import {
  BUILD_SERVICES,
  RECRUITMENT_SERVICES,
} from "../services/constants";
import { ServiceCard } from "../services/ServiceCard";
import {
  SectionHeading,
  SectionLink,
  useStackProgress,
} from "../shared";

const PROCESS_STEPS = [
  {
    title: "Understand the outcome",
    body: "We start with the hiring brief, product goal, or delivery constraint.",
  },
  {
    title: "Shape the right response",
    body: "Recruitment, contractor support, or build work — mapped to the need.",
  },
  {
    title: "Move in short loops",
    body: "Clear updates, fast feedback, and visible progress.",
  },
  {
    title: "Deliver with clarity",
    body: "Placements, packages, or shipped work — handed over cleanly.",
  },
] as const;

const VALUES = [
  {
    title: "Specialist recruiting",
    body: "Deep tech market knowledge, not generic CV pushing.",
  },
  {
    title: "Builder mindset",
    body: "We understand delivery because we ship software too.",
  },
  {
    title: "Clear communication",
    body: "Short loops, direct updates, and visible progress.",
  },
] as const;

export function HomeStackedSections() {
  const { ref: servicesRef, inView: servicesInView } = useStackProgress<HTMLDivElement>();
  const { ref: processRef, inView: processInView } = useStackProgress<HTMLDivElement>();
  const { ref: aboutRef, inView: aboutInView } = useStackProgress<HTMLDivElement>();

  return (
    <div className="home-stack-container">
      <div
        ref={servicesRef}
        className={`stack-section section-services theme-paper bg-surface ${
          servicesInView ? "section-visible" : ""
        }`}
      >
        <div className="stack-section-inner mx-auto max-w-6xl px-5 sm:px-8">
          <div className="section-entrance-item section-entrance-item--1 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              size="large"
              eyebrow="What we do"
              title="Recruit talent. Build products."
              description="Specialist recruitment and practical software delivery — two capabilities, one focused team."
            />
            <SectionLink href="/services" label="View all services" />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="section-entrance-item section-entrance-item--2">
              <ServiceCard {...RECRUITMENT_SERVICES[0]} />
            </div>
            <div className="section-entrance-item section-entrance-item--3">
              <ServiceCard {...BUILD_SERVICES[0]} />
            </div>
            <div className="section-entrance-item section-entrance-item--4">
              <ServiceCard {...RECRUITMENT_SERVICES[1]} />
            </div>
            <div className="section-entrance-item section-entrance-item--5">
              <ServiceCard {...BUILD_SERVICES[1]} />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={processRef}
        className={`stack-section section-process theme-obsidian bg-surface ${
          processInView ? "section-visible" : ""
        }`}
      >
        <div className="stack-section-inner mx-auto max-w-6xl px-5 sm:px-8">
          <div className="section-entrance-item section-entrance-item--1">
            <SectionHeading
              size="large"
              eyebrow="How we work"
              title="Structured enough to trust. Light enough to move."
              description="Four steps we use for hiring and build work — same rhythm, different outcomes."
            />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {PROCESS_STEPS.map((step, stepIndex) => (
              <div
                key={step.title}
                className={`kinetic-card section-entrance-item section-entrance-item--${stepIndex + 2} rounded-2xl border border-border bg-surface-elevated p-6 md:p-7`}
              >
                <p className="text-sm font-semibold tabular-nums text-accent">
                  0{stepIndex + 1}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-text-primary md:text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={aboutRef}
        className={`stack-section section-about theme-paper bg-surface ${
          aboutInView ? "section-visible" : ""
        }`}
      >
        <div className="stack-section-inner mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div>
              <div className="section-entrance-item section-entrance-item--1">
                <SectionHeading
                  size="large"
                  eyebrow="Who we are"
                  title="Recruiters who build. Builders who recruit."
                  description="Code Baxh connects companies with strong technical talent and helps teams ship the products they need."
                />
              </div>
              <div className="section-entrance-item section-entrance-item--2 mt-8 flex flex-wrap gap-4">
                <SectionLink href="/about" label="About us" />
                <SectionLink href="/careers" label="Careers" />
              </div>
            </div>
            <div className="grid gap-4">
              {VALUES.map((value, valueIndex) => (
                <div
                  key={value.title}
                  className={`section-entrance-item section-entrance-item--${valueIndex + 3} rounded-2xl border border-border bg-surface-elevated p-6`}
                >
                  <h3 className="text-lg font-semibold text-text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {value.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
