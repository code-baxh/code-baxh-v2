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
