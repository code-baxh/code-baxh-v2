import Link from "next/link";
import { CtaSection } from "./sections/cta";
import { FooterSection } from "./sections/footer";
import { HeaderSection } from "./sections/header";
import { HeroSection } from "./sections/hero";
import {
  ClientLogos,
  StatStrip,
  ProcessSteps,
  TechStackStrip,
  FounderSection,
  FaqSection,
} from "./sections/marketing";
import { InteractiveTestimonials } from "./sections/interactive-testimonials";
import { HomeStackedSections } from "./sections/home/HomeStackedSections";

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

        {/* Stacked sections: Why Code Baxh, What We Build, All Services, Selected Work */}
        <HomeStackedSections />

        {/* Process overview */}
        <ProcessSteps />
        <TechStackStrip />
        <InteractiveTestimonials />
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
