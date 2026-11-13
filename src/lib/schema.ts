import { site } from "@/config/site";
import { team, type TeamMember } from "@/content/team";
import type { Faq, Service } from "@/content/types";
import { abs } from "./seo";

const ORG_ID = abs("/#organization");
const WEBSITE_ID = abs("/#website");

export const personId = (slug: string) => abs(`/team/${slug}#person`);

export function personSchema(m: TeamMember) {
  return {
    "@type": "Person",
    "@id": personId(m.slug),
    name: m.name,
    jobTitle: m.role,
    description: m.bio,
    url: abs(`/team/${m.slug}`),
    worksFor: { "@id": ORG_ID },
    knowsAbout: m.expertise,
    sameAs: m.links.map((l) => l.href),
  };
}

/** Team member page: ProfilePage whose main entity is the person. */
export function profilePageSchema(m: TeamMember) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": abs(`/team/${m.slug}`),
    url: abs(`/team/${m.slug}`),
    name: `${m.name}, ${m.role}`,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: personSchema(m),
  };
}

/**
 * Plain Organization. ProfessionalService was dropped on purpose: it is a LocalBusiness
 * subtype, so Google expects a full street address and flags the city-only offices.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legal.entityName,
    url: site.url,
    logo: { "@type": "ImageObject", url: abs("/logo/codebaxh-logo-light.png") },
    image: abs("/opengraph-image"),
    description: site.description,
    slogan: site.tagline,
    sameAs: Object.values(site.social),
    founder: team.map((m) => ({ "@id": personId(m.slug) })),
    employee: team.map(personSchema),
    address: site.locations.map((l) => ({
      "@type": "PostalAddress",
      addressLocality: l.city,
      addressCountry: l.countryCode,
    })),
    areaServed: [...site.markets, "Worldwide"],
    knowsAbout: [
      "Software development",
      "SaaS development",
      "Web application development",
      "Mobile app development",
      "Next.js",
      "React Native",
      "Retrieval-augmented generation (RAG)",
      "AI agents",
      "LLM integration",
      "Payment gateway integration",
      "Cloud and DevOps",
      "QA and software testing",
    ],
    contactPoint: [site.contact.phoneSweden, site.contact.phonePakistan].map((telephone) => ({
      "@type": "ContactPoint",
      contactType: "sales",
      telephone,
      url: abs("/start-a-project"),
      availableLanguage: "English",
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en-GB",
    publisher: { "@id": ORG_ID },
  };
}

export function caseStudySchema(c: { slug: string; title: string; summary: string; stack: readonly string[]; sector: string }) {
  const url = abs(`/work/${c.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": url,
    name: c.title,
    headline: c.title,
    description: c.summary,
    url,
    mainEntityOfPage: url,
    image: abs(`/work/${c.slug}/opengraph-image`),
    genre: "Case study",
    about: c.sector,
    keywords: c.stack.join(", "),
    creator: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: "en-GB",
  };
}

export function serviceSchema(s: Service) {
  const url = abs(`/services/${s.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: s.name,
    serviceType: s.name,
    description: s.metaDescription,
    url,
    image: abs(`/services/${s.slug}/opengraph-image`),
    provider: { "@id": ORG_ID },
    areaServed: [...site.markets, "Worldwide"],
    category: s.category === "ai" ? "AI development" : "Software development",
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function articleSchema(p: {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated: string;
  category: string;
  tags: string[];
  wordCount: number;
  author: TeamMember;
}) {
  const url = abs(`/blog/${p.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    dateModified: p.updated,
    url,
    mainEntityOfPage: url,
    image: abs(`/blog/${p.slug}/opengraph-image`),
    articleSection: p.category,
    keywords: p.tags.join(", "),
    wordCount: p.wordCount,
    inLanguage: "en-GB",
    isPartOf: { "@id": WEBSITE_ID },
    author: personSchema(p.author),
    publisher: { "@id": ORG_ID },
  };
}
