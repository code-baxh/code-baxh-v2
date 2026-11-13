/**
 * Single source of truth for company details.
 * Update `legal` once the company is registered: add the registered name and organisation number.
 */
export const site = {
  name: "CodeBaxh",
  descriptor: "software development and AI company",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://codebaxh.com",
  tagline: "Web, SaaS and AI products that ship.",
  description:
    "CodeBaxh is a software development and AI company building web, mobile, SaaS and AI products for clients in Europe, the US, Canada and the UAE.",
  legal: {
    /** Operating name. Replace with the registered company name once incorporated. */
    entityName: "CodeBaxh",
    /** Leave empty until there is one; it is then shown in the footer and legal pages. */
    orgNumber: "",
    governingLaw: "Sweden",
  },
  contact: {
    /** Inbox that receives contact-form enquiries. Not shown on the site. CONTACT_TO_EMAIL overrides it. */
    enquiriesEmail: "baxhcode@gmail.com",
    phoneSweden: "+46 76 954 46 49",
    phonePakistan: "+92 343 552 7709",
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
  contentUpdated: "2026-11-13",
  locations: [
    { city: "Stockholm", country: "Sweden", countryCode: "SE", role: "Product delivery team" },
    { city: "Islamabad", country: "Pakistan", countryCode: "PK", role: "Engineering team" },
  ],
  /** Markets we actively serve. Delivery is worldwide. */
  markets: ["Europe", "United States", "Canada", "United Arab Emirates"],
  departments: ["Product & delivery", "Design", "Web & mobile engineering", "AI engineering", "QA", "Cloud & DevOps"],
} as const;

/** "CodeBaxh" or, once registered, "Registered Name AB (organisation number 000000-0000)". */
export const legalIdentity = `${site.legal.entityName}${site.legal.orgNumber ? ` (organisation number ${site.legal.orgNumber})` : ""}`;

export const mainNav = [
  { href: "/services", label: "Services" },
  { href: "/ai", label: "AI" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
] as const;
