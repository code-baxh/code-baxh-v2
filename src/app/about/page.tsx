import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { MarketsMap } from "@/components/art/markets-map";
import { CtaBand } from "@/components/sections/cta-band";
import { ToolLogos } from "@/components/sections/tool-logos";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { site } from "@/config/site";
import { howWeWork, values } from "@/content/about";
import { team } from "@/content/team";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "About Us: Founder, Team & How We Work",
  description:
    "Meet CodeBaxh: a founder-led software development and AI company with dedicated teams in every department, serving clients across Europe and worldwide.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", path: "/about" }]}
        eyebrow="About CodeBaxh"
        title="A founder-led company with a specialist team behind every build."
        lead="CodeBaxh is a software development and AI company. We partner with startups and established businesses to design, build and run web, mobile, SaaS and AI products."
        image="globalNetwork"
      />

      <Section>
        <div className="mx-auto grid max-w-4xl gap-10">
          <Reveal>
            <SectionHeading eyebrow="Our story" title="Product thinking and engineering depth, in one company." />
          </Reveal>
          <Reveal delay={0.06} className="mx-auto max-w-3xl space-y-5 text-center text-lg text-muted">
            <p>
              CodeBaxh was founded to close a gap its founder saw repeatedly in software projects: strong
              engineering without clear product direction, or clear direction without the engineering depth to
              deliver it.
            </p>
            <p>
              The company brings both together. Our work spans web and mobile app development, SaaS platforms and
              enterprise solutions, alongside AI engineering: RAG implementation, AI model integration, agents and
              workflow automation. Cloud services, QA and DevOps are part of every delivery, and a dedicated team in
              each department means every part of a product gets specialist attention.
            </p>
            <p>
              CodeBaxh LLC is registered in Missouri, United States. Our product delivery team is based in Stockholm
              and our engineering team in Islamabad. We work with clients across Europe, the United States, Canada and
              the UAE, and deliver worldwide.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-line">
        <Reveal>
          <SectionHeading eyebrow="Leadership" title="The founder." />
        </Reveal>
        <ul className={cn("mt-12 grid gap-4", team.length > 1 ? "md:grid-cols-2" : "mx-auto max-w-2xl")}>
          {team.map((m, i) => (
            <li key={m.slug}>
              <Reveal delay={i * 0.06} className="h-full">
                <article className="card h-full p-6 text-center sm:p-8">
                  <h3 className="text-2xl font-semibold">{m.name}</h3>
                  <p className="mt-1 text-accent-text">{m.role}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-muted">{m.location}</p>
                  <p className="mt-4 text-muted">{m.bio}</p>
                  <Link
                    href={`/team/${m.slug}`}
                    className="mt-5 inline-flex min-h-11 items-center gap-1 font-medium text-accent-text hover:underline"
                  >
                    Full profile <ArrowRight aria-hidden className="size-4" />
                  </Link>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-line">
        <Reveal>
          <SectionHeading
            eyebrow="Team"
            title="A dedicated team in every department."
            lead="Each discipline has its own specialists and its own lead, so your product is never waiting on a generalist."
          />
          <ul className="mt-8 flex flex-wrap justify-center gap-2">
            {site.departments.map((d) => (
              <li key={d} className="rounded-full border border-line bg-surface px-4 py-2 text-sm">
                {d}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <div className="dark art-panel mt-10 px-4 py-8 text-fg sm:px-8">
            <MarketsMap className="relative mx-auto w-full max-w-5xl" />
            <p className="relative mt-6 text-center text-sm text-muted">
              Clients across Europe, the United States, Canada and the UAE, and delivery worldwide. Product delivery team in Stockholm, engineering team in Islamabad.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section className="border-t border-line">
        <Reveal>
          <SectionHeading eyebrow="Values" title="What you can expect from us." />
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {values.map((v, i) => (
            <li key={v.title}>
              <Reveal delay={i * 0.05} className="h-full">
                <div className="card h-full p-6 text-center">
                  <h3 className="text-xl font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted">{v.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-line">
        <div className="mx-auto grid max-w-4xl gap-10">
          <Reveal>
            <SectionHeading eyebrow="How we work" title="A clear, predictable way of working." />
          </Reveal>
          <Reveal delay={0.06}>
            <ul className="space-y-4 text-lg">
              {howWeWork.map((h) => (
                <li key={h} className="border-l-2 border-accent pl-4">
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal className="mt-14">
          <ToolLogos />
        </Reveal>
      </Section>

      <CtaBand title="Work with a team that owns the outcome." />
    </>
  );
}
