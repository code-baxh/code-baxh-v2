import type { Metadata } from "next";
import { pageOpenGraph } from "../lib/metadata";
import { CtaSection } from "../sections/cta";
import { FooterSection } from "../sections/footer";
import { HeaderSection } from "../sections/header";
import { PageHero, Reveal, SectionHeading } from "../sections/shared";
import { Breadcrumbs } from "../sections/marketing";
import { JsonLd } from "../lib/JsonLd";
import { breadcrumbSchema } from "../lib/schema";

export const metadata: Metadata = {
  title: "Our Tech Stack — Next.js, Node.js, AWS, AI",
  description:
    "The tools CodeBaxh builds with: Next.js, React, React Native, TypeScript, Node.js, NestJS, PostgreSQL, AWS, Stripe, OpenAI, and Anthropic.",
  alternates: { canonical: "/tech-stack" },
  openGraph: pageOpenGraph({
    url: "/tech-stack",
    title: "Our Tech Stack — Next.js, Node.js, AWS, AI",
    description: "The tools CodeBaxh builds with: Next.js, React, React Native, TypeScript, Node.js, NestJS, PostgreSQL, AWS, Stripe, OpenAI, and Anthropic.",
  }),
};

const STACK_GROUPS = [
  {
    group: "Frontend",
    items: ["Next.js", "React", "React Native", "TypeScript", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "Python", "FastAPI", "PHP", "Laravel", "REST & GraphQL"],
  },
  {
    group: "CMS",
    items: ["Strapi (headless)", "Headless / API-first CMS"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "pgvector"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Terraform", "Vercel", "CI/CD"],
  },
  {
    group: "AI / LLM",
    items: ["OpenAI", "Anthropic", "RAG pipelines", "Vector search"],
  },
  {
    group: "Payments",
    items: ["Stripe Billing", "Subscriptions", "Usage-based billing"],
  },
];

export default function TechStackPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Tech stack", path: "/tech-stack" },
        ])}
      />
      <HeaderSection />
      <main>
        <PageHero
          eyebrow="Tech stack"
          title="A focused stack we know deeply."
          description="We build on modern, type-safe, production-proven tools — the same ones we use to run our own SaaS and AI work."
          primaryHref="/contact"
          primaryLabel="Book a free discovery call"
          secondaryHref="/services"
          secondaryLabel="View services"
        />

        <section className="theme-paper border-t border-border bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Tech stack", path: "/tech-stack" },
              ]}
            />
            <SectionHeading
              eyebrow="What we build with"
              title="Tools, end to end."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {STACK_GROUPS.map((group, i) => (
                <Reveal
                  key={group.group}
                  delay={((i % 3) * 100) as 0 | 100 | 200}
                  className="rounded-2xl border border-border bg-surface-elevated p-7"
                >
                  <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                    {group.group}
                  </h2>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border px-3 py-1.5 text-sm text-text-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}
