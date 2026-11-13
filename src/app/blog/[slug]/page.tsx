import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PostCard } from "@/components/blog/post-card";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { Section, SectionHeading } from "@/components/ui/section";
import { Photo } from "@/components/ui/photo";
import { services } from "@/content/services";
import { team } from "@/content/team";
import { categorySlug, coverFor, coversFor, formatDate, getAllPosts, getPost, relatedPosts, toMeta } from "@/lib/blog";
import { articleSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return pageMetadata({ title: p.metaTitle ?? p.title, description: p.description, path: `/blog/${p.slug}`, type: "article" });
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const author = team.find((m) => m.slug === post.author) ?? team[0];
  const related = relatedPosts(post);
  const service = services.find((x) => x.slug === post.service);
  // Related cards must not repeat each other or the article cover above them.
  const relatedCovers = coversFor([post, ...related]);

  return (
    <>
      <JsonLd data={articleSchema({ ...post, author })} />
      {/* Mirrors the visible "Frequently asked questions" section of the post. */}
      {post.faqs.length ? <JsonLd data={faqSchema(post.faqs)} /> : null}
      <article>
        <header className="bg-noise relative overflow-hidden border-b border-line">
          <div aria-hidden className="glow-hero absolute inset-0" />
          <div className="relative mx-auto flex w-full max-w-[92rem] flex-col items-center px-5 pb-14 pt-8 text-center sm:px-8 lg:px-14">
            <Breadcrumbs
              items={[
                { name: "Blog", path: "/blog" },
                { name: post.category, path: `/blog/category/${categorySlug(post.category)}` },
                { name: post.title, path: `/blog/${post.slug}` },
              ]}
            />
            <p className="eyebrow mt-10">{post.category}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold sm:text-5xl">{post.title}</h1>
            <p className="mt-5 max-w-3xl text-lg text-muted sm:text-xl">{post.description}</p>
            <p className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-muted">
              <span>
                By{" "}
                <Link href={`/team/${author.slug}`} rel="author" className="font-medium text-fg underline decoration-line-strong underline-offset-4 hover:text-accent-text">
                  {author.name}
                </Link>
                , {author.role}
              </span>
              <span aria-hidden>·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.updated !== post.date ? (
                <>
                  <span aria-hidden>·</span>
                  <span>
                    Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                  </span>
                </>
              ) : null}
              <span aria-hidden>·</span>
              <span>{post.readingMinutes} min read</span>
            </p>
          </div>
        </header>

        <div className="mx-auto w-full max-w-[92rem] px-5 pt-10 sm:px-8 lg:px-14">
          <Photo
            name={coverFor(post.slug)}
            decorative
            priority
            className="mx-auto aspect-[21/9] max-w-6xl"
            sizes="(min-width: 1280px) 1150px, 100vw"
          />
        </div>

        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_17rem]">
          <div className="min-w-0">
            <div className="prose">
              <MDXRemote
                source={post.body}
                options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }}
              />
            </div>
            {/* Spoke-to-hub link: every post points at the service it feeds. */}
            {service ? (
              <aside aria-label="Related service" className="card mt-12 max-w-[46rem] p-6 sm:p-8">
                <p className="eyebrow">How we can help</p>
                <p className="mt-3 text-xl font-semibold">{service.headline}</p>
                <p className="mt-2 text-muted">{service.summary}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-flex min-h-11 items-center gap-2 font-medium text-accent-text hover:underline"
                >
                  Explore our {service.name} service <ArrowRight aria-hidden className="size-4" />
                </Link>
              </aside>
            ) : null}
          </div>
          {post.headings.length ? (
            <aside className="order-first lg:order-none">
              <nav aria-label="Table of contents" className="card p-6 lg:sticky lg:top-24">
                <h2 className="eyebrow">On this page</h2>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {post.headings.map((h) => (
                    <li key={h.id} className={h.depth === 3 ? "pl-4" : undefined}>
                      <a href={`#${h.id}`} className="text-muted hover:text-accent-text">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          ) : null}
        </div>
      </article>

      <Section className="border-t border-line">
        <SectionHeading eyebrow="Keep reading" title="Related articles." />
        <ul className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {related.map((p) => (
            <li key={p.slug}>
              <PostCard post={toMeta(p, relatedCovers.get(p.slug))} />
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
