/**
 * Blog posts. Each maps to a service pillar and internally links to it.
 * Content uses AEO formatting: a direct answer in the first lines of each
 * section, concrete specifics, and lists — the structure AI engines extract.
 */

export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  datePublished: string; // ISO date
  readingTime: string;
  category: string;
  /** Related service for internal linking. */
  serviceSlug?: string;
  sections: BlogSection[];
  faqs?: { q: string; a: string }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-build-a-multi-tenant-saas",
    title: "How to build a multi-tenant SaaS architecture",
    metaTitle: "How to Build a Multi-Tenant SaaS Architecture (2026 Guide)",
    metaDescription:
      "A practical guide to multi-tenant SaaS architecture: tenant isolation models, data design, auth, and billing — from a team that ships production SaaS.",
    excerpt:
      "The tenancy model you pick on day one shapes everything after it. Here's how we choose between shared, schema-per-tenant, and database-per-tenant — and what we build in from the start.",
    datePublished: "2026-05-12",
    readingTime: "8 min read",
    category: "SaaS",
    serviceSlug: "saas-development",
    sections: [
      {
        paragraphs: [
          "Multi-tenancy means one application serves many customers (tenants) while keeping each tenant's data isolated. The model you choose — shared schema, schema-per-tenant, or database-per-tenant — is the single most consequential early decision in a SaaS build, because changing it later is expensive.",
        ],
      },
      {
        heading: "The three tenancy models",
        bullets: [
          "Shared schema (pooled): all tenants share tables, separated by a tenant_id column. Cheapest and simplest to operate; isolation depends entirely on correct query scoping. Best default for most SaaS.",
          "Schema-per-tenant: each tenant gets its own schema in a shared database. Stronger isolation, more operational overhead, harder cross-tenant analytics.",
          "Database-per-tenant: each tenant gets a dedicated database. Strongest isolation and per-tenant scaling; highest cost and operational complexity. Usually only for enterprise or compliance-heavy customers.",
        ],
      },
      {
        heading: "What to build in from day one",
        paragraphs: [
          "Whatever model you pick, some decisions are far cheaper to make at the start than to retrofit:",
        ],
        bullets: [
          "A tenant context that flows through every request, so data is scoped automatically rather than per-query.",
          "Row-level security (in PostgreSQL/Supabase) as a backstop against query mistakes leaking data.",
          "Role-based access control (RBAC) within each tenant.",
          "Subscription billing wired to tenant lifecycle (trials, upgrades, cancellation).",
          "Per-tenant observability so you can debug one customer without sifting through everyone's logs.",
        ],
      },
      {
        heading: "Our default",
        paragraphs: [
          "For most SaaS MVPs we start with a shared schema and a tenant_id plus Postgres row-level security — cheap to run, fast to build, and isolated when implemented carefully — and reserve database-per-tenant for enterprise customers who require it. We used exactly this approach to ship a multi-tenant SaaS MVP in 11 weeks that scaled past launch.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which multi-tenant model is best?",
        a: "For most SaaS, a shared schema with a tenant_id and row-level security is the best default — cheapest to operate and well-isolated when built carefully. Move to database-per-tenant only for enterprise or compliance needs.",
      },
      {
        q: "Can you change tenancy models later?",
        a: "Yes, but it's expensive and risky — it usually means a data migration and significant rework. That's why the model is worth getting right at the start.",
      },
    ],
  },
  {
    slug: "building-a-rag-pipeline",
    title: "Building a RAG pipeline with OpenAI and Anthropic",
    metaTitle: "Building a RAG Pipeline with OpenAI & Anthropic (2026)",
    metaDescription:
      "How to build a production RAG pipeline: chunking, embeddings, vector search, grounding, and evaluation — from a team shipping production AI.",
    excerpt:
      "RAG is how you make an LLM answer from your data instead of hallucinating. Here's the production pipeline we build, step by step.",
    datePublished: "2026-04-28",
    readingTime: "9 min read",
    category: "AI integration",
    serviceSlug: "ai-integration",
    sections: [
      {
        paragraphs: [
          "Retrieval-Augmented Generation (RAG) grounds a large language model in your own data: relevant documents are retrieved with vector search and passed to the model so its answers are accurate and traceable to your sources. It's the difference between a demo that hallucinates and a system you can put in front of customers.",
        ],
      },
      {
        heading: "The production pipeline",
        bullets: [
          "Ingestion: load your documents and clean them (strip boilerplate, normalize formats).",
          "Chunking: split documents into retrievable pieces — chunk size and overlap materially affect answer quality.",
          "Embeddings: convert chunks to vectors and store them in a vector index (e.g. pgvector/Supabase).",
          "Retrieval: embed the query, find the most relevant chunks, and optionally re-rank them.",
          "Generation: pass retrieved context to the LLM (GPT or Claude) with a prompt that requires grounding in the provided sources.",
          "Evaluation: measure answer accuracy and grounding with an eval set so changes are improvements, not regressions.",
        ],
      },
      {
        heading: "Where RAG projects fail",
        paragraphs: [
          "Most RAG systems don't fail at the demo — they fail in production. The common causes are poor chunking, no re-ranking, prompts that don't force grounding, and no evaluation harness, so quality silently drifts. We treat evaluation as a first-class part of the build, not an afterthought.",
        ],
      },
      {
        heading: "Choosing the model",
        paragraphs: [
          "We select the model per task to balance quality, latency, and cost — and design the system so the model is swappable. For grounded, document-heavy reasoning we often reach for Claude; for some extraction and tool-use tasks GPT fits well. The right answer is measured against your data, not assumed.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is a RAG pipeline?",
        a: "A RAG (Retrieval-Augmented Generation) pipeline retrieves relevant chunks of your own data via vector search and passes them to an LLM, so answers are grounded in and traceable to your sources instead of hallucinated.",
      },
      {
        q: "OpenAI or Anthropic for RAG?",
        a: "Both work well; the right choice is task-dependent and should be measured against your data. We build RAG systems so the model is swappable and pick per task based on quality, latency, and cost.",
      },
    ],
  },
  {
    slug: "how-much-does-it-cost-to-build-a-saas",
    title: "How much does it cost to build a SaaS product?",
    metaTitle: "How Much Does It Cost to Build a SaaS Product? (2026)",
    metaDescription:
      "A straight answer on SaaS development cost: what drives the price, realistic MVP ranges, and how to spend less without building throwaway code.",
    excerpt:
      "A focused SaaS MVP typically starts in the low five figures (USD). Here's what actually drives the number — and how to keep it down.",
    datePublished: "2026-04-10",
    readingTime: "6 min read",
    category: "SaaS",
    serviceSlug: "mvp-development",
    sections: [
      {
        paragraphs: [
          "A focused, production-ready SaaS MVP typically starts in the low five figures (USD) and rises with scope. The price is driven less by 'how many features' and more by complexity: integrations, compliance, real-time data, and how polished the UX needs to be.",
        ],
      },
      {
        heading: "What drives SaaS cost",
        bullets: [
          "Scope: the number and complexity of core features.",
          "Integrations: payments, third-party APIs, and data sources each add work.",
          "Multi-tenancy and roles: enterprise-grade isolation and permissions cost more than a single-tenant app.",
          "AI features: RAG, agents, and evaluation add real engineering.",
          "Compliance: SOC 2, HIPAA, or GDPR requirements raise the floor.",
          "Design polish: a refined, branded UI takes more time than a functional one.",
        ],
      },
      {
        heading: "How to spend less (without regret)",
        paragraphs: [
          "The cheapest SaaS is the one you don't have to rebuild. The biggest savings come from scoping tightly to what proves the idea, then building that small scope on production-grade architecture so it becomes the foundation for v2 rather than throwaway code. We delivered a multi-tenant SaaS MVP in 11 weeks this way.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does a SaaS MVP cost?",
        a: "Most focused SaaS MVPs start in the low five figures (USD) and scale with scope and complexity. We provide a fixed estimate after a free discovery call.",
      },
      {
        q: "Is it cheaper to use a freelancer or an agency?",
        a: "A single freelancer can be cheaper upfront but riskier for a full SaaS (no redundancy, narrower skills). A small senior agency gives you full-stack coverage and continuity. For a product you intend to scale, the agency total cost of ownership is often lower.",
      },
    ],
  },
  {
    slug: "ssr-vs-ssg-vs-isr-nextjs",
    title: "SSR vs SSG vs ISR in Next.js — which to use",
    metaTitle: "SSR vs SSG vs ISR in Next.js: Which to Use (2026)",
    metaDescription:
      "A clear decision guide for Next.js rendering: when to use static generation, ISR, and server rendering — with SEO and performance in mind.",
    excerpt:
      "Use static for marketing pages, ISR for content that changes occasionally, and SSR only where data must be fresh per request. Here's the decision rule.",
    datePublished: "2026-03-22",
    readingTime: "7 min read",
    category: "Next.js",
    serviceSlug: "nextjs-development",
    sections: [
      {
        paragraphs: [
          "Pick the rendering strategy per route. As a rule: static generation (SSG) for content that's the same for everyone, Incremental Static Regeneration (ISR) for content that changes occasionally, and server-side rendering (SSR) only where data must be fresh on every request. Marketing and service pages should almost always be static or ISR so they're fast and fully crawlable.",
        ],
      },
      {
        heading: "The decision rule",
        bullets: [
          "Static (SSG): marketing pages, docs, blog posts — content that rarely changes. Fastest possible loads and trivially crawlable.",
          "ISR: catalogs, listings, and content that updates periodically — static speed with scheduled or on-demand revalidation.",
          "SSR: dashboards, personalized pages, and anything that depends on the current request. Use it where freshness genuinely matters.",
        ],
      },
      {
        heading: "Why this matters for SEO",
        paragraphs: [
          "Search engines and AI crawlers reward fast, server-rendered HTML. Leaving indexable content client-only-rendered is the most common Next.js SEO mistake — the content may never be reliably crawled. Static and ISR pages ship complete HTML and hit Core Web Vitals targets (LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1) more easily.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should marketing pages use SSR in Next.js?",
        a: "Usually no. Marketing and service pages should be statically generated (or use ISR) so they load fast and are fully crawlable. Reserve SSR for pages that need per-request fresh or personalized data.",
      },
    ],
  },
  {
    slug: "agency-vs-freelancer-vs-in-house",
    title: "Agency vs freelancer vs in-house: how to build your product",
    metaTitle: "Agency vs Freelancer vs In-House Dev: Which Is Right? (2026)",
    metaDescription:
      "A practical comparison of building software with an agency, a freelancer, or an in-house team — cost, speed, risk, and when each makes sense.",
    excerpt:
      "Freelancers are cheapest but riskiest; in-house is best long-term but slow to stand up; a senior agency is the fastest path to a shipped product. Here's how to choose.",
    datePublished: "2026-03-05",
    readingTime: "6 min read",
    category: "Decision guides",
    serviceSlug: "saas-development",
    sections: [
      {
        paragraphs: [
          "If you need to ship a product quickly and well, a small senior agency is usually the fastest, lowest-risk path; a freelancer is cheapest for narrow, well-defined work; and an in-house team is the best long-term investment once you have product-market fit and steady funding. The right choice depends on your stage, budget, and how much technical leadership you already have.",
        ],
      },
      {
        heading: "Quick comparison",
        bullets: [
          "Freelancer: lowest cost, fastest to start, but single point of failure, narrow skill set, and limited continuity. Great for a defined slice of work.",
          "Agency: full-stack coverage, senior delivery, and continuity, at a higher rate than a freelancer but without hiring overhead. Best for shipping a product end to end.",
          "In-house: highest long-term value and control, but slow and expensive to hire and ramp. Best once you have traction and need a durable team.",
        ],
      },
      {
        heading: "A common path",
        paragraphs: [
          "Many founders start with an agency to ship the first production version fast, then hire in-house once the product has traction — taking over a clean, documented codebase rather than a prototype. We build for exactly this handoff: production-grade architecture your future team can own.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is an agency or freelancer better for building a SaaS?",
        a: "For a full SaaS you intend to scale, a small senior agency is usually better — full-stack coverage, senior delivery, and continuity. A freelancer fits a narrow, well-defined slice of work at lower cost but higher risk.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
