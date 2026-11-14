import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "saas-development",
    name: "SaaS Development",
    metaTitle: "SaaS Development Company | Multi-Tenant SaaS",
    category: "core",
    icon: "layers",
    summary:
      "Multi-tenant SaaS with auth, billing and dashboards, on an architecture that carries you from MVP to scale.",
    metaDescription:
      "SaaS development from CodeBaxh: multi-tenant architecture, authentication, subscription billing and dashboards, built so your product grows without a rewrite.",
    headline: "SaaS development for products that have to hold real customers",
    problem: [
      "Most SaaS ideas stall between prototype and production. The screens are the easy part. Tenant isolation, permissions, billing and reliability are where products go wrong.",
      "Early architecture choices are hard to undo. A data model that ignores tenancy, or billing bolted on at the end, turns into expensive technical debt once paying customers arrive.",
      "You need a team that has shipped SaaS before and designs the foundation properly from the first sprint.",
    ],
    approach: [
      {
        title: "Scope the product",
        body: "We map the smallest product that proves the core value, along with the tenancy and billing model it needs.",
      },
      {
        title: "Design the foundation",
        body: "The multi-tenant data model, authentication, roles and billing are designed before we write production code.",
      },
      {
        title: "Build in weekly loops",
        body: "You see working software every week and steer features as the product comes together.",
      },
      {
        title: "Launch and keep going",
        body: "We ship with CI/CD and monitoring in place, hand over documented code, and stay on to iterate if you want us to.",
      },
    ],
    deliverables: [
      "Multi-tenant architecture with secure tenant isolation",
      "Authentication, roles and permissions",
      "Subscription and usage-based billing with Stripe",
      "Admin and customer dashboards",
      "Onboarding flows and in-app analytics",
      "Background jobs and notifications",
      "CI/CD, monitoring and production observability",
      "Type-safe, documented code your team can own",
    ],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Supabase", "Stripe", "AWS"],
    relatedCaseStudies: ["gis-zoning-saas", "multi-tenant-saas-mvp", "omnichannel-messaging-saas"],
    faqs: [
      {
        q: "How long does it take to build a SaaS product?",
        a: "It depends on scope, so we give a timeline after discovery rather than a generic range.",
      },
      {
        q: "How much does SaaS development cost?",
        a: "Pricing is scoped after discovery. Once we understand the product, the tenancy model and the integrations, you get a written estimate with clear assumptions.",
      },
      {
        q: "Can you build multi-tenant architecture?",
        a: "Yes. Tenant isolation, per-tenant data, role-based access and subscription billing are core to how we build SaaS. We design tenancy in from the start instead of retrofitting it.",
      },
      {
        q: "Do you handle subscriptions and billing?",
        a: "Yes. We implement subscriptions, usage-based billing, webhooks, proration and the edge cases that tend to break in production. Our Stripe integration service covers this in more detail.",
      },
      {
        q: "Can you take over a SaaS product that already exists?",
        a: "Yes. We start with an audit of the code, data model and infrastructure, tell you plainly what we found, then stabilise and extend it.",
      },
    ],
  },
  {
    slug: "mvp-development",
    name: "MVP Development",
    metaTitle: "MVP Development for Startups | Launch in Weeks",
    category: "core",
    icon: "rocket",
    summary: "A tightly scoped first version in front of real users in weeks, built so v2 is not a rewrite.",
    metaDescription:
      "MVP development from CodeBaxh: a tightly scoped first version with auth, payments and analytics, launched quickly and built so version two is not a rewrite.",
    headline: "MVP development that gets you to real users without throwaway code",
    problem: [
      "Founders need to validate quickly. MVPs fail in two opposite ways: rushed ones become impossible to fix, and over-built ones never ship.",
      "The answer is the smallest product that proves the idea, built on a foundation you can keep building on. That takes discipline in scoping as much as skill in engineering.",
    ],
    approach: [
      {
        title: "Scope hard",
        body: "We define the smallest product that proves the core value and write down what is deliberately left out.",
      },
      {
        title: "Build the core",
        body: "The main feature, a clean interface, and the essentials you need to launch: sign-in, payments and basic admin.",
      },
      {
        title: "Demo every week",
        body: "Short loops with plain-language updates, so you can change direction before it gets expensive.",
      },
      {
        title: "Launch and measure",
        body: "We deploy with monitoring and analytics so you can see whether the idea is working, and leave you with a roadmap for what comes next.",
      },
    ],
    deliverables: [
      "A written scope for the smallest viable product",
      "Core feature build with a clean, usable interface",
      "Authentication, payments and the essentials to launch",
      "Production deployment with monitoring",
      "Analytics to measure validation",
      "A roadmap and architecture notes for version two",
    ],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "Supabase", "PostgreSQL", "Stripe", "AWS"],
    relatedCaseStudies: ["multi-tenant-saas-mvp", "prowire-marketplace"],
    faqs: [
      {
        q: "How fast can you build an MVP?",
        a: "It depends on how tightly we can scope it, and we confirm a timeline after discovery.",
      },
      {
        q: "Will the MVP be throwaway code?",
        a: "No. We keep the scope small but build on a sound architecture, so the MVP becomes the base for version two.",
      },
      {
        q: "How much does an MVP cost?",
        a: "Pricing is scoped after discovery. We agree what is in and out of the first version, then give you a written estimate against that scope.",
      },
      {
        q: "What if I only have an idea and no specification?",
        a: "That is a normal starting point. Our product and design teams work with you to turn the idea into user flows and a scope before engineering begins.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The repository, the infrastructure accounts and the documentation are handed over to you.",
      },
    ],
  },
  {
    slug: "web-development",
    name: "Web Development",
    metaTitle: "Web Development Company | Next.js & React",
    category: "core",
    icon: "globe",
    summary: "Custom full-stack web applications in TypeScript, React and Node.js.",
    metaDescription:
      "Custom web development from CodeBaxh: full-stack applications and fast sites in TypeScript, React and Node.js, tested, accessible and easy to maintain.",
    headline: "Custom web applications, built full-stack by one team",
    problem: [
      "Off-the-shelf tools stop fitting once your product is properly your own. Slow, brittle builds then cost you conversions and trust.",
      "Splitting front end and back end between different suppliers leaves gaps that nobody owns. Bugs sit in those gaps.",
      "You need a web application that is fast, maintainable and built by a single team that owns it from the interface to the infrastructure.",
    ],
    approach: [
      {
        title: "Discovery",
        body: "We map the outcome, the users and the constraints before proposing a solution.",
      },
      {
        title: "Design and architecture",
        body: "We shape the user experience, the data model and the system architecture before production code is written.",
      },
      {
        title: "Build in short loops",
        body: "Weekly demos of working software, with QA running alongside development.",
      },
      {
        title: "Deploy and support",
        body: "CI/CD, performance budgets, monitoring and a clean handover.",
      },
    ],
    deliverables: [
      "Custom web applications and platforms",
      "High-performance marketing and product sites",
      "Design systems and component libraries",
      "API and backend integration",
      "Core Web Vitals performance work",
      "Accessibility to WCAG guidelines and search-ready architecture",
      "Tests and documentation",
    ],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "MongoDB", "AWS", "Vercel"],
    relatedCaseStudies: ["redeemx-admin-dashboard", "fika-wall-art-ecommerce", "home-equity-fintech-saas"],
    faqs: [
      {
        q: "What stack do you use for web development?",
        a: "Next.js and React with TypeScript on the front end. Node.js and NestJS on the back end. PostgreSQL, MongoDB or Supabase for data, deployed on AWS or Vercel. We choose what fits the project.",
      },
      {
        q: "Do you build both the front end and the back end?",
        a: "Yes. We have dedicated design, engineering, QA and DevOps teams, so the interface, APIs, database, infrastructure and deployment are handled in one place.",
      },
      {
        q: "Can you take over an existing codebase?",
        a: "Yes. We audit, stabilise and extend existing React, Next.js and Node.js codebases as well as building new ones.",
      },
      {
        q: "How do you keep the site fast?",
        a: "We set performance budgets at the start and measure Core Web Vitals through the build. Fast loads, low input delay and stable layout are treated as requirements.",
      },
      {
        q: "How is pricing worked out?",
        a: "Pricing is scoped after discovery. You get a written estimate based on the agreed scope.",
      },
    ],
  },
  {
    slug: "nextjs-development",
    name: "Next.js Development",
    metaTitle: "Next.js Development Agency | App Router & SSR",
    category: "core",
    icon: "zap",
    summary: "Fast, search-friendly Next.js builds, migrations and performance work.",
    metaDescription:
      "Next.js development from CodeBaxh: App Router builds, migrations and performance work with the right rendering per route, strong SEO and good Core Web Vitals.",
    headline: "Next.js development by a team that uses the framework every day",
    problem: [
      "Next.js is powerful and easy to misuse. Rendering everything on the client hurts search visibility. Data waterfalls hurt performance. The App Router has a real learning curve.",
      "Many teams adopt the framework and get few of the benefits. Pages are slow, metadata is patchy and nobody is sure which rendering mode each route uses.",
    ],
    approach: [
      {
        title: "Audit and strategy",
        body: "We review rendering, data flow and SEO, then choose the right strategy for each route.",
      },
      {
        title: "Architecture",
        body: "App Router structure, Server Components, and the metadata and SEO foundations.",
      },
      {
        title: "Build in short loops",
        body: "Weekly demos, with performance tracked as we go and not left to the end.",
      },
      {
        title: "Ship and measure",
        body: "We deploy with structured data and monitoring, and check Core Web Vitals on real traffic.",
      },
    ],
    deliverables: [
      "Next.js App Router architecture",
      "Server Components and streaming",
      "A rendering strategy per route: static, incremental or server-rendered",
      "Metadata, sitemaps and structured data for search",
      "Core Web Vitals optimisation",
      "Migration from the Pages Router or other frameworks",
    ],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "Vercel", "AWS"],
    relatedCaseStudies: ["snippetz-code-learning", "redeemx-admin-dashboard"],
    faqs: [
      {
        q: "Should we use SSR, SSG or ISR?",
        a: "Use static generation or incremental regeneration for marketing and content pages, so they are fast and fully crawlable. Use server rendering only where data must be fresh on each request. We decide route by route.",
      },
      {
        q: "Can you migrate our app to the App Router?",
        a: "Yes. We migrate from the Pages Router and from other frameworks in increments, so the app stays shippable throughout.",
      },
      {
        q: "Is Next.js good for SEO?",
        a: "Yes, when it is used correctly. Server-rendered HTML, the Metadata API, generated sitemaps and structured data make pages easy for search engines and AI search tools to read.",
      },
      {
        q: "Do we have to host on Vercel?",
        a: "No. Vercel is a good default, but we also deploy Next.js to AWS with CI/CD, environment management and monitoring.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile Apps",
    metaTitle: "React Native App Development | iOS & Android",
    category: "core",
    icon: "smartphone",
    summary: "iOS and Android apps from one React Native codebase.",
    metaDescription:
      "Mobile app development from CodeBaxh: iOS and Android apps from one React Native codebase, with the backend, store submission and updates handled by one team.",
    headline: "iOS and Android apps from a single React Native codebase",
    problem: [
      "Building separate native apps for iOS and Android means two codebases and two teams to coordinate. Costs rise and releases slow down.",
      "A mobile product is also more than the app. It needs a backend, APIs, authentication, push notifications, offline behaviour and a route through store review.",
      "You want one team that builds the app and the services behind it together.",
    ],
    approach: [
      {
        title: "Discovery",
        body: "We map the app, the platforms and the backend it depends on.",
      },
      {
        title: "Design and architecture",
        body: "Shared interface, navigation and API design across iOS and Android.",
      },
      {
        title: "Build in short loops",
        body: "Weekly builds on real devices, so you can feel the app as it grows.",
      },
      {
        title: "Ship to both stores",
        body: "We handle store submission, over-the-air updates and crash monitoring after launch.",
      },
    ],
    deliverables: [
      "Cross-platform iOS and Android apps in React Native",
      "Native modules and device integrations where needed",
      "Offline support and push notifications",
      "API and backend integration",
      "App Store and Google Play submission",
      "Over-the-air updates and crash monitoring",
    ],
    tech: ["React Native", "TypeScript", "Node.js", "NestJS", "Supabase", "AWS"],
    relatedCaseStudies: ["mydasma-wedding-platform", "transit-rewards-app"],
    faqs: [
      {
        q: "Why React Native and not fully native apps?",
        a: "React Native ships to iOS and Android from one codebase, which is quicker to build and simpler to maintain than two native apps. It still feels native to users, and we write native modules when a feature needs them.",
      },
      {
        q: "Do you handle App Store and Google Play submission?",
        a: "Yes. We manage builds, store listings, review requirements and submission for both stores.",
      },
      {
        q: "Can you build the backend as well?",
        a: "Yes. We build the APIs, authentication and infrastructure the app depends on alongside the app itself.",
      },
      {
        q: "Can the app share code with our web app?",
        a: "Often, yes. With a React web app, types, API clients and business logic can be shared. We check what is worth sharing during discovery.",
      },
      {
        q: "What happens after launch?",
        a: "We monitor crashes, release fixes over the air where the stores allow it, and can stay on for new features.",
      },
    ],
  },
  {
    slug: "api-backend-development",
    name: "API & Backend",
    metaTitle: "API & Backend Development | Node.js & Python",
    category: "core",
    icon: "server",
    summary: "Secure, documented APIs and backends in Node.js, Python or PHP.",
    metaDescription:
      "API & backend development from CodeBaxh: secure, documented REST and GraphQL APIs in Node.js, Python or PHP, with data models designed to grow with you.",
    headline: "APIs and backends your whole product can rely on",
    problem: [
      "A weak backend limits everything built on top of it. Slow APIs, fragile data models and missing documentation slow down every team that touches them.",
      "Backends written only to clear the first feature rarely cope with the second. Security, validation and rate limiting get added late, if at all.",
    ],
    approach: [
      {
        title: "Discovery",
        body: "We map the domain, the data and the clients your API has to serve.",
      },
      {
        title: "Design",
        body: "Data model, API contracts and the right database for your data, agreed before the build.",
      },
      {
        title: "Build and test",
        body: "Secure endpoints with validation, automated tests and clear documentation.",
      },
      {
        title: "Ship and support",
        body: "We deploy with monitoring, then extend the backend as your product grows.",
      },
    ],
    deliverables: [
      "REST and GraphQL APIs in Node.js, Python or PHP",
      "Database design and migrations",
      "Authentication, authorisation and security controls",
      "Third-party and internal integrations",
      "Background jobs, queues and webhooks",
      "Headless CMS setup with Strapi",
      "API documentation and automated tests",
    ],
    tech: [
      "Node.js",
      "NestJS",
      "Python",
      "FastAPI",
      "PHP",
      "Laravel",
      "Strapi",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Docker",
    ],
    relatedCaseStudies: ["landlord-academy-lms", "chattin-realtime-chat", "omnichannel-messaging-saas"],
    faqs: [
      {
        q: "Do you build REST or GraphQL?",
        a: "Both. REST suits simple, cacheable APIs. GraphQL suits clients that need flexible, typed queries. We choose based on your clients and data, and can build a mix.",
      },
      {
        q: "Do you only work in Node.js?",
        a: "No. We build backends in Node.js with NestJS, Python with FastAPI, and PHP with Laravel. We pick the stack that fits your project and your team.",
      },
      {
        q: "Which database should we use?",
        a: "PostgreSQL or MySQL for relational data. MongoDB for flexible documents. Redis for caching and queues. Supabase when you want Postgres with auth and realtime included. We advise based on your data.",
      },
      {
        q: "Can you build an API for our existing front end or mobile app?",
        a: "Yes. We often build or rebuild the backend and API layer behind an existing web or mobile front end.",
      },
      {
        q: "How do you handle security?",
        a: "Authentication, input validation, rate limiting and least-privilege access are built in from the start. Secrets stay out of the codebase and access is logged.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    metaTitle: "Cloud & DevOps Services | AWS, Azure & CI/CD",
    category: "core",
    icon: "cloud",
    summary: "CI/CD, infrastructure and monitoring on AWS and Azure.",
    metaDescription:
      "Cloud & DevOps from CodeBaxh: CI/CD pipelines, infrastructure as code, containers and monitoring on AWS and Azure, so releases are routine and costs are clear.",
    headline: "Cloud infrastructure and pipelines that make releases routine",
    problem: [
      "Every deploy is manual and slightly nerve-racking. You find out something is down when a customer tells you. The cloud bill keeps growing and nobody is sure why.",
      "These are signs of infrastructure that has not kept up with the product. They get worse as usage grows.",
    ],
    approach: [
      {
        title: "Assess",
        body: "We review your current infrastructure, deployment process and cost profile.",
      },
      {
        title: "Design",
        body: "A cloud architecture and infrastructure-as-code plan on AWS or Azure, sized for your stage.",
      },
      {
        title: "Implement",
        body: "CI/CD, containers, monitoring, alerting and security hardening.",
      },
      {
        title: "Operate",
        body: "An optional ongoing engagement for scaling, incident response and continuous improvement.",
      },
    ],
    deliverables: [
      "Cloud architecture on AWS or Azure",
      "CI/CD pipelines and automated deployments",
      "Infrastructure as code with Terraform or CDK",
      "Containerisation with Docker and orchestration",
      "Monitoring, logging and alerting",
      "Cost review and security hardening",
      "Runbooks and documentation for your team",
    ],
    tech: ["AWS", "Azure", "Docker", "Terraform", "AWS CDK", "GitHub Actions", "Vercel"],
    relatedCaseStudies: ["home-equity-fintech-saas", "omnichannel-messaging-saas"],
    faqs: [
      {
        q: "Should we use AWS or Azure?",
        a: "Both are good. The right choice depends on your team's skills, your existing ecosystem and the specific services you need. We help you decide in discovery, then design for it.",
      },
      {
        q: "Can you deploy our Next.js app to AWS?",
        a: "Yes. We deploy Next.js to AWS and to Vercel, with CI/CD, environment management, monitoring and cost controls.",
      },
      {
        q: "Do you offer ongoing DevOps support?",
        a: "Yes. Our DevOps team can stay on for monitoring, scaling, incident response and steady improvement of your infrastructure.",
      },
      {
        q: "Can you reduce our cloud bill?",
        a: "Usually there is waste to remove: oversized instances, idle resources, missing lifecycle rules. We review the bill, show you where the money goes and fix what is safe to fix. We do not promise a figure before we have looked.",
      },
    ],
  },
  {
    slug: "payment-gateway-integration",
    name: "Payment Gateway Integration",
    metaTitle: "Payment Gateway Integration | Stripe & Billing",
    category: "core",
    icon: "card",
    summary: "Stripe, PayPal and regional payment gateways integrated for checkout, subscriptions and invoicing.",
    metaDescription:
      "Payment gateway integration from CodeBaxh: Stripe, PayPal and regional providers for checkout, subscriptions and invoicing, with dependable webhooks.",
    headline: "Payments and billing that stay correct when things go wrong",
    problem: [
      "Payments are unforgiving. Missed webhooks, proration bugs and poor handling of failed payments lose revenue quietly.",
      "The checkout page is rarely what breaks in production. The trouble is in duplicate events, retries and keeping your database in step with the payment provider.",
      "You need billing that is correct, tested and reconciled, not only wired to the happy path.",
    ],
    approach: [
      {
        title: "Model the billing",
        body: "We map your plans, pricing, trials and edge cases before writing code.",
      },
      {
        title: "Integrate",
        body: "Checkout, Billing and the Customer Portal wired into your product.",
      },
      {
        title: "Harden the webhooks",
        body: "Idempotent handlers, signature verification and reconciliation against the gateway as the source of truth.",
      },
      {
        title: "Recover and report",
        body: "Failed-payment recovery, invoicing and revenue reporting.",
      },
    ],
    deliverables: [
      "Subscription and usage-based billing",
      "Stripe Checkout, Billing and Customer Portal",
      "Dependable webhook handling and reconciliation",
      "Proration, upgrades, downgrades and trials",
      "Failed-payment recovery and dunning",
      "Tax, invoicing and reporting integration",
      "Test coverage for the billing edge cases",
    ],
    tech: ["Stripe", "Next.js", "Node.js", "NestJS", "PostgreSQL"],
    relatedCaseStudies: ["gis-zoning-saas", "multi-tenant-saas-mvp"],
    faqs: [
      {
        q: "Can you set up subscription billing with Stripe?",
        a: "Yes. Plans, trials, upgrades and downgrades with proration, the Customer Portal and usage-based billing, all backed by dependable webhook handling.",
      },
      {
        q: "How do you handle webhooks reliably?",
        a: "With idempotent handlers, signature verification, retries and reconciliation against Stripe. A dropped or duplicated event should never corrupt your billing state.",
      },
      {
        q: "Do you handle failed payments and dunning?",
        a: "Yes. We implement retries, dunning emails and grace-period logic to recover failed payments and reduce involuntary churn.",
      },
      {
        q: "Can you fix a Stripe integration someone else built?",
        a: "Yes. We audit the current integration, compare your records with Stripe, and fix the gaps in order of risk.",
      },
      {
        q: "Do you work with payment providers other than Stripe?",
        a: "Stripe is where most of our billing work sits. If another provider suits your market or business model better, we will say so during discovery.",
      },
    ],
  },
  {
    slug: "ai-strategy-consulting",
    name: "AI Strategy & Consulting",
    metaTitle: "AI Strategy Consulting | Use Cases & Roadmaps",
    category: "ai",
    icon: "compass",
    summary: "Find where AI pays for itself in your product, and what to leave alone.",
    metaDescription:
      "AI strategy & consulting from CodeBaxh: find where AI earns its place in your product, test feasibility on your own data, and leave with a plan you can build.",
    headline: "AI strategy that starts with your product, not the technology",
    problem: [
      "Every team is under pressure to add AI. Few are sure where it would help, what it would cost to run, or how to tell if it is working.",
      "Starting from the technology leads to features nobody asked for. Starting from a real task, with real data, shows quickly what is worth building.",
      "Some problems are better solved without a model at all. You need advice from engineers who will tell you that.",
    ],
    approach: [
      {
        title: "Understand the work",
        body: "We look at your product, your users and the tasks that take the most time or cause the most errors.",
      },
      {
        title: "Shortlist the use cases",
        body: "Each candidate is assessed for value, feasibility, data readiness and risk. We say clearly which ones to drop.",
      },
      {
        title: "Test on your data",
        body: "For the strongest candidates we run a small feasibility test on real examples, so the plan rests on evidence.",
      },
      {
        title: "Write the plan",
        body: "You get a prioritised roadmap with architecture, running-cost drivers and a definition of good enough for each feature.",
      },
    ],
    deliverables: [
      "A review of your product, data and current workflows",
      "A ranked list of AI use cases with reasons for and against",
      "Feasibility findings from tests on your own data",
      "Recommended architecture and model choices",
      "Running-cost drivers and how to control them",
      "A risk and data-handling assessment",
      "A phased roadmap your team or ours can build from",
    ],
    tech: ["OpenAI", "Anthropic", "Google Gemini", "Open-source models", "Python", "PostgreSQL"],
    relatedCaseStudies: ["ai-business-consultant-chatbot", "legal-contract-ai"],
    faqs: [
      {
        q: "Do we need a strategy before building an AI feature?",
        a: "Not always. If the use case is clear and small, we would rather build a prototype. Strategy work pays off when there are several options, the data is messy, or the feature carries real risk.",
      },
      {
        q: "Will you tell us if AI is the wrong answer?",
        a: "Yes. Some tasks are better served by search, rules or a simpler workflow. Saying so early is part of the job.",
      },
      {
        q: "Should we fine-tune a model, use RAG or stick to prompts?",
        a: "Start with good prompts. Add retrieval when the model needs your facts. Consider fine-tuning only when tone or format still falls short. Most products never need the third step.",
      },
      {
        q: "Which model provider should we choose?",
        a: "We choose per task and design the system so the model can be swapped. Tying a product to one provider is the mistake to avoid.",
      },
      {
        q: "Do we have to build with you afterwards?",
        a: "No. The roadmap is written so your own engineers can build from it. Many clients do ask our AI and engineering teams to carry on.",
      },
    ],
  },
  {
    slug: "ai-integration",
    name: "AI Integration",
    metaTitle: "AI Integration Services | RAG & LLM Features",
    category: "ai",
    icon: "plug",
    summary: "LLM features added to the product you already run, without a rebuild.",
    metaDescription:
      "AI integration from CodeBaxh: search, summarisation, extraction and chat features added to your existing product, with evaluation and cost control built in.",
    headline: "AI features added to the product you already run",
    problem: [
      "AI demos are easy. Production is hard. Hallucinations, fragile prompts, rising token costs and no way of measuring quality are why many AI features never ship.",
      "Your product already has users, data and a codebase. You want AI added to it carefully, not a rebuild around a model.",
    ],
    approach: [
      {
        title: "Discovery and feasibility",
        body: "We test the use case against your data and agree what good enough means.",
      },
      {
        title: "Data and retrieval design",
        body: "We shape ingestion, chunking, embeddings and retrieval before touching a prompt.",
      },
      {
        title: "Build and evaluate",
        body: "The feature is built alongside an evaluation set, so quality is measured from the first version.",
      },
      {
        title: "Ship and monitor",
        body: "We deploy with guardrails, fallbacks, and visibility of cost and latency.",
      },
    ],
    deliverables: [
      "LLM features such as search, summarisation, extraction and chat",
      "Retrieval pipelines grounded in your documents and data",
      "Vector search and embeddings infrastructure",
      "Prompts, evaluation sets and guardrails",
      "Fallback behaviour for model errors and outages",
      "Cost and latency monitoring",
      "Integration into your existing codebase and release process",
    ],
    tech: ["OpenAI", "Anthropic", "Python", "FastAPI", "Next.js", "Node.js", "PostgreSQL", "pgvector", "Supabase", "AWS"],
    relatedCaseStudies: ["legal-contract-ai", "ai-call-analysis"],
    faqs: [
      {
        q: "Can you add AI to our existing product?",
        a: "Yes. Most of our AI work goes into an existing codebase. We add search, chat, extraction or agent workflows without a rewrite.",
      },
      {
        q: "Which AI models do you work with?",
        a: "We build with OpenAI and Anthropic models and choose per task to balance quality, speed and cost. We also work with open-source models when self-hosting matters.",
      },
      {
        q: "How do you keep answers accurate?",
        a: "We ground the model in your data, ask it to cite sources, and let it say when it does not know. An evaluation set then measures accuracy on real questions before and after each change.",
      },
      {
        q: "How do you control running costs?",
        a: "Through model selection, caching, shorter prompts, retrieval tuning and monitoring of token spend. Costs should stay predictable as usage grows.",
      },
      {
        q: "Is our data used to train public models?",
        a: "No. We use the providers' API services, which by default do not train on API data, and keep your indexed content in infrastructure you own or control. Retention and hosting region are agreed before the build.",
      },
    ],
  },
  {
    slug: "rag-knowledge-assistants",
    name: "RAG & Knowledge Assistants",
    metaTitle: "RAG Development Services | Knowledge Assistants",
    category: "ai",
    icon: "book",
    summary: "Assistants that answer from your documents and cite their sources.",
    metaDescription:
      "RAG & knowledge assistants from CodeBaxh: retrieval pipelines that answer from your documents, cite their sources and say when the answer is not there.",
    headline: "Knowledge assistants that answer from your documents and show their sources",
    problem: [
      "Your knowledge sits in contracts, policies, manuals, wikis and old tickets. People cannot find what they need, so they ask a colleague or guess.",
      "A general-purpose model does not know your documents and will fill the gap with something plausible. That is not acceptable for legal, financial or operational questions.",
      "Retrieval-augmented generation fixes this by looking up the relevant passages first and answering only from them. The quality depends almost entirely on how well the retrieval is built.",
    ],
    approach: [
      {
        title: "Audit the content",
        body: "We review what you have, where it lives, how it is structured and who is allowed to see it.",
      },
      {
        title: "Build ingestion and retrieval",
        body: "Parsing, chunking, embeddings and search are tuned to your documents, including long files, tables and scans.",
      },
      {
        title: "Ground the answers",
        body: "The assistant answers from retrieved passages, cites them, and declines when the sources do not cover the question.",
      },
      {
        title: "Evaluate and launch",
        body: "We score retrieval and answer quality on a set of real questions, then launch with monitoring and a way to refresh the index.",
      },
    ],
    deliverables: [
      "Ingestion pipeline for documents, PDFs, wikis and tickets",
      "Vector and keyword search tuned to your content",
      "An assistant that cites the passages behind each answer",
      "Permission-aware retrieval, so users see only what they may access",
      "An evaluation set for retrieval and answer accuracy",
      "Re-indexing so new and changed documents are picked up",
      "Usage analytics and a log of unanswered questions",
    ],
    tech: ["OpenAI", "Anthropic", "Google Gemini", "Python", "FastAPI", "PostgreSQL", "pgvector", "Supabase", "Next.js"],
    relatedCaseStudies: ["legal-contract-ai", "ai-business-consultant-chatbot"],
    faqs: [
      {
        q: "What is RAG?",
        a: "Retrieval-augmented generation. Relevant passages are fetched from your own content and passed to the model, so the answer is based on your documents and can cite them.",
      },
      {
        q: "Do you train a model on our documents?",
        a: "No. The content is indexed and looked up at question time. There is no training run, and updating the assistant means re-indexing content, not retraining.",
      },
      {
        q: "Can it handle very long documents?",
        a: "Yes. Long contracts and reports are split into structured sections and retrieved in pieces. We have built a multi-agent pipeline for long legal contracts on this pattern.",
      },
      {
        q: "Can it get things wrong?",
        a: "Yes. No system removes errors completely. Grounding, citations and refusal behaviour reduce them, and the evaluation set tells you how often they happen. Citations let users check any answer.",
      },
      {
        q: "Can we control who sees which documents?",
        a: "Yes. Retrieval respects your existing permissions, so an answer is only built from content that user is allowed to read.",
      },
    ],
  },
  {
    slug: "ai-chatbot-development",
    name: "AI Chatbots",
    metaTitle: "AI Chatbot Development | Custom RAG Chatbots",
    category: "ai",
    icon: "message",
    summary: "Support and sales chatbots grounded in your content, with human handover.",
    metaDescription:
      "AI chatbot development from CodeBaxh: support and sales assistants grounded in your own content, with guardrails, analytics and handover to your team.",
    headline: "AI chatbots that know your business and know when to hand over",
    problem: [
      "Generic chatbots make things up and frustrate users. Putting one in front of customers is a risk to your reputation.",
      "A chatbot is only as good as its grounding and its guardrails. It should answer from your real content, stay in scope, and pass the conversation to a person when it matters.",
    ],
    approach: [
      {
        title: "Discovery",
        body: "We map the use case, the content to ground on and the channels your users already use.",
      },
      {
        title: "Ground and design",
        body: "We ingest your content into a retrieval layer and design the conversation, tone and escalation rules.",
      },
      {
        title: "Build and evaluate",
        body: "We build the bot with guardrails and test answer quality on real questions before launch.",
      },
      {
        title: "Launch and tune",
        body: "We deploy to your channels with analytics, then tune the answers that score badly.",
      },
    ],
    deliverables: [
      "A custom chatbot grounded in your documents, help centre and past tickets",
      "Support, sales or internal-assistant conversation design",
      "Website, app, Slack and WhatsApp channels",
      "Handover to your team with the full conversation",
      "Refusal behaviour for out-of-scope and sensitive questions",
      "An evaluation set that measures answer accuracy before launch",
      "Analytics and content controls",
      "Answers in more than one language where you need them",
    ],
    tech: ["OpenAI", "Anthropic", "Next.js", "Node.js", "Python", "Supabase", "pgvector"],
    relatedCaseStudies: ["ai-business-consultant-chatbot", "legal-contract-ai"],
    faqs: [
      {
        q: "How do you stop the chatbot from making things up?",
        a: "We ground it in your own content, add guardrails and fallbacks, and evaluate its answers. It answers from your data or says it does not know.",
      },
      {
        q: "Where can the chatbot live?",
        a: "On your website or in your app, and in channels such as Slack, WhatsApp or Intercom. We build for the channels your users already use.",
      },
      {
        q: "Can it hand over to a person?",
        a: "Yes. We build escalation paths so complex or sensitive conversations reach your team with the full context.",
      },
      {
        q: "Should we build a custom chatbot or use an off-the-shelf tool?",
        a: "If your volume is low and your needs are standard, an off-the-shelf tool or a well-organised help centre is often the better choice. Custom is worth it when integrations or answer quality outgrow a template product. We will tell you which side of that line you are on.",
      },
      {
        q: "Who maintains the chatbot after launch?",
        a: "You can, or we can. We hand over a documented pipeline so your team can re-index content and adjust prompts. Many clients keep us on to review unanswered questions and tune weak answers.",
      },
      {
        q: "How much does a chatbot cost?",
        a: "Pricing is scoped after discovery. The same chat window can sit on a single help centre or on several integrated systems, and the work differs a great deal.",
      },
    ],
  },
  {
    slug: "ai-agent-development",
    name: "AI Agents & Automation",
    metaTitle: "AI Agent Development Company | Custom AI Agents",
    category: "ai",
    icon: "bot",
    summary: "Agents that complete multi-step work across your tools, with approvals where it matters.",
    metaDescription:
      "AI agent development from CodeBaxh: agents that complete multi-step work across your tools, with scoped permissions, approval gates and a full audit trail.",
    headline: "AI agents that do the work, inside limits you set",
    problem: [
      "Your team spends hours on multi-step work that moves information between systems: triage, enrichment, document processing, routine operations. It is too variable to script and too repetitive to keep doing by hand.",
      "An agent can plan and carry out that work. Unlike a chatbot, it writes to your systems, so a mistake is a wrong action and not just a wrong answer.",
      "The hard part is never the model. It is deciding what the agent may do alone, what needs approval and what it must refuse, then proving it behaves that way.",
    ],
    approach: [
      {
        title: "Scope the task",
        body: "We map the workflow, the systems it touches and the decisions that must stay with a person.",
      },
      {
        title: "Define tools and guardrails",
        body: "We set the exact functions the agent may call, the approval gates and the refusal cases.",
      },
      {
        title: "Build and evaluate",
        body: "We build against real inputs and score the agent on a fixed task set, including the edge cases.",
      },
      {
        title: "Ship with oversight",
        body: "The agent launches behind approval gates with full logging. Autonomy is widened only as the evidence supports it.",
      },
    ],
    deliverables: [
      "A custom agent scoped to your workflow",
      "Tool and function calling against your real systems",
      "Human approval gates for consequential actions",
      "Multi-agent pipelines where the roles are properly separate",
      "An evaluation harness that scores the agent on a fixed task set",
      "Step-level logging and an audit trail",
      "Cost, latency and failure-rate monitoring",
      "Escalation paths for exceptions the agent should not decide",
    ],
    tech: ["OpenAI", "Anthropic", "Python", "FastAPI", "Node.js", "PostgreSQL", "Redis", "AWS"],
    relatedCaseStudies: ["legal-contract-ai", "ai-call-analysis"],
    faqs: [
      {
        q: "What is the difference between an agent and a chatbot?",
        a: "A chatbot answers. An agent acts. An agent plans multi-step work and calls tools that change data in your systems, which is why most of the engineering goes into permissions, approvals and logging.",
      },
      {
        q: "Can we control what the agent is allowed to do?",
        a: "Yes, and this is the core of the work. The agent can only call the functions we give it. Consequential actions sit behind human approval, every step is logged, and anything out of scope is refused.",
      },
      {
        q: "What stops an agent from looping and running up a bill?",
        a: "Hard step limits and per-run token budgets, enforced in code and not just requested in a prompt. An agent that hits its limit stops and escalates. Cost is monitored per run.",
      },
      {
        q: "Do we need several agents or just one?",
        a: "Usually one. Splitting helps when roles are distinct and need different tools or context. Splitting a single task across agents adds ways to fail without adding capability, so we start with one.",
      },
      {
        q: "What happens when the agent gets something wrong?",
        a: "It escalates instead of guessing. Actions are reversible where the underlying system allows it and gated behind approval where it does not. Every step is logged so you can see what happened.",
      },
      {
        q: "Can an agent work with our existing tools?",
        a: "Yes. Agents connect to CRMs, ticketing systems, databases and internal services through tools we define. Mapping that access is the first thing we do, because it usually decides the timeline.",
      },
    ],
  },
  {
    slug: "voice-call-ai",
    name: "Voice & Call AI",
    metaTitle: "Voice AI Development | Call Analysis & Agents",
    category: "ai",
    icon: "audio",
    summary: "Transcription, call analysis and voice agents for phone-heavy teams.",
    metaDescription:
      "Voice & call AI from CodeBaxh: transcription, call analysis, lead scoring and voice agents for teams that work on the phone, with alerts when a call matters.",
    headline: "Call transcription, analysis and voice agents for teams on the phone",
    problem: [
      "Sales and support teams record far more calls than anyone can listen to. Lead quality, objections, sentiment and promised follow-ups stay locked in audio.",
      "Valuable prospects are missed because nobody reviewed the call in time. Coaching relies on a handful of recordings chosen at random.",
      "Speech recognition and language models can turn every call into searchable text, a summary and a score. Voice agents can take the routine calls themselves, if they are built with care.",
    ],
    approach: [
      {
        title: "Map the calls",
        body: "We look at your call types, your telephony setup, your languages and what you need to know from each conversation.",
      },
      {
        title: "Build the transcription pipeline",
        body: "Recordings or live audio are transcribed, speakers are separated, and the text is stored for search.",
      },
      {
        title: "Add analysis",
        body: "Language models extract intent, objections, sentiment, action items and a lead score, checked against calls your team has reviewed by hand.",
      },
      {
        title: "Alert and integrate",
        body: "Results go to a dashboard and your CRM, with alerts for the calls that need attention now.",
      },
    ],
    deliverables: [
      "Speech-to-text pipeline for recorded or live calls",
      "Searchable transcripts with speaker separation",
      "Call summaries and action items",
      "Intent, objection and sentiment detection",
      "Lead scoring to prioritise follow-up",
      "Real-time alerts for urgent calls",
      "Dashboard and CRM integration",
      "Voice agents for routine calls, with handover to a person",
    ],
    tech: ["OpenAI", "Whisper", "Open-source LLMs", "WebRTC", "Node.js", "Python", "MySQL", "PostgreSQL"],
    relatedCaseStudies: ["ai-call-analysis"],
    faqs: [
      {
        q: "Can you work with our existing phone system?",
        a: "In most cases, yes. If your system can export recordings or stream audio, we can process it. We confirm the integration route during discovery.",
      },
      {
        q: "How accurate is the transcription?",
        a: "It depends on audio quality, accents and vocabulary. We test on a sample of your own calls before committing, and add custom vocabulary for product names and terms.",
      },
      {
        q: "Does it work in languages other than English?",
        a: "Modern speech models cover many languages, with quality that varies by language. We test the languages you need on real recordings first.",
      },
      {
        q: "How do you handle consent and recording rules?",
        a: "Call recording law varies by country and region. We build in the notices, retention limits and access controls you specify, and recommend you confirm the requirements with your legal adviser.",
      },
      {
        q: "Can a voice agent replace our call team?",
        a: "We would not frame it that way. Voice agents suit routine, well-defined calls such as booking, status checks and first-line triage. Anything complex or sensitive should pass to a person, and we build that handover in.",
      },
    ],
  },
  {
    slug: "llm-evaluation-guardrails",
    name: "LLM Evaluation & Guardrails",
    metaTitle: "LLM Evaluation & Guardrails | AI Testing",
    category: "ai",
    icon: "shield",
    summary: "Test sets, automated evals and guardrails so quality is measured, not guessed.",
    metaDescription:
      "LLM evaluation & guardrails from CodeBaxh: test sets, automated evals and input and output checks, so the quality of your AI feature is measured, not guessed.",
    headline: "Evaluation and guardrails, so you know your AI feature works",
    problem: [
      "Most teams judge an AI feature by trying a few prompts and seeing if the answers look right. That works until a prompt change, a model update or a new kind of question breaks something nobody checked.",
      "Without a test set you cannot tell whether a change made things better or worse. Quality drifts, and you hear about it from users.",
      "Without guardrails, the feature will sooner or later answer something it should have refused, or leak something it should have protected.",
    ],
    approach: [
      {
        title: "Define good",
        body: "We agree with you what a correct, safe and useful answer looks like for this feature, in writing.",
      },
      {
        title: "Build the test set",
        body: "Real questions, edge cases and known failures are collected with expected answers, drawn from your data and logs.",
      },
      {
        title: "Automate the evals",
        body: "Scoring runs on every prompt or model change, combining exact checks, model-graded checks and human review where judgement is needed.",
      },
      {
        title: "Add guardrails and monitoring",
        body: "Input and output checks, refusal rules and production monitoring catch what the tests did not predict.",
      },
    ],
    deliverables: [
      "A written quality definition for each AI feature",
      "A versioned test set built from real usage",
      "Automated evaluation that runs in your CI pipeline",
      "Retrieval and answer-accuracy scoring for RAG systems",
      "Input guardrails for prompt injection and out-of-scope requests",
      "Output guardrails for sensitive data, tone and unsupported claims",
      "Production monitoring with sampled human review",
      "A dashboard showing quality over time",
    ],
    tech: ["OpenAI", "Anthropic", "Python", "TypeScript", "PostgreSQL", "GitHub Actions"],
    relatedCaseStudies: ["legal-contract-ai", "ai-business-consultant-chatbot"],
    faqs: [
      {
        q: "What is an eval?",
        a: "A repeatable test for an AI feature. It runs a fixed set of inputs through the system and scores the outputs, so you can compare versions with numbers instead of impressions.",
      },
      {
        q: "Can hallucinations be removed completely?",
        a: "No. They can be reduced a great deal through grounding, citations, refusal behaviour and checks on the output. Evaluation tells you how often they still happen, which is what lets you decide if the feature is ready.",
      },
      {
        q: "We already have an AI feature live. Can you add evaluation to it?",
        a: "Yes. This is the most common case. We build the test set from your production logs and known complaints, then wire the evals into your release process.",
      },
      {
        q: "Do guardrails slow the feature down?",
        a: "Some checks add a little latency. We keep the fast, cheap checks in the request path and run the heavier ones in the background or on a sample.",
      },
      {
        q: "Who reviews the results?",
        a: "Automated scoring covers most cases. For questions that need judgement, our QA and AI teams review a sample with someone from your side who knows the domain.",
      },
    ],
  },
  {
    slug: "llm-cost-optimisation",
    name: "LLM Cost Optimisation",
    metaTitle: "LLM Cost Optimization | Reduce AI API Costs",
    category: "ai",
    icon: "gauge",
    summary: "Model routing, caching and prompt work that cut spend without hurting answers.",
    metaDescription:
      "LLM cost optimisation from CodeBaxh: model routing, caching, prompt and retrieval work that reduce token spend, with evals to confirm answers stay as good.",
    headline: "Lower LLM bills without worse answers",
    problem: [
      "AI features are cheap to prototype and surprising to run at scale. Token spend rises with every user, every long prompt and every retry.",
      "The usual cause is not one expensive call. It is the largest model used for every task, the same context sent again and again, and no view of which feature is spending what.",
      "Cutting cost blindly damages quality. You need to know what each change does to the answers as well as the bill.",
    ],
    approach: [
      {
        title: "Measure the spend",
        body: "We instrument your calls so you can see cost per feature, per request and per user.",
      },
      {
        title: "Find the waste",
        body: "We review prompts, context size, model choice, retries and retrieval to find where tokens are spent for no benefit.",
      },
      {
        title: "Apply the changes",
        body: "Smaller models for simple tasks, prompt and response caching, shorter prompts, tighter retrieval and batch processing where a delay is acceptable.",
      },
      {
        title: "Check quality",
        body: "Each change is run against an evaluation set, so a saving that harms answers is caught before release.",
      },
    ],
    deliverables: [
      "Cost tracking per feature, request and user",
      "A findings report ranked by likely saving",
      "Model routing so each task uses the smallest model that does it well",
      "Prompt caching and response caching",
      "Shorter prompts and tighter retrieval context",
      "Batch processing for work that does not need an instant answer",
      "Budgets, limits and alerts on spend",
      "An evaluation set that confirms quality after each change",
    ],
    tech: ["OpenAI", "Anthropic", "Open-source models", "Python", "Node.js", "Redis", "PostgreSQL"],
    relatedCaseStudies: ["legal-contract-ai", "ai-call-analysis"],
    faqs: [
      {
        q: "How much can we save?",
        a: "We will not quote a figure before looking at your usage. The saving depends on how the feature was built. The first step is measurement, and you see the findings before any change is made.",
      },
      {
        q: "Does a cheaper model mean worse answers?",
        a: "Not for every task. Classification, extraction and routing often work well on smaller models. The evaluation set shows where a smaller model holds up and where it does not.",
      },
      {
        q: "What is prompt caching?",
        a: "Providers can store the unchanging part of a prompt, such as instructions or a long document, and charge less when it is reused. It suits features that send the same context many times.",
      },
      {
        q: "When should we start optimising?",
        a: "After the feature works and you can see real usage. Optimising too early wastes effort on calls that may change. Basic cost tracking, though, is worth having from the first release.",
      },
      {
        q: "Should we host our own model to save money?",
        a: "Sometimes. Self-hosting can pay off at high, steady volume or when data must stay in your environment. It also brings infrastructure and maintenance work. We compare both options with your real numbers.",
      },
    ],
  },
  {
    "slug": "custom-software-development",
    "name": "Custom Software Development",
    "metaTitle": "Custom Software Development Services",
    "category": "core",
    "icon": "code",
    "summary": "Software designed around how your business works, when off-the-shelf tools no longer fit.",
    "metaDescription": "Custom software development from CodeBaxh: web platforms, internal tools and integrations designed around your processes and built to grow with you.",
    "headline": "Software built around your business, not the other way round",
    "problem": [
      "Off-the-shelf tools get you started, then start to hold you back. Teams end up working around the software with spreadsheets, manual steps and duplicate data entry.",
      "Custom software removes those workarounds. It fits your process, connects to the systems you already use and gives you an asset you own.",
      "The risk is building the wrong thing. That is why we start with the process and the outcome, and only then decide what to build."
    ],
    "approach": [
      {
        "title": "Understand the process",
        "body": "We map how the work is done today, where time is lost and what a better flow looks like."
      },
      {
        "title": "Design the solution",
        "body": "Scope, data model, integrations and interface design are agreed before development begins."
      },
      {
        "title": "Build in increments",
        "body": "Working software is delivered in short iterations so you can test it with real users early."
      },
      {
        "title": "Launch and evolve",
        "body": "We release, train your team and keep improving the product as your needs change."
      }
    ],
    "deliverables": [
      "Requirements and solution design",
      "Custom web or desktop application",
      "Integrations with your existing systems",
      "Admin tools and reporting",
      "Automated tests and deployment pipeline",
      "Documentation and handover"
    ],
    "tech": [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "Python",
      "PostgreSQL",
      "AWS",
      "Docker"
    ],
    "relatedCaseStudies": [
      "redeemx-admin-dashboard",
      "landlord-academy-lms",
      "gis-zoning-saas"
    ],
    "faqs": [
      {
        "q": "When does custom software make sense?",
        "a": "When your process is a competitive advantage, when licence costs or workarounds keep growing, or when no product on the market fits the way you operate."
      },
      {
        "q": "Can you integrate with the systems we already use?",
        "a": "Yes. We connect to CRMs, ERPs, payment providers, identity providers and internal databases through their APIs, and build an integration layer where none exists."
      },
      {
        "q": "Who owns the software?",
        "a": "You do. Once the agreed milestones are paid, the code and all deliverables are yours."
      },
      {
        "q": "How do you keep the project on track?",
        "a": "A written scope, short iterations, weekly demos and a shared board. You see progress every week and can adjust priorities as you learn."
      }
    ]
  },
  {
    "slug": "enterprise-software-development",
    "name": "Enterprise Software Development",
    "metaTitle": "Enterprise Software Development Services",
    "category": "core",
    "icon": "building",
    "summary": "Secure, scalable systems for larger organisations, with the integration, access control and governance they require.",
    "metaDescription": "Enterprise software development from CodeBaxh: secure, scalable platforms with role-based access, audit trails, integrations and structured delivery.",
    "headline": "Enterprise systems that are secure, integrated and built to last",
    "problem": [
      "Enterprise software has to serve many teams, meet security and compliance requirements, and connect to systems that have been in place for years.",
      "Projects fail when those realities are discovered late. Access models, data ownership, integration points and rollout need to be designed in from the start.",
      "We bring structured delivery to that complexity, with clear documentation and governance at each stage."
    ],
    "approach": [
      {
        "title": "Discovery and stakeholders",
        "body": "We gather requirements across departments and agree priorities, constraints and success measures."
      },
      {
        "title": "Architecture and security",
        "body": "Role-based access, audit logging, data protection and integration design are settled early."
      },
      {
        "title": "Phased delivery",
        "body": "The system is released in phases, each tested and accepted before the next begins."
      },
      {
        "title": "Rollout and support",
        "body": "Migration, training, hypercare and ongoing support keep adoption on track."
      }
    ],
    "deliverables": [
      "Requirements and architecture documentation",
      "Role-based access control and audit trails",
      "Integration with ERP, CRM, HR and identity systems",
      "Data migration plan and execution",
      "Test strategy with UAT support",
      "Deployment, monitoring and support plan"
    ],
    "tech": [
      "TypeScript",
      "React",
      "Node.js",
      "NestJS",
      "Python",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Microsoft Azure",
      "Docker",
      "Kubernetes"
    ],
    "relatedCaseStudies": [
      "home-equity-fintech-saas",
      "gis-zoning-saas",
      "omnichannel-messaging-saas"
    ],
    "faqs": [
      {
        "q": "How do you handle security and compliance?",
        "a": "Security is part of the design: role-based access, encryption in transit and at rest, audit logging and least-privilege infrastructure. We work to your compliance requirements and document how each is met."
      },
      {
        "q": "Can you work with our internal IT team?",
        "a": "Yes. We work alongside in-house teams, follow your change and release processes, and hand over with documentation and training."
      },
      {
        "q": "How do you manage a large scope?",
        "a": "We break it into phases with clear acceptance criteria. Each phase delivers something usable, which reduces risk and gives stakeholders visible progress."
      },
      {
        "q": "Do you support single sign-on?",
        "a": "Yes. We integrate with identity providers such as Microsoft Entra ID, Okta and Google Workspace using SAML or OpenID Connect."
      }
    ]
  },
  {
    "slug": "qa-testing",
    "name": "QA & Testing",
    "metaTitle": "QA Testing Services | Manual & Automated Testing",
    "category": "core",
    "icon": "check",
    "summary": "Manual and automated testing across web, mobile and APIs, so releases are predictable and defects are caught early.",
    "metaDescription": "QA and testing services from CodeBaxh: test strategy, manual and automated testing, API, performance and regression testing built into every release.",
    "headline": "Quality assurance built into every release",
    "problem": [
      "Defects found by customers cost far more than defects found before release. They damage trust and pull engineers away from planned work.",
      "Testing that happens only at the end of a project is too late. Quality needs a plan, the right mix of manual and automated checks, and a place in the release process.",
      "Our QA team works alongside engineering from the first sprint, or joins your existing team to raise coverage and confidence."
    ],
    "approach": [
      {
        "title": "Test strategy",
        "body": "We agree what to test, at which level, and what quality means for your product."
      },
      {
        "title": "Manual and exploratory testing",
        "body": "Functional, usability and cross-device testing by people who think like your users."
      },
      {
        "title": "Automation",
        "body": "Unit, integration, end-to-end and API tests that run on every change in CI."
      },
      {
        "title": "Performance and release",
        "body": "Load testing, regression suites and a release checklist before anything goes live."
      }
    ],
    "deliverables": [
      "Test strategy and test plan",
      "Test cases and traceability to requirements",
      "Automated regression suite in CI",
      "API and integration tests",
      "Performance and load test reports",
      "Defect reports and release sign-off"
    ],
    "tech": [
      "Jest",
      "Vitest",
      "Testing Library",
      "Cypress",
      "Selenium",
      "Pytest",
      "Postman",
      "k6",
      "SonarQube",
      "GitHub Actions"
    ],
    "relatedCaseStudies": [
      "multi-tenant-saas-mvp",
      "home-equity-fintech-saas"
    ],
    "faqs": [
      {
        "q": "Can you test a product you did not build?",
        "a": "Yes. We can join as an independent QA team, review the current state, and set up a test plan and automation for an existing product."
      },
      {
        "q": "Do you do manual or automated testing?",
        "a": "Both. Automation covers repeatable regression checks; manual and exploratory testing finds the issues scripts miss. The right mix depends on your product."
      },
      {
        "q": "Which types of testing do you cover?",
        "a": "Functional, regression, API, integration, cross-browser and device, performance and load, and user acceptance testing support."
      },
      {
        "q": "How is quality reported?",
        "a": "You receive defect reports with severity and steps to reproduce, test run summaries for each release, and coverage trends over time."
      }
    ]
  },
  {
    "slug": "requirements-documentation",
    "name": "Requirements Gathering & Documentation",
    "metaTitle": "Requirements Gathering & Documentation | BRD & SRS",
    "category": "core",
    "icon": "file",
    "summary": "Workshops, analysis and clear documents that turn an idea into a scope engineers can build and stakeholders can sign off.",
    "metaDescription": "Requirements gathering and documentation from CodeBaxh: discovery workshops, BRD, SRS, user stories, process flows and wireframes before development.",
    "headline": "Clear requirements before a line of code is written",
    "problem": [
      "Most project overruns start with unclear requirements. Assumptions go unstated, stakeholders picture different products, and the gaps surface during development when they are expensive to fix.",
      "A short, structured requirements phase prevents that. It gives everyone the same picture of what is being built, why, and what is out of scope.",
      "You can take the resulting documents to any team, including ours, and get a reliable estimate."
    ],
    "approach": [
      {
        "title": "Discovery workshops",
        "body": "We meet stakeholders and users to understand goals, processes and constraints."
      },
      {
        "title": "Analysis",
        "body": "Requirements are prioritised, conflicts resolved and assumptions made explicit."
      },
      {
        "title": "Documentation",
        "body": "We write the BRD, SRS, user stories and flows, and review them with you."
      },
      {
        "title": "Validation",
        "body": "Wireframes and a walkthrough confirm the scope before sign-off."
      }
    ],
    "deliverables": [
      "Business requirements document (BRD)",
      "Software requirements specification (SRS)",
      "User stories with acceptance criteria",
      "Process flows and use-case diagrams",
      "Wireframes for key screens",
      "Scope, estimate and delivery roadmap"
    ],
    "tech": [
      "Figma",
      "Miro",
      "Jira",
      "Confluence",
      "Notion"
    ],
    "relatedCaseStudies": [
      "gis-zoning-saas",
      "legal-contract-ai"
    ],
    "faqs": [
      {
        "q": "Do we need this if we already have an idea of what we want?",
        "a": "Usually yes. Writing requirements down exposes gaps and differing assumptions early, when they are cheap to resolve."
      },
      {
        "q": "What documents do we receive?",
        "a": "Typically a BRD, an SRS, user stories with acceptance criteria, process flows, wireframes and a delivery roadmap. The set is tailored to the project."
      },
      {
        "q": "Can we use the documents with another vendor?",
        "a": "Yes. They are yours and are written so that any competent team can estimate and build from them."
      },
      {
        "q": "Who runs the requirements phase?",
        "a": "A senior product lead, supported by a business analyst and a solution architect, with design and QA input where needed."
      }
    ]
  },
  {
    "slug": "support-hypercare",
    "name": "Post-Production Support & Hypercare",
    "metaTitle": "Post-Launch Support & Hypercare Services",
    "category": "core",
    "icon": "life",
    "summary": "Close monitoring after go-live, then ongoing support, maintenance and improvement under agreed response times.",
    "metaDescription": "Post-production support and hypercare from CodeBaxh: intensive go-live monitoring, incident response, maintenance, updates and continuous improvement.",
    "headline": "Support that starts at go-live and stays with you",
    "problem": [
      "The weeks after launch decide how a product is received. Real users find issues that testing did not, and slow responses turn small problems into lost confidence.",
      "Hypercare is a period of heightened support straight after go-live: the delivery team stays close, watches the system and fixes issues quickly.",
      "After that, a support agreement keeps the product secure, up to date and improving."
    ],
    "approach": [
      {
        "title": "Go-live readiness",
        "body": "Monitoring, alerting, runbooks and a rollback plan are in place before launch."
      },
      {
        "title": "Hypercare",
        "body": "A dedicated team monitors closely and resolves issues with priority after release."
      },
      {
        "title": "Steady-state support",
        "body": "Incidents and requests are handled under agreed response and resolution times."
      },
      {
        "title": "Continuous improvement",
        "body": "Regular reviews turn incidents and feedback into planned improvements."
      }
    ],
    "deliverables": [
      "Go-live checklist and runbooks",
      "Monitoring dashboards and alerting",
      "Hypercare period with a dedicated team",
      "Incident response under agreed response times",
      "Security patches and dependency updates",
      "Monthly service report and improvement backlog"
    ],
    "tech": [
      "Sentry",
      "Grafana",
      "Prometheus",
      "Datadog",
      "GitHub Actions",
      "AWS",
      "Microsoft Azure"
    ],
    "relatedCaseStudies": [
      "multi-tenant-saas-mvp",
      "omnichannel-messaging-saas"
    ],
    "faqs": [
      {
        "q": "What is hypercare?",
        "a": "A defined period immediately after go-live when the delivery team provides heightened monitoring and priority fixes, so early issues are resolved quickly."
      },
      {
        "q": "Do you support software you did not build?",
        "a": "Yes, after a short technical review to understand the codebase, infrastructure and risks."
      },
      {
        "q": "What does a support agreement cover?",
        "a": "Incident response, bug fixes, security and dependency updates, monitoring and a set amount of enhancement work each month, under agreed response times."
      },
      {
        "q": "How are urgent incidents handled?",
        "a": "Incidents are prioritised by severity. Critical issues are picked up immediately by the on-call engineer and you are kept informed until resolution."
      }
    ]
  },
];

export const coreServices = services.filter((s) => s.category === "core");
export const aiServices = services.filter((s) => s.category === "ai");

/** Curated, merged line-up shown on the home page. Each card links to an existing service page. */
export const homeServices: { title: string; summary: string; href: string; icon: string; image: string }[] = [
  { title: "SaaS & MVP Development", summary: "Multi-tenant SaaS and focused first versions, on architecture that carries you from launch to scale.", href: "/services/saas-development", icon: "layers", image: "saas" },
  { title: "Custom & Enterprise Software", summary: "Software designed around how your organisation works, with the integration, security and governance it needs.", href: "/services/custom-software-development", icon: "building", image: "dashboard" },
  { title: "Web & Mobile App Development", summary: "Fast web applications in Next.js and React, and iOS and Android apps from one React Native codebase.", href: "/services/web-development", icon: "globe", image: "webDev" },
  { title: "RAG & LLM Integration", summary: "Language models connected to your own data, with answers that cite their sources.", href: "/services/ai-integration", icon: "plug", image: "aiChip" },
  { title: "AI Agents & Chatbots", summary: "Agents that complete multi-step work across your tools, and assistants grounded in your content.", href: "/services/ai-agent-development", icon: "bot", image: "agenticAi" },
  { title: "API, Cloud & DevOps", summary: "Secure APIs and backends, cloud infrastructure, CI/CD and payment gateway integration.", href: "/services/cloud-devops", icon: "cloud", image: "servers" },
  { title: "QA & Testing", summary: "Manual and automated testing across web, mobile and APIs, built into every release.", href: "/services/qa-testing", icon: "check", image: "jsCode" },
  { title: "Requirements & Documentation", summary: "Workshops, BRD, SRS, user stories and wireframes that turn an idea into a buildable scope.", href: "/services/requirements-documentation", icon: "file", image: "keyboardCode" },
  { title: "Support & Hypercare", summary: "Close monitoring after go-live, then ongoing support, maintenance and improvement.", href: "/services/support-hypercare", icon: "life", image: "ide" },
];
