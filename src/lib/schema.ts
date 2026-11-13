import { site } from "@/config/site";
import { team, type TeamMember } from "@/content/team";
import type { Faq, Service } from "@/content/types";
import { abs } from "./seo";

const ORG_ID = abs("/#organization");

export function personSchema(m: TeamMember) {
  return {
    "@type": "Person",
    "@id": abs(`/team/${m.slug}#person`),
    name: m.name,
    jobTitle: m.role,
    url: abs(`/team/${m.slug}`),
    worksFor: { "@id": ORG_ID },
    sameAs: m.links.map((l) => l.href),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legal.entityName,
    url: site.url,
    logo: abs("/logo/codebaxh-logo-light.png"),
    description: site.description,
    sameAs: [site.social.linkedin],
    founder: team.map(personSchema),
    address: site.locations.map((l) => ({
      "@type": "PostalAddress",
      addressLocality: l.city,
      addressCountry: l.countryCode,
    })),
    areaServed: [...site.markets, "Worldwide"],
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
    "@id": abs("/#website"),
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en-GB",
    publisher: { "@id": ORG_ID },
  };
}

export function caseStudySchema(c: { slug: string; title: string; summary: string; stack: readonly string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: c.title,
    description: c.summary,
    url: abs(`/work/${c.slug}`),
    keywords: c.stack.join(", "),
    creator: { "@id": ORG_ID },
  };
}

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.metaDescription,
    url: abs(`/services/${s.slug}`),
    provider: { "@id": ORG_ID },
    areaServed: [...site.markets, "Worldwide"],
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
  author: TeamMember;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    dateModified: p.updated,
    mainEntityOfPage: abs(`/blog/${p.slug}`),
    image: abs(`/blog/${p.slug}/opengraph-image`),
    author: personSchema(p.author),
    publisher: { "@id": ORG_ID },
  };
}
