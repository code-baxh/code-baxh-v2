import type { MetadataRoute } from "next";
import { abs } from "@/lib/seo";

/** Search and AI answer engines are all welcome; listing them makes that explicit. */
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" }))],
    // No `host` line: it is a Yandex-only extension that Google and Bing ignore.
    // The canonical host is set by redirects and canonical tags.
    sitemap: abs("/sitemap.xml"),
  };
}
