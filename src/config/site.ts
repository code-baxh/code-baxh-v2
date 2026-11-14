/** Single source of truth for company details. */
export const site = {
  name: "CodeBaxh",
  descriptor: "software development and AI company",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://codebaxh.com",
  tagline: "Web, SaaS and AI products that ship.",
  description:
    "CodeBaxh is a software development and AI company building web, mobile, SaaS and AI products for clients in Europe, the US, Canada and the UAE.",
  /**
   * The registered company, as on the Missouri Articles of Organization (filed 28 August 2026).
   * Everything here is public record. Never add the EIN: it is for tax and banking only.
   */
  legal: {
    entityName: "CodeBaxh LLC",
    /** Missouri Secretary of State charter number. */
    charterNumber: "LC014772565",
    jurisdiction: "Missouri, United States",
    /** Registered office, also the principal office on the filing. */
    registeredOffice: {
      street: "117 S Lexington St, Ste 100",
      city: "Harrisonville",
      region: "MO",
      regionName: "Missouri",
      postalCode: "64701",
      country: "United States",
      countryCode: "US",
    },
    governingLaw: "the State of Missouri, United States",
  },
  contact: {
    /** Inbox that receives contact-form enquiries. Not shown on the site. CONTACT_TO_EMAIL overrides it. */
    enquiriesEmail: "baxhcode@gmail.com",
    /** Shown in the footer and contact card, and as Organization contactPoints. */
    phones: [
      { country: "United States", number: "+1 364 999 7842" },
      { country: "Sweden", number: "+46 76 954 46 49" },
      { country: "Pakistan", number: "+92 343 552 7709" },
    ],
  },
  /** Company profiles. They feed Organization `sameAs`, the signal search and AI engines use to confirm the entity. */
  social: {
    linkedin: "https://www.linkedin.com/company/code-baxh/",
    upwork: "https://www.upwork.com/agencies/1746999947359457280/",
    github: "https://github.com/code-baxh",
  },
  /**
   * Last meaningful content change to the evergreen pages (YYYY-MM-DD). Used as sitemap
   * lastModified so the value stays stable across builds. Bump it on a real content change.
   */
  contentUpdated: "2026-11-15",
  locations: [
    { city: "Stockholm", country: "Sweden", countryCode: "SE", role: "Product delivery team" },
    { city: "Islamabad", country: "Pakistan", countryCode: "PK", role: "Engineering team" },
  ],
  /** Markets we actively serve. Delivery is worldwide. */
  markets: ["Europe", "United States", "Canada", "United Arab Emirates"],
  departments: ["Product & delivery", "Design", "Web & mobile engineering", "AI engineering", "QA", "Cloud & DevOps"],
} as const;

const office = site.legal.registeredOffice;

/** "117 S Lexington St, Ste 100, Harrisonville, MO 64701, United States" */
export const registeredAddress = `${office.street}, ${office.city}, ${office.region} ${office.postalCode}, ${office.country}`;

/** "CodeBaxh LLC, a limited liability company registered in Missouri, United States (charter number LC…)" */
export const legalIdentity = `${site.legal.entityName}, a limited liability company registered in ${site.legal.jurisdiction} (charter number ${site.legal.charterNumber})`;

/** One-paragraph entity summary for llms.txt and llms-full.txt. */
export const companyFacts = `${legalIdentity}. Registered office: ${registeredAddress}. ${site.locations
  .map((l) => `${l.role}: ${l.city}, ${l.country}.`)
  .join(" ")}`;

export const mainNav = [
  { href: "/services", label: "Services" },
  { href: "/ai", label: "AI" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
] as const;
