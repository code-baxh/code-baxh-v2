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
    sitemap: abs("/sitemap.xml"),
    host: abs("/").replace(/\/$/, ""),
  };
}
