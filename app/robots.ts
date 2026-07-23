import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

/**
 * Allow all standard crawlers AND explicitly welcome the AI search crawlers we
 * want citations from (GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot,
 * ClaudeBot, Google-Extended). They inherit the `*` allow, but listing them
 * documents intent and guards against accidental blocks.
 */
export default function robots(): MetadataRoute.Robots {
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

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((ua) => ({ userAgent: ua, allow: "/" })),
    ],
    // No `host` directive: it's a legacy Yandex-only extension that Google
    // and Bing ignore; the canonical host is enforced by redirects + canonicals.
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
