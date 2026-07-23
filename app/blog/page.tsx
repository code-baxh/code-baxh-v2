import type { Metadata } from "next";
import { pageOpenGraph } from "../lib/metadata";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaSection } from "../sections/cta";
import { FooterSection } from "../sections/footer";
import { HeaderSection } from "../sections/header";
import { PageHero, Reveal } from "../sections/shared";
import { Breadcrumbs } from "../sections/marketing";
import { JsonLd } from "../lib/JsonLd";
import { breadcrumbSchema } from "../lib/schema";
import { BLOG_POSTS } from "../lib/blog";

export const metadata: Metadata = {
  title: "Blog — SaaS, AI & Next.js Engineering",
  description:
    "First-hand engineering guides from CodeBaxh on building SaaS, AI/RAG systems, and Next.js apps — plus practical advice for founders.",
  alternates: { canonical: "/blog" },
  openGraph: pageOpenGraph({
    url: "/blog",
    title: "Blog — SaaS, AI & Next.js Engineering",
    description: "First-hand engineering guides from CodeBaxh on building SaaS, AI/RAG systems, and Next.js apps — plus practical advice for founders.",
  }),
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = [...BLOG_POSTS].sort(
    (a, b) => +new Date(b.datePublished) - +new Date(a.datePublished),
  );
  const [featured, ...rest] = posts;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <HeaderSection />
      <main>
        <PageHero
          eyebrow="Blog"
          title="Notes from building real software."
          description="First-hand engineering guides on SaaS, AI, and Next.js — written by the people doing the work, not a content farm."
          primaryHref="/contact"
          primaryLabel="Book a free discovery call"
        />

        <section className="theme-paper border-t border-border bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Blog", path: "/blog" },
              ]}
            />
            {featured ? (
              <Reveal>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group kinetic-card mb-5 flex flex-col rounded-2xl border border-border bg-surface-elevated p-8 md:mb-6 md:p-10"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="rounded-full bg-accent/10 px-2.5 py-1 font-semibold uppercase tracking-[0.14em] text-accent">
                      Featured
                    </span>
                    <span className="font-semibold uppercase tracking-[0.14em] text-text-muted">
                      {featured.category}
                    </span>
                    <span className="text-text-muted" aria-hidden>·</span>
                    <span className="text-text-muted">{featured.readingTime}</span>
                  </div>
                  <h2 className="mt-5 flex items-start justify-between gap-4 text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
                    {featured.title}
                    <ArrowUpRight
                      className="mt-1 size-5 shrink-0 text-text-muted transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
                    {featured.excerpt}
                  </p>
                  <p className="mt-6 text-xs text-text-muted">
                    {formatDate(featured.datePublished)}
                  </p>
                </Link>
              </Reveal>
            ) : null}

            <div className="grid gap-5 md:grid-cols-2">
              {rest.map((post, i) => (
                <Reveal
                  key={post.slug}
                  delay={((i % 2) * 100) as 0 | 100}
                  className="h-full"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group kinetic-card flex h-full flex-col rounded-2xl border border-border bg-surface-elevated p-7 md:p-8"
                  >
                    <div className="flex items-center gap-3 text-xs text-text-muted">
                      <span className="font-semibold uppercase tracking-[0.14em] text-accent">
                        {post.category}
                      </span>
                      <span aria-hidden>·</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h2 className="mt-4 flex items-start justify-between gap-3 text-xl font-semibold tracking-tight text-text-primary">
                      {post.title}
                      <ArrowUpRight
                        className="size-4 shrink-0 text-text-muted transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary md:text-base">
                      {post.excerpt}
                    </p>
                    <p className="mt-6 text-xs text-text-muted">
                      {formatDate(post.datePublished)}
                    </p>
                  </Link>
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
