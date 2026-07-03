import type { Metadata } from "next";
import { CtaSection } from "../sections/cta";
import { FooterSection } from "../sections/footer";
import { HeaderSection } from "../sections/header";
import { PageHero, Reveal } from "../sections/shared";
import { Breadcrumbs, CaseStudyCard, StatStrip } from "../sections/marketing";
import { JsonLd } from "../lib/JsonLd";
import { breadcrumbSchema } from "../lib/schema";
import { CASE_STUDIES } from "../lib/work";

export const metadata: Metadata = {
  title: "Our Work — SaaS, AI & Web Case Studies",
  description:
    "Case studies from CodeBaxh: a GIS PropTech SaaS scaled to 10,000+ users, a legal-contract RAG pipeline, an omnichannel messaging platform, FinTech, mobile, and more production web, SaaS, and AI work.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />
      <HeaderSection />
      <main>
        <PageHero
          eyebrow="Work"
          title="Production software, real outcomes."
          description="A selection of products we've built — enterprise SaaS, fast MVPs, and production AI. Each one shipped and used by real customers."
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
                { name: "Work", path: "/work" },
              ]}
            />
            <div className="grid gap-5 md:grid-cols-2">
              {CASE_STUDIES.map((study, i) => (
                <Reveal
                  key={study.slug}
                  delay={((i % 2) * 100) as 0 | 100}
                  className="h-full"
                >
                  <CaseStudyCard study={study} />
                </Reveal>
              ))}
            </div>
            <div className="mt-14">
              <StatStrip />
            </div>
          </div>
        </section>
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}
