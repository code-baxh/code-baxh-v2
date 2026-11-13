import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Section } from "@/components/ui/section";
import { WorkGrid } from "@/components/work/work-grid";
import { caseStudies } from "@/content/case-studies";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case Studies: SaaS, AI, Web & Mobile",
  description:
    "Case studies from CodeBaxh across SaaS platforms, AI systems, web apps, mobile apps and e-commerce, each stating plainly what was built and what our role was.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Work", path: "/work" }]}
        eyebrow="Work"
        title="Products we have designed, built and shipped."
        lead="SaaS platforms, AI systems, web and mobile apps. Each case study states our role plainly, including where a co-founder contributed as an engineer on another company's product."
      />
      <Section>
        <h2 className="sr-only">All case studies</h2>
        <WorkGrid studies={caseStudies} />
      </Section>
      <CtaBand title="Have something similar in mind?" />
    </>
  );
}
