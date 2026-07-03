/**
 * JSON-LD structured-data builders. Centralized so entity details stay
 * consistent everywhere (consistency is what makes Google + AI engines trust
 * the entity and cite it). Render the returned objects with <JsonLd />.
 */
import { SITE, SITE_URL, FOUNDER, SAME_AS, CONTENT_LAST_UPDATED } from "./site";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const FOUNDER_ID = `${SITE_URL}/#founder`;

/**
 * Lead with Organization (most robust / future-proof entity type per 2025-26
 * guidance), layering ProfessionalService for the "real service business" signal.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}${SITE.logo}`,
    image: `${SITE_URL}${SITE.ogImage}`,
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phone,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: SITE.email,
      telephone: SITE.phone,
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    priceRange: "$$",
    areaServed: "Worldwide",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    founder: { "@id": FOUNDER_ID },
    knowsAbout: [
      "SaaS development",
      "AI integration",
      "Next.js development",
      "React development",
      "React Native development",
      "AWS cloud & DevOps",
      "Stripe integration",
      "RAG pipelines",
      "Multi-tenant architecture",
    ],
    sameAs: SAME_AS,
  } as const;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": ORG_ID },
  } as const;
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: FOUNDER.name,
    jobTitle: FOUNDER.role,
    url: FOUNDER.url,
    description: FOUNDER.bio,
    worksFor: { "@id": ORG_ID },
    sameAs: [FOUNDER.url].filter(Boolean),
  } as const;
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  slug: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType ?? opts.name,
    url: `${SITE_URL}/services/${opts.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: "Worldwide",
  } as const;
}

export function faqSchema(faqs: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } as const;
}

export function breadcrumbSchema(
  items: ReadonlyArray<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  } as const;
}

export function caseStudySchema(opts: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: `${SITE_URL}/work/${opts.slug}`,
    image: `${SITE_URL}${SITE.ogImage}`,
    dateModified: CONTENT_LAST_UPDATED,
    author: { "@id": FOUNDER_ID },
    publisher: { "@id": ORG_ID },
  } as const;
}

export function articleSchema(opts: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    url: `${SITE_URL}/blog/${opts.slug}`,
    image: `${SITE_URL}${SITE.ogImage}`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@id": FOUNDER_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: `${SITE_URL}/blog/${opts.slug}`,
  } as const;
}

/**
 * Combine a page's schema nodes into a single @graph (current best practice:
 * one script tag, nodes cross-referenced by @id). Strips per-node @context.
 */
export function graph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.map((n) => {
      const rest = { ...(n as Record<string, unknown>) };
      delete rest["@context"];
      return rest;
    }),
  };
}
