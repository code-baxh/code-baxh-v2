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
    a: "CodeBaxh is a full-stack software development team for startups and product companies. We design and build web apps, multi-tenant SaaS platforms, and AI/LLM products — using Next.js, React, Node.js, Python, and modern cloud tooling — with a focus on shipping production-ready software, not throwaway prototypes.",
  },
  {
    q: "Where is CodeBaxh based, and who do you work with?",
    a: "We're based in Islamabad, Pakistan, and work with clients across North America, Europe, the Middle East, and beyond. We flex our hours for timezone overlap, communicate in fluent English, and run an async-first workflow so distributed teams stay aligned without constant meetings.",
  },
  {
    q: "How fast can you ship a product?",
    a: "Speed depends on scope, but we work in tight weekly loops so you see working software early. We delivered a launch-ready multi-tenant SaaS MVP — auth, billing, and dashboards — in 11 weeks. Smaller features or integrations can ship faster; larger platforms are phased into milestones.",
  },
  {
    q: "What tech stack do you use?",
    a: "Our core stack is Next.js, React, TypeScript, Node.js, and PostgreSQL, with Python for AI/backend work where it fits. For SaaS we handle auth, Stripe billing, multi-tenancy, and admin dashboards. For AI we build RAG pipelines, embeddings, and grounded LLM features — always chosen to match your product, not forced for novelty.",
  },
  {
    q: "Can you work with our existing codebase or team?",
    a: "Yes. We regularly join existing products — auditing architecture, shipping features, or pairing with in-house engineers. We document as we go, follow your conventions where sensible, and leave you with code your team can own after the engagement.",
  },
  {
    q: "Who owns the code and IP?",
    a: "You do. Upon payment for the agreed milestones, you own the deliverables we build for you. We're happy to sign NDAs and work under clear contracts that spell out IP, confidentiality, and handoff expectations upfront.",
  },
  {
    q: "How do you communicate during a project?",
    a: "You'll get a predictable rhythm: a shared task board, weekly demos of working software, and async written updates you can read on your schedule. Bilal and the delivery team stay directly reachable — no layers of account management between you and the people writing code.",
  },
  {
    q: "Do you sign NDAs and use milestone-based payments?",
    a: "Yes. We sign NDAs before sensitive discussions, work from clear statements of work, and structure payments around milestones so you pay as value is delivered — not as a single risky upfront lump sum.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. Many clients keep us on for post-launch iteration — bug fixes, performance work, new features, and scaling support. We can also hand off cleanly to your in-house team with documentation and a stable codebase if that's the better fit.",
  },
  {
    q: "How do we get started?",
    a: "Book a free, no-obligation discovery call. We'll clarify your outcome, ask the right technical questions, outline a realistic scope, and give you a clear estimate and next step — even if we're not the right fit.",
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
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}
