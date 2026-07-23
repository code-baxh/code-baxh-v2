/**
 * Central site configuration — single source of truth for SEO, schema (entity
 * signals / sameAs), navigation, and reusable proof points.
 *
 * ⚠️ CONFIRM THESE VALUES with the owner before going live:
 *   - SITE_URL (production domain — used for metadataBase, canonicals, sitemap, OG)
 *   - SOCIAL profile URLs (Facebook, Instagram, Upwork — used for `sameAs`)
 *   - BOOKING_URL (Cal.com / Calendly link for the discovery-call embed)
 * Everything else (company, founder, clients, stats) is approved real proof.
 */

// Prefer an env override so the domain can change without a code edit.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://codebaxh.com"
).replace(/\/$/, "");

/**
 * Last meaningful content update (YYYY-MM-DD). Used for sitemap `lastModified`
 * on pages that don't carry their own date, so the value stays STABLE across
 * builds — a fresh `new Date()` every build tells crawlers everything changed
 * (noise they learn to ignore). Bump this when you ship a real content change.
 */
export const CONTENT_LAST_UPDATED = "2026-07-03";

export const SITE = {
  name: "CodeBaxh",
  legalName: "CodeBaxh",
  shortName: "CodeBaxh",
  url: SITE_URL,
  // One-line elevator pitch — keep IDENTICAL across site, Clutch, Upwork,
  // LinkedIn, GitHub for strong entity recognition (helps AI citation).
  tagline: "Web, Mobile, SaaS & AI development agency",
  description:
    "CodeBaxh is a software development agency. Our team delivers web and mobile apps, multi-tenant SaaS, and AI products with Next.js, React, React Native, Node.js, Python, and more — for startups and companies worldwide.",
  // ≤155 chars — used for <meta name="description"> and og:description on the
  // homepage. The longer `description` above stays for schema/llms.txt, where
  // there is no SERP truncation.
  metaDescription:
    "CodeBaxh is a software development agency building web and mobile apps, multi-tenant SaaS, and AI products with Next.js, React, and Node.js — worldwide.",
  email: "code.baxh@gmail.com",
  phone: "+923435527709",
  phoneDisplay: "+92 343 552 7709",
  // Founder / timezone — communication clarity is a key trust lever.
  foundingLocation: "Islamabad, Pakistan",
  addressLines: ["Ghouri Town, Islamabad, Pakistan"],
  timezoneNote: "Flexible timezone overlap · async-first · fluent English",
  logo: "/logo/complete-logo.png",
  logoMark: "/logo/shortLogo.png",
  ogImage: "/og.png", // 1200×630, lives at public/og.png
} as const;

export const FOUNDER = {
  name: "Bilal Khursheed",
  role: "Founder & Principal Engineer",
  url: "https://bilalkhursheed.com",
  upworkBadge: "Top Rated Plus",
  // Honest framing: Zoneomics is where Bilal works as a full-stack developer
  // (employment), not a CodeBaxh client deliverable — kept as a light credential
  // only, with no client-logo claims attached to CodeBaxh.
  bio: "Bilal Khursheed is the founder of CodeBaxh and an Upwork Top Rated Plus full-stack engineer with 6+ years building production web, SaaS, and AI products for international clients. His professional experience includes full-stack development on Zoneomics, a production geospatial SaaS.",
} as const;

/**
 * Social / third-party profiles. These power the Organization `sameAs` array —
 * the entity signal AI engines and Google use to confirm who you are.
 * ⚠️ Replace the TODO placeholders with the real company-account URLs.
 */
export const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/code-baxh/",
  upwork: "", // TODO: company/freelancer Upwork profile URL
  facebook: "", // TODO: Facebook page URL
  instagram: "", // TODO: Instagram profile URL
  github: "", // optional: GitHub org URL
  x: "", // TODO: X/Twitter handle e.g. "@codebaxh" — powers the Twitter card
} as const;

// Used for Organization.sameAs — only include non-empty profiles.
export const SAME_AS: string[] = [
  SOCIALS.linkedin,
  SOCIALS.upwork,
  SOCIALS.facebook,
  SOCIALS.instagram,
  SOCIALS.github,
  FOUNDER.url,
].filter(Boolean);

// Discovery-call booking link (Cal.com / Calendly). Falls back to email/contact.
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? ""; // TODO

export const PRIMARY_CTA = {
  label: "Book a free discovery call",
  href: "/contact",
} as const;

export const SECONDARY_CTA = {
  label: "See our work",
  href: "/work",
} as const;

/**
 * Real CodeBaxh client / project names to feature in the trust strip.
 * ⚠️ Only list names you've built FOR or products you OWN, and only where you
 * have permission to name them publicly. (Do NOT list Zoneomics' enterprise
 * clients here — those are not CodeBaxh clients.)
 * TODO: confirm which of these can be shown — e.g. "Galaxy Digital", "Nary AI",
 * "Fabrication Flow".
 */
export const CLIENT_LOGOS: readonly string[] = [];

/** Headline proof stats reused across pages. */
export const STATS = [
  { value: "6+ yrs", label: "Shipping software for clients" },
  { value: "11 wks", label: "Multi-tenant SaaS MVP delivered" },
  { value: "Top Rated Plus", label: "Upwork — sustained track record" },
  { value: "Global", label: "Clients worldwide, async-first" },
] as const;
