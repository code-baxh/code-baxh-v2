import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { caseStudies } from "@/content/case-studies";
import { services } from "@/content/services";
import { team } from "@/content/team";
import { getAllPosts, getCategories, totalBlogPages } from "@/lib/blog";
import { abs } from "@/lib/seo";

/**
 * No changeFrequency or priority: Google ignores both. lastModified is the one hint
 * crawlers act on, so it is a stable date for evergreen pages and the real
 * `updated` date for posts (never `new Date()`, which would change every build).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const latestPost = posts[0]?.updated ?? site.contentUpdated;
  const evergreen = site.contentUpdated;
  const fixed = ["/", "/ai", "/services", "/work", "/about", "/process", "/engagement", "/contact", "/start-a-project", "/privacy", "/terms"];
  return [
    ...fixed.map((p) => ({ url: abs(p), lastModified: evergreen })),
    { url: abs("/blog"), lastModified: latestPost },
    ...services.map((s) => ({ url: abs(`/services/${s.slug}`), lastModified: evergreen })),
    ...caseStudies.map((c) => ({ url: abs(`/work/${c.slug}`), lastModified: evergreen })),
    ...team.map((m) => ({ url: abs(`/team/${m.slug}`), lastModified: evergreen })),
    ...getCategories().map((c) => ({ url: abs(`/blog/category/${c.slug}`), lastModified: latestPost })),
    ...Array.from({ length: Math.max(totalBlogPages() - 1, 0) }, (_, i) => ({ url: abs(`/blog/page/${i + 2}`), lastModified: latestPost })),
    ...posts.map((p) => ({ url: abs(`/blog/${p.slug}`), lastModified: p.updated })),
  ];
}
