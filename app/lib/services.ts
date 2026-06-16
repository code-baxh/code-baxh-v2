/**
 * Service landing pages (hub-and-spoke spokes). One primary commercial keyword
 * per page. Content follows the proven service-page template: H1 keyword →
 * problem → scope → tech → process → case study → differentiators → FAQ → CTA.
 */

export type ServiceFAQ = { q: string; a: string };

export type Service = {
  slug: string;
  /** Short label for nav / cards. */
  navLabel: string;
  /** H1 — leads with the primary commercial keyword. */
  title: string;
  /** Primary keyword this page targets. */
  keyword: string;
  /** <title> for metadata. */
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  /** One-line card / hero summary. */
  summary: string;
  /** Hero subhead. */
  heroSubhead: string;
  /** Buyer pain this service removes. */
  problem: string;
  /** What we deliver (scope). */
  deliverables: string[];
  techStack: string[];
  differentiators: { title: string; body: string }[];
  /** Slug of the most relevant case study in work.ts. */
  caseStudySlug?: string;
  faqs: ServiceFAQ[];
};

/** Shared engagement process — same rhythm across services. */
export const PROCESS_STEPS = [
  {
    title: "Discovery",
    body: "We map the outcome, scope, and constraints in a free discovery call — no obligation, just a clear picture of the work.",
  },
  {
    title: "Design & architecture",
    body: "We shape the data model, system architecture, and UX before writing production code, so the build moves fast and safe.",
  },
  {
    title: "Build in short loops",
    body: "Weekly demos, a shared board, and async updates across your working hours. You always see working software, not status decks.",
  },
  {
    title: "Deploy & support",
    body: "CI/CD, monitoring, and a clean handover. We stay on for support, iteration, and scaling after launch.",
  },
] as const;

/** Full tech stack used across services. */
export const TECH_STACK = [
  "Next.js",
  "React",
  "React Native",
  "Angular",
  "Flutter",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Python",
  "FastAPI",
  "PHP",
  "Laravel",
  "Strapi (headless CMS)",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Supabase",
  "AWS",
  "Azure",
  "Docker",
  "Tailwind CSS",
  "Bootstrap",
  "Stripe",
  "OpenAI",
  "Anthropic",
] as const;

