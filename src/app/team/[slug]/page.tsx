import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { Section, SectionHeading } from "@/components/ui/section";
import { team } from "@/content/team";
import { formatDate, postsByAuthor } from "@/lib/blog";
import { profilePageSchema } from "@/lib/schema";
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
    description: `${m.name} is ${m.role} at CodeBaxh, a software development and AI company. Background, expertise and articles.`,
    path: `/team/${m.slug}`,
  });
}

export default async function TeamMemberPage({ params }: PageProps<"/team/[slug]">) {
  const { slug } = await params;
  const m = team.find((x) => x.slug === slug);
  if (!m) notFound();
  const first = m.name.split(" ")[0];
  const articles = postsByAuthor(m.slug);

  return (
    <>
      <JsonLd data={profilePageSchema(m)} />
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
            rel="noopener noreferrer me"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line-strong px-5 text-[0.95rem] font-medium hover:border-accent-text hover:text-accent-text"
          >
            {l.label} <ArrowUpRight aria-hidden className="size-4" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ))}
      </PageHero>

      <Section>
        <div className="mx-auto grid max-w-4xl gap-10">
          <SectionHeading eyebrow="Role" title={`What ${first} is responsible for.`} />
          <ul className="space-y-4 text-lg">
            {m.responsibilities.map((r) => (
              <li key={r} className="border-l-2 border-accent pl-4">
                {r}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="mx-auto grid max-w-4xl gap-10">
          <SectionHeading eyebrow="Expertise" title={`Where ${first} goes deep.`} />
          <ul className="flex flex-wrap justify-center gap-2">
            {m.expertise.map((e) => (
              <li key={e} className="rounded-full border border-line bg-surface px-4 py-2 text-sm">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {articles.length ? (
        <Section className="border-t border-line">
          <div className="mx-auto grid max-w-4xl gap-10">
            <SectionHeading
              eyebrow="Writing"
              title={`Articles by ${first}.`}
              lead={`${articles.length} ${articles.length === 1 ? "guide" : "guides"} on the CodeBaxh blog.`}
            />
            <ul className="divide-y divide-line border-y border-line">
              {articles.map((p) => (
                <li key={p.slug} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <Link href={`/blog/${p.slug}`} className="font-medium hover:text-accent-text">
                    {p.title}
                  </Link>
                  <time dateTime={p.date} className="shrink-0 text-sm text-muted">
                    {formatDate(p.date)}
                  </time>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ) : null}

      <CtaBand />
    </>
  );
}
