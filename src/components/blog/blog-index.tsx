import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import type { Crumb } from "@/components/layout/breadcrumbs";
import { CtaBand } from "@/components/sections/cta-band";
import { Section } from "@/components/ui/section";
import { BlogSearch } from "./blog-search";
import { FeaturedPost, PostCard } from "./post-card";
import { coversFor, getAllPosts, getCategories, toMeta, type Post } from "@/lib/blog";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  lead: string;
  crumbs: Crumb[];
  posts: Post[];
  /** Shown as the large lead story above the grid (first page only). */
  featured?: Post;
  activeCategory?: string;
  pagination?: { page: number; total: number };
};

const pageHref = (n: number) => (n === 1 ? "/blog" : `/blog/page/${n}`);

/** Shared layout for /blog, /blog/page/n and /blog/category/x. */
export function BlogIndex({ title, lead, crumbs, posts, featured, activeCategory, pagination }: Props) {
  const all = getAllPosts();
  // One distinct cover per card on this page, featured story included.
  const covers = coversFor(featured ? [featured, ...posts] : posts);
  const pill = "inline-flex min-h-11 items-center rounded-full px-4 text-sm transition-colors";
  const on = "bg-accent text-accent-fg";
  const off = "text-muted hover:bg-surface-2 hover:text-fg";
  const arrow =
    "inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line-strong px-4 text-sm hover:border-accent-text hover:text-accent-text";

  const filters = (
    <nav aria-label="Blog categories">
      <ul className="flex flex-wrap gap-1">
        <li>
          <Link href="/blog" aria-current={!activeCategory ? "page" : undefined} className={cn(pill, !activeCategory ? on : off)}>
            All <span className="ml-1.5 opacity-70">{all.length}</span>
          </Link>
        </li>
        {getCategories().map((c) => (
          <li key={c.slug}>
            <Link
              href={`/blog/category/${c.slug}`}
              aria-current={activeCategory === c.slug ? "page" : undefined}
              className={cn(pill, activeCategory === c.slug ? on : off)}
            >
              {c.name} <span className="ml-1.5 opacity-70">{c.count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      <PageHero crumbs={crumbs} eyebrow="Blog" title={title} lead={lead} />
      <Section>
        <BlogSearch posts={all.map((p) => toMeta(p))} filters={filters}>
          {featured ? (
            <div className="mt-8">
              <FeaturedPost post={toMeta(featured, covers.get(featured.slug))} />
            </div>
          ) : null}

          <h2 className="sr-only">{featured ? "More articles" : "Articles"}</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((p) => (
              <li key={p.slug}>
                <PostCard post={toMeta(p, covers.get(p.slug))} />
              </li>
            ))}
          </ul>

          {pagination && pagination.total > 1 ? (
            <nav aria-label="Pagination" className="mt-12 flex flex-wrap items-center justify-center gap-2">
              {pagination.page > 1 ? (
                <Link href={pageHref(pagination.page - 1)} className={arrow}>
                  <ChevronLeft aria-hidden className="size-4" /> Previous
                </Link>
              ) : null}
              {Array.from({ length: pagination.total }, (_, i) => i + 1).map((n) => (
                <Link
                  key={n}
                  href={pageHref(n)}
                  aria-current={n === pagination.page ? "page" : undefined}
                  aria-label={`Page ${n}`}
                  className={cn(
                    "inline-flex size-11 items-center justify-center rounded-full text-sm",
                    n === pagination.page ? on : "border border-line-strong hover:border-accent-text hover:text-accent-text",
                  )}
                >
                  {n}
                </Link>
              ))}
              {pagination.page < pagination.total ? (
                <Link href={pageHref(pagination.page + 1)} className={arrow}>
                  Next <ChevronRight aria-hidden className="size-4" />
                </Link>
              ) : null}
            </nav>
          ) : null}
        </BlogSearch>
      </Section>
      <CtaBand title="Have a question the blog does not answer?" label="Start a project" />
    </>
  );
}
