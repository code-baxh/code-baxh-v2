/**
 * Case studies (portfolio spokes). Structure: Problem → Approach → Solution →
 * Results, with named clients, tech, metrics, and a link to the related service.
 * All proof here is approved real work.
 */

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  /** Short label for cards. */
  category: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  /** Named enterprise clients / context (trust transfer). */
  clients?: string[];
  problem: string;
  approach: string[];
  solution: string;
  results: { value: string; label: string }[];
  techStack: string[];
  /** Related service slug for internal linking. */
  serviceSlug?: string;
  featured?: boolean;
};

// NOTE: Zoneomics was removed as a case study — it's the founder's employer /
// product, not a CodeBaxh client deliverable. Real owned/client projects
// (e.g. Nary AI, Fabrication Flow, Galaxy Digital) to be added from details
// the owner provides. Existing entries below should be confirmed/expanded.
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "saas-mvp-11-weeks",
    client: "Multi-tenant SaaS startup",
    title: "A multi-tenant SaaS MVP, shipped in 11 weeks",
    category: "SaaS MVP",
    metaTitle: "11-Week SaaS MVP Case Study | Multi-Tenant SaaS | CodeBaxh",
    metaDescription:
      "How CodeBaxh delivered a production-ready multi-tenant SaaS MVP — auth, billing, and dashboards — in 11 weeks, on architecture built to scale.",
    summary:
      "A production-ready multi-tenant SaaS MVP — auth, billing, and dashboards — delivered in 11 weeks.",
    problem:
      "A founder needed to validate a SaaS idea with real, paying users quickly — but couldn't afford the throwaway code that forces a rewrite the moment the product gets traction.",
    approach: [
      "Scoped the smallest viable product that still proved the core value.",
      "Built multi-tenant architecture, authentication, and Stripe billing from the start.",
      "Shipped in weekly loops with demos, so the founder steered as it came together.",
    ],
    solution:
      "A launched, multi-tenant SaaS application with secure tenant isolation, subscription billing, role-based access, and a customer dashboard — ready for real users in 11 weeks, on a foundation that scaled past launch.",
    results: [
      { value: "11 weeks", label: "Idea to launched MVP" },
      { value: "Multi-tenant", label: "Built to scale from day one" },
      { value: "Stripe billing", label: "Live subscriptions at launch" },
    ],
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Stripe", "AWS"],
    serviceSlug: "mvp-development",
    featured: true,
  },
  {
    slug: "legal-contract-ai",
    client: "Legal-tech",
    title: "Legal contract analysis with a production RAG pipeline",
    category: "AI / RAG",
    metaTitle: "Legal Contract AI Case Study | RAG Pipeline | CodeBaxh",
    metaDescription:
      "How CodeBaxh built a production RAG pipeline for legal contract analysis — grounded, accurate, and source-cited answers over complex documents.",
    summary:
      "A retrieval-augmented (RAG) system that analyzes legal contracts and answers questions grounded in the source documents.",
    problem:
      "Reviewing legal contracts is slow and error-prone, and generic LLMs hallucinate on legal text. The system needed accurate, grounded answers tied directly to the contract language.",
    approach: [
      "Built a RAG pipeline: documents chunked, embedded, and retrieved via vector search.",
      "Grounded the LLM in retrieved clauses so answers cite the source text.",
      "Added evaluation and guardrails to keep answers accurate and on-scope.",
    ],
    solution:
      "A production AI system that lets users ask questions across contracts and get answers grounded in — and traceable to — the actual document language, dramatically cutting manual review time.",
    results: [
      { value: "Grounded", label: "Answers cite source clauses" },
      { value: "RAG", label: "Vector search over documents" },
      { value: "Evaluated", label: "Quality measured, not guessed" },
    ],
    techStack: ["OpenAI", "Anthropic", "Next.js", "Node.js", "PostgreSQL"],
    serviceSlug: "ai-integration",
    featured: true,
  },
  {
    slug: "ai-call-analysis",
    client: "AI call analysis",
    title: "AI call analysis — transcription, insight, and scoring",
    category: "AI / LLM",
    metaTitle: "AI Call Analysis Case Study | LLM Insights | CodeBaxh",
    metaDescription:
      "How CodeBaxh built an AI call-analysis system that transcribes conversations and extracts insights, summaries, and scoring with LLMs.",
    summary:
      "An AI system that transcribes calls and extracts summaries, insights, and scoring automatically.",
    problem:
      "Teams recorded large volumes of calls but couldn't review them at scale, losing insight on quality, sentiment, and follow-ups.",
    approach: [
      "Built a transcription and analysis pipeline over recorded calls.",
      "Used LLMs to summarize, extract action items, and score conversations.",
      "Designed the system for cost-efficiency at volume.",
    ],
    solution:
      "An automated AI call-analysis system that turns raw call recordings into searchable transcripts, summaries, extracted insights, and scores — making large call volumes reviewable.",
    results: [
      { value: "Automated", label: "Transcription + analysis pipeline" },
      { value: "At scale", label: "Reviewable call volumes" },
      { value: "Insightful", label: "Summaries, actions, and scoring" },
    ],
    techStack: ["OpenAI", "Node.js", "Next.js", "AWS"],
    serviceSlug: "ai-integration",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
