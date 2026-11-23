export type Faq = { q: string; a: string };

export type ServiceCategory = "core" | "ai";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  /** Key into the icon map in components/ui/service-icon.tsx */
  icon: string;
  /** One sentence for cards. */
  summary: string;
  /**
   * <title> without the brand: lead with the search term (the name and headline are
   * written for people, not queries). " | CodeBaxh" is appended when the total fits in 60.
   */
  metaTitle: string;
  /** 140 to 160 characters, unique per service. Plain text, write "&" literally. */
  metaDescription: string;
  /** H1 of the detail page. */
  headline: string;
  /** The client's problem, 2 to 3 short paragraphs. */
  problem: string[];
  /** How we tackle it, 3 to 5 steps. */
  approach: { title: string; body: string }[];
  /** What the client receives, 5 to 8 items. */
  deliverables: string[];
  tech: string[];
  /** Slugs from case-studies.ts */
  relatedCaseStudies: string[];
  /** 4 to 6 service-specific questions. */
  faqs: Faq[];
};

export type CaseStudyCategory = "SaaS" | "AI" | "Web" | "Mobile" | "E-commerce";

export type CaseStudy = {
  slug: string;
  /** Real client or product name. Only rendered when clientNamePermission is true. */
  clientName: string;
  clientNamePermission: boolean;
  /** Title that never contains the client name. */
  title: string;
  /** Optional shorter <title> when `title` runs past about 60 characters. */
  metaTitle?: string;
  /** Short label, e.g. "PropTech SaaS". */
  sector: string;
  /** Used by the filter on /work. */
  category: CaseStudyCategory;
  summary: string;
  /** "founder-engineer" = a founder worked as an engineer on someone else's product. */
  role: "codebaxh-led" | "founder-engineer";
  /** One honest sentence on who did what. Shown on the page. */
  roleNote: string;
  problem: string[];
  approach: string[];
  solution: string[];
  built: { title: string; body: string }[];
  stack: string[];
  /** Outcomes. Only state figures you can evidence. */
  results: { text: string; needsVerification?: boolean }[];
  /** Slugs from services.ts */
  services: string[];
  featured?: boolean;
};

export type Testimonial = {
  id: string;
  /** Word for word from the review. Cut only at sentence boundaries, mark a gap with "[…]", never reword. */
  quote: string;
  /** As Upwork shows it (first name, last initial). Leave out when Upwork hides the name. */
  author?: string;
  /** What the work was, in our words. Name a client's product only if the review itself does. */
  project: string;
  /** Review date (YYYY-MM-DD), or the contract end date when Upwork does not show one. */
  date: string;
  /** Star rating on Upwork. Only 5-star reviews are used. */
  rating: number;
  /** Slug from team.ts of the person the review is about. */
  about: string;
  /** Shown on the homepage. */
  featured?: boolean;
};

export type Market = {
  slug: string;
  /** Short name for links and breadcrumbs, e.g. "United States". */
  name: string;
  /** The name as used mid-sentence, e.g. "the US". */
  inName: string;
  /** One sentence for the /markets index card. */
  summary: string;
  /** <title> without the brand, led by the search term. */
  metaTitle: string;
  /** 140 to 160 characters. Plain text. */
  metaDescription: string;
  eyebrow: string;
  /** H1. */
  headline: string;
  lead: string;
  /** How working together works from this market: contract, hours, people, data. */
  working: { title: string; body: string }[];
  /** Rules and buying requirements specific to this market, and how we build for them. Facts only. */
  compliance: { title: string; body: string }[];
  /** Integrations common in this market. Informational: not a claim that we have shipped each one. */
  integrations: string[];
  /** Slugs from case-studies.ts that match what this market asks for. No claim about client location. */
  caseStudies: string[];
  faqs: Faq[];
};
