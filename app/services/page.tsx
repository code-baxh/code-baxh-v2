import type { Metadata } from "next";
import { pageOpenGraph } from "../lib/metadata";
import { CtaSection } from "../sections/cta";
import { FooterSection } from "../sections/footer";
import { HeaderSection } from "../sections/header";
import { PageHero } from "../sections/shared";
import {
  ServicesGrid,
  ProcessSteps,
  TechStackStrip,
  FaqSection,
  Breadcrumbs,
} from "../sections/marketing";
import { JsonLd } from "../lib/JsonLd";
import { breadcrumbSchema, graph, serviceSchema } from "../lib/schema";
import { SERVICES } from "../lib/services";

export const metadata: Metadata = {
  title: "Software Development Services — Web, SaaS & AI",
  description:
    "CodeBaxh's services: SaaS development, AI integration, Next.js & web development, React Native apps, cloud/DevOps, Stripe integration, and more. Book a free call.",
  alternates: { canonical: "/services" },
  openGraph: pageOpenGraph({
    url: "/services",
    title: "Software Development Services — Web, SaaS & AI",
    description: "CodeBaxh's services: SaaS development, AI integration, Next.js & web development, React Native apps, cloud/DevOps, Stripe integration, and more. Book a free call.",
  }),
};

const SERVICES_FAQS = [
  {
    q: "What services does CodeBaxh offer?",
    a: "We offer SaaS development, AI integration, full-stack web and Next.js development, React Native mobile apps, cloud & DevOps (AWS/Azure), Stripe integration, MVP development, API & backend development, and AI chatbot development.",
  },
  {
    q: "Can you handle a project end to end?",
    a: "Yes. We're a full-stack team and cover product strategy, design, frontend, backend, AI, infrastructure, and deployment — so there are no gaps between disciplines.",
  },
  {
    q: "Which service is right for me?",
    a: "If you're validating an idea, start with MVP development. Building a subscription product? SaaS development. Adding AI? AI integration. Not sure — book a discovery call and we'll point you to the right scope.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          ...SERVICES.map((s) =>
            serviceSchema({
              name: s.title,
              description: s.summary,
              slug: s.slug,
            }),
          ),
        )}
      />
      <HeaderSection />
      <main>
        <PageHero
          eyebrow="Services"
          title="Software development services that ship."
          description="Dedicated teams for web, mobile, SaaS, and AI — each engineered to take you from idea to launched, robust product."
          primaryHref="/contact"
          primaryLabel="Book a free discovery call"
          secondaryHref="/work"
          secondaryLabel="See our work"
        />

        <section className="theme-paper border-t border-border bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
              ]}
            />
            <ServicesGrid />
          </div>
        </section>

        <ProcessSteps />
        <TechStackStrip />
        <FaqSection faqs={SERVICES_FAQS} />
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}
