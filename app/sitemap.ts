import type { MetadataRoute } from "next";
import { SITE_URL, CONTENT_LAST_UPDATED } from "./lib/site";
import { SERVICES } from "./lib/services";
import { CASE_STUDIES } from "./lib/work";
import { BLOG_POSTS } from "./lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  // Stable across builds (see CONTENT_LAST_UPDATED); blog posts use their own
  // publish dates below so real content freshness is still signalled.
  const lastModified = CONTENT_LAST_UPDATED;

  const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/work", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/process", priority: 0.6, changeFrequency: "yearly" },
    { path: "/engagement", priority: 0.7, changeFrequency: "monthly" },
    { path: "/tech-stack", priority: 0.5, changeFrequency: "yearly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/tos", priority: 0.2, changeFrequency: "yearly" },
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  for (const s of SERVICES) {
    entries.push({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const c of CASE_STUDIES) {
    entries.push({
      url: `${SITE_URL}/work/${c.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const p of BLOG_POSTS) {
    entries.push({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.dateModified ?? p.datePublished),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