export const SERVICES: Service[] = [
  {
    slug: "saas-development",
    navLabel: "SaaS Development",
    title: "SaaS Development Services",
    keyword: "saas development company",
    metaTitle: "SaaS Development Company | Multi-Tenant SaaS Built Fast | CodeBaxh",
    metaDescription:
      "CodeBaxh builds robust, multi-tenant SaaS platforms with Next.js, Node.js, and AWS. We shipped a multi-tenant SaaS MVP in 11 weeks. Book a free discovery call.",
    eyebrow: "SaaS Development",
    summary:
      "Robust multi-tenant SaaS — from MVP to scale, built to launch fast and grow.",
    heroSubhead:
      "We build secure, multi-tenant SaaS platforms that are ready for real customers — billing, auth, dashboards, and the architecture to scale.",
    problem:
      "Most SaaS ideas stall between prototype and production: multi-tenancy, billing, auth, and reliability are hard to get right, and the wrong early architecture becomes expensive technical debt. You need a partner who has shipped real SaaS before.",
    deliverables: [
      "Multi-tenant architecture with secure tenant isolation",
      "Subscription billing and metering (Stripe)",
      "Authentication, roles, and permissions (RBAC)",
      "Admin and customer dashboards",
      "Onboarding flows and in-app analytics",
      "CI/CD, monitoring, and production observability",
    ],
    techStack: ["Next.js", "Node.js", "NestJS", "PostgreSQL", "Supabase", "Stripe", "AWS"],
    differentiators: [
      {
        title: "We've shipped real SaaS",
        body: "A multi-tenant SaaS MVP delivered in 11 weeks — auth, billing, and a customer dashboard, on architecture that scaled past launch.",
      },
      {
        title: "Architecture that scales",
        body: "We design for multi-tenancy, billing, and growth from day one so you don't re-platform at your first 100 customers.",
      },
      {
        title: "Experienced engineers only",
        body: "No hand-offs to juniors. The people scoping your build are the people writing the code.",
      },
    ],
    caseStudySlug: "saas-mvp-11-weeks",
    faqs: [
      {
        q: "How long does it take to build a SaaS MVP?",
        a: "A focused multi-tenant SaaS MVP typically takes 8–12 weeks. We delivered one in 11 weeks: auth, billing, multi-tenancy, and a customer dashboard ready for real users.",
      },
      {
        q: "How much does it cost to build a SaaS product?",
        a: "A launch-ready SaaS MVP usually starts in the low five figures (USD), depending on scope. We give a fixed estimate after a free discovery call so there are no surprises.",
      },
      {
        q: "Can you build multi-tenant architecture?",
        a: "Yes. Secure multi-tenant isolation, per-tenant data, RBAC, and subscription billing are core to how we build SaaS. We design tenancy in from the start, not as a retrofit.",
      },
      {
        q: "Do you handle Stripe billing and subscriptions?",
        a: "Yes — subscriptions, metered/usage-based billing, webhooks, proration, and the billing edge cases that break in production. See our Stripe integration service.",
      },
    ],
  },
  {
    slug: "ai-integration",
    navLabel: "AI Integration",
    title: "AI Integration Services",
    keyword: "ai integration services",
    metaTitle: "AI Integration Services | OpenAI, Anthropic & RAG | CodeBaxh",
    metaDescription:
      "Add real AI to your product: RAG pipelines, LLM features, and AI agents with OpenAI and Anthropic. CodeBaxh ships real-world AI — including a legal-contract RAG system. Book a call.",
    eyebrow: "AI Integration",
    summary:
      "Real, production AI features — RAG pipelines, LLM apps, and agents built with OpenAI and Anthropic.",
    heroSubhead:
      "We integrate LLMs into your product the right way: grounded in your data, cost-controlled, evaluated, and reliable in production.",
    problem:
      "Demos are easy; production AI is hard. Hallucinations, runaway token costs, prompt fragility, and no evaluation harness are why most AI features never ship. We build AI systems that hold up with real users and real data.",
    deliverables: [
      "RAG pipelines grounded in your documents and data",
      "LLM-powered features (search, summarization, extraction, chat)",
      "AI agents and workflow automation",
      "Vector search and embeddings infrastructure",
      "Prompt engineering, evaluation, and guardrails",
      "Token-cost optimization and observability",
    ],
    techStack: ["OpenAI", "Anthropic", "Next.js", "Node.js", "PostgreSQL", "Supabase", "AWS"],
    differentiators: [
      {
        title: "Production AI, not demos",
        body: "We've shipped a legal-contract analysis RAG pipeline, AI chatbots, and an AI call-analysis system — real systems, real users.",
      },
      {
        title: "Grounded and evaluated",
        body: "We ground LLMs in your data with RAG and build evaluation harnesses so quality is measured, not guessed.",
      },
      {
        title: "Cost-aware by design",
        body: "Model selection, caching, and prompt optimization keep token costs predictable as you scale.",
      },
    ],
    caseStudySlug: "legal-contract-ai",
    faqs: [
      {
        q: "What is a RAG pipeline?",
        a: "Retrieval-Augmented Generation (RAG) grounds an LLM in your own data: relevant documents are retrieved via vector search and passed to the model so answers are accurate and cite your sources instead of hallucinating.",
      },
      {
        q: "Which AI models do you work with?",
        a: "We build with OpenAI (GPT) and Anthropic (Claude), and select the right model per task to balance quality, latency, and cost. We can also work with open-source models when self-hosting matters.",
      },
      {
        q: "How do you control AI costs in production?",
        a: "Through model selection, caching, prompt compression, retrieval tuning, and observability on token spend — so cost stays predictable as usage grows.",
      },
      {
        q: "Can you add AI to our existing product?",
        a: "Yes. Most of our AI work integrates into an existing codebase — adding search, chat, extraction, or agent workflows without a rewrite.",
      },
    ],
  },
  {
    slug: "web-development",
    navLabel: "Web Development",
    title: "Full-Stack Web Development Services",
    keyword: "custom web development company",
    metaTitle: "Full-Stack Web Development Company | Next.js & React | CodeBaxh",
    metaDescription:
      "Custom full-stack web development with Next.js, React, TypeScript, Node.js, and Python. CodeBaxh builds fast, scalable web apps for clients worldwide. Book a free discovery call.",
    eyebrow: "Web Development",
    summary:
      "Custom, full-stack web applications built with Next.js, React, TypeScript, and Node.js.",
    heroSubhead:
      "From marketing sites to complex web apps — fast, accessible, and built on a modern, type-safe stack.",
    problem:
      "Off-the-shelf tools don't fit, and slow, brittle builds hurt conversion and trust. You need a custom web app that's fast, maintainable, and built to grow with your business.",
    deliverables: [
      "Custom web applications and platforms",
      "High-performance marketing and product sites",
      "Design systems and component libraries",
      "API and backend integration",
      "Core Web Vitals performance optimization",
      "Accessibility (WCAG) and SEO-ready architecture",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    differentiators: [
      {
        title: "Full-stack, end to end",
        body: "Frontend, backend, infrastructure, and deployment from one experienced team — no integration gaps.",
      },
      {
        title: "Performance-first",
        body: "We build to green Core Web Vitals: fast LCP, low INP, stable layout — because speed is conversion and ranking.",
      },
      {
        title: "Built to maintain",
        body: "Type-safe, tested, documented code your team can own after launch.",
      },
    ],
    caseStudySlug: "saas-mvp-11-weeks",
    faqs: [
      {
        q: "What tech stack do you use for web development?",
        a: "Next.js and React with TypeScript on the frontend; Node.js and NestJS on the backend; PostgreSQL, MongoDB, or Supabase for data; deployed on AWS or Vercel. We pick the stack that fits your needs.",
      },
      {
        q: "Do you build both the frontend and backend?",
        a: "Yes — we're a full-stack team. We handle UI, APIs, databases, infrastructure, and deployment so there are no gaps between front and back.",
      },
      {
        q: "Can you take over an existing codebase?",
        a: "Yes. We regularly audit, stabilize, and extend existing Next.js/React/Node codebases as well as building greenfield.",
      },
    ],
  },
  {
    slug: "nextjs-development",
    navLabel: "Next.js Development",
    title: "Next.js Development Agency",
    keyword: "nextjs development agency",
    metaTitle: "Next.js Development Agency | App Router & React 19 | CodeBaxh",
    metaDescription:
      "Expert Next.js development: App Router, Server Components, SSR/SSG/ISR, and Core Web Vitals. CodeBaxh ships fast, SEO-ready Next.js apps. Book a free discovery call.",
    eyebrow: "Next.js Development",
    summary:
      "Specialist Next.js development — App Router, Server Components, and SEO-ready rendering.",
    heroSubhead:
      "We build Next.js apps that are fast, crawlable, and launch-ready — using the App Router, Server Components, and the right rendering strategy per route.",
    problem:
      "Next.js is powerful but easy to misuse: client-only rendering kills SEO, waterfalls hurt performance, and the App Router has real learning curve. You want a team that knows the framework deeply.",
    deliverables: [
      "Next.js App Router architecture",
      "Server Components and streaming",
      "SSR / SSG / ISR strategy per route",
      "Metadata API, sitemaps, and structured data for SEO",
      "Core Web Vitals optimization",
      "Migration from Pages Router or other frameworks",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Vercel", "AWS"],
    differentiators: [
      {
        title: "Framework specialists",
        body: "We build on the latest Next.js and React 19 daily — including this very site.",
      },
      {
        title: "SEO-ready by default",
        body: "Server-rendered HTML, structured data, and fast loads so your pages rank and get cited.",
      },
      {
        title: "Right rendering, right route",
        body: "SSG/ISR for marketing, SSR for dynamic data — never indexable content stranded client-side.",
      },
    ],
    caseStudySlug: "saas-mvp-11-weeks",
    faqs: [
      {
        q: "Should I use SSR, SSG, or ISR in Next.js?",
        a: "Use static generation (SSG) or ISR for marketing and content pages so they're fast and fully crawlable, and SSR only where data must be fresh per request. We choose per route to balance speed and freshness.",
      },
      {
        q: "Can you migrate our app to the Next.js App Router?",
        a: "Yes. We migrate Pages Router and other frameworks to the App Router incrementally, keeping the app shippable throughout.",
      },
      {
        q: "Is Next.js good for SEO?",
        a: "Very — when used correctly. Server-rendered HTML, the Metadata API, dynamic sitemaps, and JSON-LD make Next.js excellent for SEO and AI-search visibility.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    navLabel: "Mobile Apps",
    title: "React Native App Development Company",
    keyword: "react native app development company",
    metaTitle: "React Native App Development Company | iOS & Android | CodeBaxh",
    metaDescription:
      "Cross-platform mobile apps with React Native — one codebase for iOS and Android. CodeBaxh ships polished, native-feeling apps. Book a free discovery call.",
    eyebrow: "Mobile App Development",
    summary:
      "Cross-platform iOS and Android apps from a single React Native codebase.",
    heroSubhead:
      "Native-feeling mobile apps for iOS and Android, built once with React Native and shipped to both stores.",
    problem:
      "Building separate native iOS and Android apps doubles cost and slows you down. You want one codebase, a great UX on both platforms, and a smooth path to the App Store and Play Store.",
    deliverables: [
      "Cross-platform iOS and Android apps (React Native)",
      "Native modules and device integrations",
      "Offline support and push notifications",
      "API and backend integration",
      "App Store and Play Store submission",
      "Over-the-air updates and crash monitoring",
    ],
    techStack: ["React Native", "TypeScript", "Node.js", "Supabase", "AWS"],
    differentiators: [
      {
        title: "One codebase, both stores",
        body: "Share logic across iOS and Android while keeping a native look and feel.",
      },
      {
        title: "Full-stack mobile",
        body: "We build the app and the backend/API it runs on — one team, no integration gaps.",
      },
      {
        title: "Shipped and maintained",
        body: "Store submission, OTA updates, and crash monitoring handled for you.",
      },
    ],
    faqs: [
      {
        q: "Why React Native instead of native iOS/Android?",
        a: "React Native lets you ship to both iOS and Android from one codebase — faster and cheaper than two native teams — while still feeling native to users. We drop to native modules when a feature needs it.",
      },
      {
        q: "Do you handle App Store and Play Store submission?",
        a: "Yes. We manage builds, store listings, review requirements, and submission for both the Apple App Store and Google Play.",
      },
      {
        q: "Can you build the backend for the app too?",
        a: "Yes — we're full-stack. We build the APIs, auth, and infrastructure your app depends on alongside the app itself.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    navLabel: "Cloud & DevOps",
    title: "Cloud & DevOps Services (AWS & Azure)",
    keyword: "aws cloud devops services",
    metaTitle: "AWS & Azure Cloud + DevOps Services | CI/CD & Infra | CodeBaxh",
    metaDescription:
      "Cloud architecture, CI/CD, and DevOps on AWS and Azure. CodeBaxh sets up scalable, observable, cost-efficient infrastructure. Book a free discovery call.",
    eyebrow: "Cloud & DevOps",
    summary:
      "Scalable, observable cloud infrastructure and CI/CD on AWS and Azure.",
    heroSubhead:
      "We set up the cloud infrastructure, pipelines, and monitoring your product needs to ship safely and scale reliably.",
    problem:
      "Manual deploys, no monitoring, and a surprise cloud bill are signs of infrastructure that won't scale. You need reliable pipelines, observability, and a cost-efficient architecture.",
    deliverables: [
      "Cloud architecture on AWS or Azure",
      "CI/CD pipelines and automated deployments",
      "Infrastructure as Code (Terraform / CDK)",
      "Containerization (Docker) and orchestration",
      "Monitoring, logging, and alerting",
      "Cost optimization and security hardening",
    ],
    techStack: ["AWS", "Azure", "Docker", "Terraform", "Node.js"],
    differentiators: [
      {
        title: "Built by people who ship",
        body: "We run this for our own SaaS work, so infrastructure is designed around real delivery, not theory.",
      },
      {
        title: "Cost-aware architecture",
        body: "We right-size infrastructure and remove waste so your cloud bill matches your stage.",
      },
      {
        title: "Reproducible & observable",
        body: "Infrastructure as Code plus monitoring means deploys are safe and incidents are visible.",
      },
    ],
    faqs: [
      {
        q: "AWS or Azure — which should we use?",
        a: "Both are excellent; the right choice depends on your team's skills, existing ecosystem, and specific services you need. We help you decide in discovery, then architect for it.",
      },
      {
        q: "Can you deploy our Next.js app to AWS?",
        a: "Yes — we deploy Next.js to AWS (and Vercel) with CI/CD, environment management, monitoring, and cost controls.",
      },
      {
        q: "Do you offer ongoing DevOps support?",
        a: "Yes. We offer retainers for monitoring, scaling, incident response, and continuous improvement of your infrastructure.",
      },
    ],
  },
  {
    slug: "stripe-integration",
    navLabel: "Stripe Integration",
    title: "Stripe Integration Services",
    keyword: "stripe integration services",
    metaTitle: "Stripe Integration Services | Subscriptions & Billing | CodeBaxh",
    metaDescription:
      "Stripe integration done right: subscriptions, usage-based billing, webhooks, and edge cases. CodeBaxh ships reliable payments for SaaS. Book a free discovery call.",
    eyebrow: "Stripe Integration",
    summary:
      "Reliable Stripe payments and subscription billing — including the edge cases.",
    heroSubhead:
      "We implement Stripe end to end: subscriptions, usage-based billing, webhooks, and the failure modes that break revenue in production.",
    problem:
      "Payments are unforgiving. Missed webhooks, proration bugs, failed-payment handling, and tax/compliance gaps quietly lose revenue. You want billing that's correct, tested, and reconciled.",
    deliverables: [
      "Subscription and usage-based (metered) billing",
      "Stripe Checkout, Billing, and Customer Portal",
      "Reliable webhook handling and reconciliation",
      "Proration, upgrades, downgrades, and trials",
      "Failed-payment recovery (dunning)",
      "Tax, invoicing, and reporting integration",
    ],
    techStack: ["Stripe", "Next.js", "Node.js", "NestJS", "PostgreSQL"],
    differentiators: [
      {
        title: "Edge cases handled",
        body: "We build for the failure modes — missed webhooks, retries, proration — that quietly lose revenue.",
      },
      {
        title: "Idempotent and reconciled",
        body: "Webhook handling that's idempotent and reconciled against Stripe so your data always matches.",
      },
      {
        title: "SaaS billing experience",
        body: "We've shipped subscription billing inside real multi-tenant SaaS, not just one-off checkouts.",
      },
    ],
    caseStudySlug: "saas-mvp-11-weeks",
    faqs: [
      {
        q: "Can you set up subscription billing with Stripe?",
        a: "Yes — plans, trials, upgrades/downgrades with proration, the Customer Portal, and metered/usage-based billing, all backed by reliable webhook handling.",
      },
      {
        q: "How do you handle Stripe webhooks reliably?",
        a: "With idempotent handlers, signature verification, retries, and reconciliation against Stripe — so a dropped or duplicated webhook never corrupts your billing state.",
      },
      {
        q: "Do you handle failed payments and dunning?",
        a: "Yes. We implement smart retries, dunning emails, and grace-period logic to recover failed payments and reduce involuntary churn.",
      },
    ],
  },
  {
    slug: "mvp-development",
    navLabel: "MVP Development",
    title: "MVP Development for Startups",
    keyword: "mvp development for startups",
    metaTitle: "MVP Development for Startups | Launch in Weeks | CodeBaxh",
    metaDescription:
      "Startup MVP development that ships fast without painting you into a corner. CodeBaxh delivered a multi-tenant SaaS MVP in 11 weeks. Book a free discovery call.",
    eyebrow: "MVP Development",
    summary:
      "Launch a real MVP in weeks — fast, focused, and built on architecture you won't outgrow.",
    heroSubhead:
      "We help founders go from idea to a launched, fundable MVP quickly — without the throwaway code that haunts version two.",
    problem:
      "Founders need to validate fast, but a rushed MVP becomes unfixable, and an over-built one never ships. You need the smallest thing that proves the idea — on a foundation you can keep building on.",
    deliverables: [
      "Scoping the smallest viable product",
      "Core feature build and a clean, usable UI",
      "Auth, payments, and the essentials to launch",
      "Deployed, monitored, and ready for users",
      "Analytics to measure validation",
      "A roadmap and architecture for what's next",
    ],
    techStack: ["Next.js", "Node.js", "Supabase", "Stripe", "AWS"],
    differentiators: [
      {
        title: "Speed without the debt",
        body: "We shipped a multi-tenant SaaS MVP in 11 weeks — fast, but on architecture that scaled past launch.",
      },
      {
        title: "Founder-friendly",
        body: "Plain-language updates, fixed-scope options, and a focus on what proves the idea.",
      },
      {
        title: "Investable output",
        body: "A polished, working product you can put in front of users and investors.",
      },
    ],
    caseStudySlug: "saas-mvp-11-weeks",
    faqs: [
      {
        q: "How fast can you build an MVP?",
        a: "Most focused MVPs ship in 6–12 weeks. We delivered a multi-tenant SaaS MVP — with auth, billing, and a dashboard — in 11 weeks.",
      },
      {
        q: "Will my MVP be throwaway code?",
        a: "No. We scope tightly but build on robust architecture, so the MVP becomes the foundation for v2 instead of a rewrite.",
      },
      {
        q: "How much does an MVP cost?",
        a: "It depends on scope, but most startup MVPs start in the low five figures (USD). We give a fixed estimate after a free discovery call.",
      },
    ],
  },
  {
    slug: "api-backend-development",
    navLabel: "API & Backend",
    title: "API & Backend Development Services",
    keyword: "api and backend development services",
    metaTitle: "API & Backend Development | Node.js, Python, PHP | CodeBaxh",
    metaDescription:
      "Scalable APIs and backends with Node.js, NestJS, Python/FastAPI, PHP/Laravel, and Strapi — across PostgreSQL, MySQL, MongoDB, and Supabase. CodeBaxh builds secure, well-documented backends. Book a free discovery call.",
    eyebrow: "API & Backend",
    summary:
      "Secure, scalable APIs and backends in Node.js, Python, or PHP — your stack, your database.",
    heroSubhead:
      "We build the APIs, data models, and backend services your product runs on — in Node.js, Python/FastAPI, or PHP/Laravel — secure, documented, and ready to scale.",
    problem:
      "A shaky backend caps everything above it: slow APIs, fragile data models, and no documentation slow every team that touches them. You need a backend built to last, in the language and database that fit your project.",
    deliverables: [
      "REST and GraphQL APIs (Node.js, Python/FastAPI, PHP/Laravel)",
      "Headless CMS setup and integration (Strapi)",
      "Database design (PostgreSQL, MySQL, MongoDB, Supabase, Redis)",
      "Authentication, authorization, and security",
      "Third-party and internal integrations",
      "Background jobs, queues, webhooks, and API docs",
    ],
    techStack: ["Node.js", "NestJS", "Python", "FastAPI", "PHP", "Laravel", "Strapi", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Docker"],
    differentiators: [
      {
        title: "Designed to scale",
        body: "Data models and APIs architected for growth, not just the first feature.",
      },
      {
        title: "Secure by default",
        body: "Auth, validation, rate limiting, and least-privilege access built in.",
      },
      {
        title: "Documented and tested",
        body: "Clear API docs and test coverage so your team can build on it confidently.",
      },
    ],
    faqs: [
      {
        q: "REST or GraphQL — which do you build?",
        a: "Both. We pick based on your clients and data needs: REST for simple, cacheable APIs; GraphQL when clients need flexible, typed queries. We can also build hybrid setups.",
      },
      {
        q: "Do you only work in Node.js, or also Python and PHP?",
        a: "All three. We build backends in Node.js/NestJS, Python/FastAPI, and PHP/Laravel, and set up headless CMS with Strapi — we pick the stack that fits your project and team, not a one-size-fits-all.",
      },
      {
        q: "Which database should I use?",
        a: "PostgreSQL or MySQL for relational data; MongoDB for flexible documents; Redis for caching and queues; Supabase when you want Postgres plus auth and realtime out of the box. We advise based on your data.",
      },
      {
        q: "Can you build an API for our existing frontend or mobile app?",
        a: "Yes. We frequently build or rebuild the backend and API layer for an existing web or mobile frontend.",
      },
    ],
  },
  {
    slug: "ai-chatbot-development",
    navLabel: "AI Chatbots",
    title: "AI Chatbot Development Services",
    keyword: "ai chatbot development services",
    metaTitle: "AI Chatbot Development | Custom RAG Chatbots | CodeBaxh",
    metaDescription:
      "Custom AI chatbots grounded in your data with RAG — support, sales, and internal assistants using OpenAI and Anthropic. CodeBaxh ships chatbots. Book a call.",
    eyebrow: "AI Chatbots",
    summary:
      "Custom AI chatbots grounded in your data — accurate, on-brand, and launch-ready.",
    heroSubhead:
      "We build AI chatbots that actually know your business — grounded in your content with RAG, not generic and hallucinating.",
    problem:
      "Generic chatbots make things up and frustrate users. You want an assistant grounded in your real content — accurate, on-brand, and safe to put in front of customers.",
    deliverables: [
      "Custom chatbots grounded in your data (RAG)",
      "Support, sales, and internal-assistant bots",
      "Website, app, Slack, and WhatsApp channels",
      "Human handoff and escalation",
      "Analytics, guardrails, and content controls",
      "Ongoing tuning and evaluation",
    ],
    techStack: ["OpenAI", "Anthropic", "Next.js", "Node.js", "Supabase"],
    differentiators: [
      {
        title: "Grounded in your data",
        body: "RAG keeps answers accurate and sourced from your real content, not the open internet.",
      },
      {
        title: "Safe and on-brand",
        body: "Guardrails, tone control, and escalation to humans when it matters.",
      },
      {
        title: "Measured quality",
        body: "Evaluation and analytics so you can see and improve answer quality over time.",
      },
    ],
    caseStudySlug: "legal-contract-ai",
    faqs: [
      {
        q: "How do you stop the chatbot from hallucinating?",
        a: "We ground it in your own content using RAG, add guardrails and fallbacks, and evaluate answers — so it answers from your data or says it doesn't know, rather than inventing.",
      },
      {
        q: "Where can the chatbot live?",
        a: "On your website or app, and in channels like Slack, WhatsApp, or Intercom. We build for the channels your users already use.",
      },
      {
        q: "Can it hand off to a human?",
        a: "Yes. We build escalation paths so the bot hands complex or sensitive conversations to your team smoothly.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

/**
 * Curated display order for the services grid + hub. Leads with the broadest,
 * most representative services (SaaS, AI, web, mobile, backend, cloud); the
 * Next.js page stays for SEO but sits lower so it isn't over-emphasized.
 */
const SERVICE_ORDER = [
  "saas-development",
  "ai-integration",
  "web-development",
  "mobile-app-development",
  "api-backend-development",
  "cloud-devops",
  "nextjs-development",
  "stripe-integration",
  "mvp-development",
  "ai-chatbot-development",
];

export const ORDERED_SERVICES: Service[] = SERVICE_ORDER.map((slug) =>
  SERVICES.find((s) => s.slug === slug),
).filter((s): s is Service => Boolean(s));
