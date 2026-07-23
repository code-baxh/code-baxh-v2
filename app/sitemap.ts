import type { MetadataRoute } from "next";
import { SITE_URL, CONTENT_LAST_UPDATED } from "./lib/site";
import { SERVICES } from "./lib/services";
import { CASE_STUDIES } from "./lib/work";
import { BLOG_POSTS } from "./lib/blog";

/**
 * No changeFrequency/priority: Google ignores both fields, they just add
 * noise. lastModified is the only hint crawlers act on — stable constant for
 * evergreen pages (see CONTENT_LAST_UPDATED), real dates for blog posts.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = CONTENT_LAST_UPDATED;

  const staticPaths = [
    "",
    "/services",
    "/work",
    "/about",
    "/process",
    "/engagement",
    "/tech-stack",
    "/blog",
    "/contact",
    "/policy",
    "/tos",
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));

  for (const s of SERVICES) {
    entries.push({ url: `${SITE_URL}/services/${s.slug}`, lastModified });
  }

  for (const c of CASE_STUDIES) {
    entries.push({ url: `${SITE_URL}/work/${c.slug}`, lastModified });
  }

  for (const p of BLOG_POSTS) {
    entries.push({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.dateModified ?? p.datePublished),
    });
  }

  return entries;
}
