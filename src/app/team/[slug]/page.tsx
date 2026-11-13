import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { Section, SectionHeading } from "@/components/ui/section";
import { team } from "@/content/team";
import { personSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps<"/team/[slug]">) {
  const { slug } = await params;
  const m = team.find((x) => x.slug === slug);
  if (!m) return {};
  return pageMetadata({
    title: `${m.name}, ${m.role}`,
    description: `${m.name} is ${m.role} at CodeBaxh, a software development and AI company. Background and responsibilities.`,
    path: `/team/${m.slug}`,
  });
}

export default async function TeamMemberPage({ params }: PageProps<"/team/[slug]">) {
  const { slug } = await params;
  const m = team.find((x) => x.slug === slug);
  if (!m) notFound();

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", ...personSchema(m) }} />
      <PageHero
        crumbs={[
          { name: "About", path: "/about" },
          { name: m.name, path: `/team/${m.slug}` },
        ]}
        eyebrow={m.role}
        title={m.name}
        lead={m.bio}
      >
        {m.links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line-strong px-5 text-[0.95rem] font-medium hover:border-accent-text hover:text-accent-text"
          >
            {l.label} <ArrowUpRight aria-hidden className="size-4" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ))}
      </PageHero>

      <Section>
        <div className="mx-auto grid max-w-4xl gap-10">
          <SectionHeading eyebrow="Role" title={`What ${m.name.split(" ")[0]} is responsible for.`} />
          <ul className="space-y-4 text-lg">
            {m.responsibilities.map((r) => (
              <li key={r} className="border-l-2 border-accent pl-4">
                {r}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
