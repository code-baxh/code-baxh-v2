"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { BriefcaseBusiness, Code2, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, FOOTER_CTA } from "../footer/constants";
import { ServiceCard } from "../services/ServiceCard";
import {
  BUILD_SERVICES,
  RECRUITMENT_SERVICES,
} from "../services/constants";
import {
  ContactInfoItem,
  SectionHeading,
  SectionLink,
  useInView,
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

type StackSectionProps = {
  id?: string;
  sectionClass: string;
  theme: "paper" | "obsidian";
  children: ReactNode;
};

function StackSection({
  id,
  sectionClass,
  theme,
  children,
}: StackSectionProps) {
  return (
    <section
      id={id}
      className={`stack-section ${sectionClass} theme-${theme} bg-surface`}
    >
      <div className="stack-section-inner mx-auto max-w-6xl px-5 sm:px-8">
        {children}
      </div>
    </section>
  );
}

function ContactSectionContent() {
  const { ref, inView } = useInView<HTMLElement>(0.28);

  return (
    <section
      ref={ref}
      id="contact"
      className={`stack-section section-contact theme-obsidian bg-surface ${
        inView ? "contact-section--visible" : ""
      }`}
    >
      <div className="stack-section-inner mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <div className="contact-entrance-item contact-entrance-item--1">
              <SectionHeading
                size="large"
                eyebrow="Get in touch"
                title="Tell us what you are trying to move."
                description={FOOTER_CTA.description}
              />
            </div>
            <div className="contact-entrance-item contact-entrance-item--2 mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: BriefcaseBusiness, title: "I need talent" },
                { icon: Code2, title: "I need a build" },
              ].map(({ icon: Icon, title }) => (
                <Link
                  key={title}
                  href="/contact"
                  className="kinetic-card rounded-2xl border border-border bg-surface-elevated p-5 transition-colors hover:border-white/20"
                >
                  <Icon
                    className="size-6 text-accent"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <p className="mt-4 text-base font-semibold text-text-primary">
                    {title}
                  </p>
                </Link>
              ))}
            </div>
            <div className="contact-entrance-item contact-entrance-item--3">
              <Link
                href={FOOTER_CTA.href}
                className="mt-8 inline-flex rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-[#0d0d0d] transition-[transform,opacity] hover:-translate-y-px hover:opacity-90"
              >
                {FOOTER_CTA.label}
              </Link>
            </div>
          </div>
          <div className="contact-entrance-item contact-entrance-item--4 rounded-2xl border border-border bg-surface-elevated p-6 md:p-7">
            <div className="space-y-6">
              <ContactInfoItem icon={MapPin} label="Official Address">
                <address className="not-italic text-sm leading-relaxed text-text-primary">
                  {COMPANY.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </ContactInfoItem>
              <ContactInfoItem icon={Mail} label="Email Us">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm text-text-primary transition-colors hover:text-accent"
                >
                  {COMPANY.email}
                </a>
              </ContactInfoItem>
              <ContactInfoItem icon={Phone} label="Phone">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-sm text-text-primary transition-colors hover:text-accent"
                >
                  {COMPANY.phoneDisplay}
                </a>
              </ContactInfoItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeStackedSections() {
  return (
    <div className="home-stack-container">
      <StackSection sectionClass="section-services" theme="paper" id="services">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            size="large"
            eyebrow="What we do"
            title="Recruit talent. Build products."
            description="Specialist recruitment and practical software delivery — two capabilities, one focused team."
          />
          <SectionLink href="/services" label="View all services" />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <ServiceCard {...RECRUITMENT_SERVICES[0]} />
          <ServiceCard {...BUILD_SERVICES[0]} />
          <ServiceCard {...RECRUITMENT_SERVICES[1]} />
          <ServiceCard {...BUILD_SERVICES[1]} />
        </div>
      </StackSection>

      <StackSection sectionClass="section-process" theme="obsidian" id="work">
        <SectionHeading
          size="large"
          eyebrow="How we work"
          title="Structured enough to trust. Light enough to move."
          description="Four steps we use for hiring and build work — same rhythm, different outcomes."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {PROCESS_STEPS.map((step, stepIndex) => (
            <div
              key={step.title}
              className="kinetic-card rounded-2xl border border-border bg-surface-elevated p-6 md:p-7"
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
      </StackSection>

      <StackSection sectionClass="section-about" theme="paper" id="about">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div>
            <SectionHeading
              size="large"
              eyebrow="Who we are"
              title="Recruiters who build. Builders who recruit."
              description="Code Baxh connects companies with strong technical talent and helps teams ship the products they need."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <SectionLink href="/about" label="About us" />
              <SectionLink href="/careers" label="Careers" />
            </div>
          </div>
          <div className="grid gap-4">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-surface-elevated p-6"
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
      </StackSection>

      <div className="stack-contact-track">
        <ContactSectionContent />
      </div>
    </div>
  );
}
