import type { Metadata } from "next";
import { CtaSection } from "../sections/cta";
import { FooterSection } from "../sections/footer";
import { HeaderSection } from "../sections/header";
import { PageHero, Reveal } from "../sections/shared";
import { Breadcrumbs, FaqSection } from "../sections/marketing";
import { JsonLd } from "../lib/JsonLd";
import { breadcrumbSchema } from "../lib/schema";
import { PROCESS_STEPS } from "../lib/services";

export const metadata: Metadata = {
  title: "Our Process — From Discovery to Launch",
  description:
    "How CodeBaxh runs engagements: discovery, design & architecture, build in short loops, then deploy & support — with weekly demos and async updates.",
  alternates: { canonical: "/process" },
};

const PROCESS_FAQS = [
  {
    q: "How often will we hear from you?",
    a: "Weekly, at minimum — a demo of working software plus a shared board you can check anytime, and async updates throughout the week across US/EU hours.",
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
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Process", path: "/process" },
              ]}
            />
            <ol className="space-y-5">
              {PROCESS_STEPS.map((step, i) => (
                <Reveal
                  key={step.title}
                  delay={((i % 3) * 100) as 0 | 100 | 200}
                  className="flex gap-6 rounded-2xl border border-border bg-surface-elevated p-7 md:p-8"
                >
                  <span className="text-2xl font-semibold tabular-nums text-accent md:text-3xl">
                    0{i + 1}
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-text-primary md:text-2xl">
                      {step.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-text-secondary md:text-lg">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
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
