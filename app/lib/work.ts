/**
 * Case studies (portfolio spokes). Structure: Overview → Problem → Approach →
 * Solution → Highlights ("What we built") → Results, with named clients, tech,
 * metrics, and a link to the related service. All proof here is drawn from
 * real, shipped work.
 *
 * NAMING: entries whose source was marked "Client: Confidential" are kept
 * generic (Legal-tech, etc.). Publicly named products/brands (Zoneomics,
 * Alive5, HomeRoyaltie, RedeemX, Snippetz, etc.) are named directly.
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
  /** Richer 1–2 paragraph intro shown at the top of the detail page. */
  overview?: string[];
  /** Named enterprise clients / context (trust transfer). */
  clients?: string[];
  problem: string;
  approach: string[];
  solution: string;
  /** Key capabilities we built — rendered as a "What we built" grid. */
  highlights?: { title: string; body: string }[];
  results: { value: string; label: string }[];
  techStack: string[];
  /** Related service slug for internal linking. */
  serviceSlug?: string;
  featured?: boolean;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "zoneomics-proptech-saas",
    client: "Zoneomics",
    title: "A GIS-powered zoning SaaS that scaled to 10,000+ users",
    category: "PropTech SaaS",
    metaTitle: "Zoneomics PropTech SaaS Case Study | GIS & Stripe | CodeBaxh",
    metaDescription:
      "How CodeBaxh built Zoneomics — a GIS zoning SaaS with Stripe billing and map search that cut property research from days to minutes at 10,000+ users.",
    summary:
      "A GIS-based real-estate zoning platform that turned days of manual appraisal research into instant, map-based reports — scaled to 10,000+ users.",
    overview: [
      "Zoneomics set out to disrupt an outdated appraisal workflow. Real-estate professionals were visiting multiple city planning websites, queuing at government offices, and paying for each property report by hand. We built a GIS-integrated SaaS that aggregates, processes, and visualizes zoning and land-use data instantly.",
      "We led the engineering effort end to end — from architecture and interactive mapping to secure payments and cloud deployment — and the platform scaled past 10,000 users with zoning coverage across 50+ cities.",
    ],
    problem:
      "Real-estate professionals lost days pulling zoning and land-use data — visiting municipal websites, queuing at planning offices, and paying per report. The workflow was slow, manual, and impossible to scale.",
    approach: [
      "Architected a full-stack platform on Next.js and NestJS with a Mapbox GIS layer for parcel-level zoning overlays.",
      "Built web scrapers and data pipelines to aggregate zoning data from public municipal sources across 50+ cities.",
      "Added Stripe Checkout and subscriptions for on-demand reports, with role-based dashboards and deep search filters.",
    ],
    solution:
      "A cloud-first SaaS on AWS that aggregates, processes, and visualizes zoning data instantly — replacing weeks of offline paperwork with an interactive map, deep filters, and Stripe-powered report access.",
    highlights: [
      { title: "Interactive GIS mapping", body: "Mapbox-powered zoning overlays with parcel-level zoom and toggleable land-use layers." },
      { title: "Real-time zoning search", body: "Deep filters across zone types, property types, and square footage over 50+ cities." },
      { title: "Stripe payments & subscriptions", body: "On-demand report access and subscriptions with Stripe Checkout and webhooks." },
      { title: "Automated data aggregation", body: "Web scrapers pull zoning data from public municipal sources, replacing manual record fetching." },
      { title: "SaaS dashboard", body: "Users manage subscriptions, purchases, and saved searches in one place." },
      { title: "Cloud-scaled on AWS", body: "EC2, S3, and Lambda with CI/CD to serve thousands of real-time queries." },
    ],
    results: [
      { value: "10,000+", label: "Users on the platform" },
      { value: "3 days → 3 min", label: "Property research time" },
      { value: "50+ cities", label: "Zoning data coverage" },
    ],
    techStack: ["Next.js", "NestJS", "Stripe", "Mapbox GIS", "PostgreSQL", "MongoDB", "AWS", "TypeScript"],
    serviceSlug: "saas-development",
    featured: true,
  },
  {
    slug: "legal-contract-ai",
    client: "Legal-tech",
    title: "Legal contract analysis with a multi-agent RAG pipeline",
    category: "AI / RAG",
    metaTitle: "Legal Contract AI Case Study | RAG & Gemini | CodeBaxh",
    metaDescription:
      "How CodeBaxh built a multi-agent RAG platform that analyzes 500–1000 page legal contracts — grounded, source-cited answers using OpenAI, Gemini, and a Qdrant vector database.",
    summary:
      "A multi-agent RAG platform that turns 500–1000 page legal contracts into a queryable knowledge base with grounded, source-cited answers.",
    overview: [
      "Traditional legal analysis of long documents can take hours or days. This platform transforms 500–1000 page contracts — with complex formatting, clauses, tables, and cross-references — into a searchable, intelligent knowledge system that legal teams can query in plain language.",
      "Rather than relying on a model's memory, the system retrieves the most relevant document sections from a vector database before generating each answer, so responses stay grounded in — and traceable to — the original contract text.",
    ],
    problem:
      "Reviewing long legal contracts takes hours or days, and generic LLMs hallucinate on legal text. The system needed accurate answers grounded in — and traceable to — the actual contract language, across documents of 500–1000 pages.",
    approach: [
      "Built an ingestion pipeline that repairs and parses complex document structures — clauses, tables, and references — so models interpret the content correctly.",
      "Designed a RAG architecture over a Qdrant vector database with query expansion and multi-step retrieval to surface the right clauses in very long documents.",
      "Split the workload across a multi-agent workflow — document processing, retrieval, query understanding, and response generation — using OpenAI and Google Gemini.",
    ],
    solution:
      "A FastAPI platform that lets legal teams upload large contracts and ask complex questions, getting context-aware answers grounded in the source clauses — turning static PDFs into an interactive legal knowledge base.",
    highlights: [
      { title: "Document structure repair", body: "Automatically parses and repairs complex layouts so models interpret clauses, tables, and references correctly." },
      { title: "Advanced retrieval", body: "Query expansion and multi-step search surface the right clauses even in extremely long documents." },
      { title: "Multi-agent workflow", body: "Separate agents handle processing, retrieval, query understanding, and response generation." },
      { title: "Grounded answers", body: "Every response cites the source clauses, dramatically cutting manual review time." },
      { title: "Qdrant vector search", body: "High-speed semantic similarity search across large document datasets." },
      { title: "OpenAI + Gemini", body: "Best-fit LLMs power reasoning and legal analysis behind a FastAPI backend." },
    ],
    results: [
      { value: "500–1000 pgs", label: "Handled per contract" },
      { value: "Grounded", label: "Answers cite source clauses" },
      { value: "Multi-agent", label: "Specialized RAG workflow" },
    ],
    techStack: ["Python", "FastAPI", "OpenAI", "Google Gemini", "Qdrant", "RAG"],
    serviceSlug: "ai-integration",
    featured: true,
  },
  {
    slug: "omnichannel-messaging-saas",
    client: "Alive5",
    title: "Alive5 — an omnichannel messaging SaaS that unified five channels",
    category: "Messaging SaaS",
    metaTitle: "Alive5 Omnichannel Messaging Case Study | Socket.io | CodeBaxh",
    metaDescription:
      "How CodeBaxh helped build Alive5 — an omnichannel messaging SaaS unifying Facebook, Instagram, SMS, web chat, and Google Business in one real-time inbox, cutting response time 70%.",
    summary:
      "A unified messaging platform that brings Facebook, Instagram, SMS, web chat, and Google Business into one real-time inbox — cutting average response time by 70%.",
    overview: [
      "Businesses manage conversations across Facebook Messenger, Instagram DMs, SMS, website chat, and Google Business Messages. That fragmentation causes delays, missed replies, and overloaded support teams. Alive5 unifies every channel into one real-time platform — in the vein of Intercom or Twilio Conversations — with CMS features for templated, branded replies.",
      "We contributed across the full stack: building the real-time conversation engine, integrating the messaging APIs, and helping ship the admin dashboard and content tools.",
    ],
    problem:
      "Businesses juggle conversations across Messenger, Instagram DMs, SMS, website chat, and Google Business Messages. The fragmentation caused delays, missed replies, and overloaded support teams.",
    approach: [
      "Integrated Facebook Messenger, Instagram Graph, Google Business Messages, and SMS gateways (Twilio, Nexmo) into a single inbox.",
      "Built a real-time conversation engine on Socket.io and Node.js, with Elasticsearch for fast message indexing and search.",
      "Added a CMS for saved replies and templates, plus role-based access, smart filters, and conversation labels.",
    ],
    solution:
      "A centralized, real-time SaaS dashboard — in the vein of Intercom or Twilio Conversations — that unifies every channel, routes messages dynamically, and gives agents visibility across all active conversations.",
    highlights: [
      { title: "Unified inbox", body: "Facebook, Instagram, SMS, in-app chat, and Google Business in a single real-time view." },
      { title: "Real-time engine", body: "Bi-directional, event-driven messaging on Socket.io with auto-refresh." },
      { title: "Elasticsearch search", body: "Fast querying and filtering by platform, keyword, customer, status, and agent." },
      { title: "Built-in CMS", body: "Auto-responses, canned replies, saved messages, and rich content editing." },
      { title: "Role-based access", body: "Permissions, conversation labels, and agent assignment across the team." },
      { title: "Dynamic routing", body: "API-driven message routing with fallback handling and a mobile-friendly UI." },
    ],
    results: [
      { value: "70% faster", label: "Average response time" },
      { value: "5 channels", label: "Unified in one inbox" },
      { value: "Real-time", label: "Socket.io message engine" },
    ],
    techStack: ["React", "Next.js", "Node.js", "Socket.io", "Elasticsearch", "MongoDB", "DynamoDB", "TypeScript"],
    serviceSlug: "saas-development",
    featured: true,
  },
  {
    slug: "home-equity-fintech-saas",
    client: "HomeRoyaltie",
    title: "HomeRoyaltie — a FinTech SaaS for home equity and second mortgages",
    category: "FinTech SaaS",
    metaTitle: "HomeRoyaltie FinTech SaaS Case Study | Next.js & AWS | CodeBaxh",
    metaDescription:
      "How CodeBaxh engineered HomeRoyaltie — a FinTech SaaS for home equity with real-time calculators, royalty-model simulators, and web-scraped lender rates on a secure AWS stack.",
    summary:
      "A FinTech platform that turns complex home-equity and second-mortgage concepts into real-time calculators, comparison dashboards, and secure reports.",
    overview: [
      "For most people, understanding a home's real value and leveraging it for financing is confusing, risky, and paper-heavy. HomeRoyaltie demystifies home equity, second mortgages, and royalty-based real-estate solutions with smart, real-time digital tools.",
      "As senior full-stack developer, we led development from backend APIs to UI delivery and AWS deployment — building a secure platform users can trust with sensitive financial data.",
    ],
    problem:
      "Understanding home equity and leveraging it for financing is confusing, risky, and paper-heavy. Users depend on loan officers and brokers just to compare their options.",
    approach: [
      "Built responsive calculators and comparison dashboards on Next.js and NestJS — home-equity analyzers and royalty-vs-second-mortgage simulators.",
      "Integrated third-party property and loan APIs, plus custom web scrapers (Puppeteer) to pull live lender rates and terms.",
      "Deployed a secure stack on AWS (EC2, S3, CodePipeline) with role-based auth, encrypted sessions, and CI/CD.",
    ],
    solution:
      "A smart digital product that educates users on their equity in real time, calculates eligibility from current asset value, and generates API-driven reports comparing traditional and royalty-based financing — reducing dependence on brokers.",
    highlights: [
      { title: "Home equity analyzer", body: "Calculates real-time equity using current market rates." },
      { title: "Royalty model simulator", body: "Compares second-mortgage vs. revenue-sharing financing side by side." },
      { title: "Live rate scraping", body: "Custom Puppeteer scrapers pull lender terms and competitor rates." },
      { title: "Personalized dashboard", body: "Reports, uploaded documents, and funding timelines per user." },
      { title: "Secure REST APIs", body: "Custom APIs for equity, loan, and payment simulations." },
      { title: "AWS CI/CD", body: "EC2, S3, and CodePipeline with version-controlled auto-deployment." },
    ],
    results: [
      { value: "Real-time", label: "Equity & eligibility calculators" },
      { value: "Automated", label: "Live lender-rate scraping" },
      { value: "Secure CI/CD", label: "AWS-based FinTech stack" },
    ],
    techStack: ["Next.js", "NestJS", "Node.js", "AWS", "MongoDB", "Puppeteer", "TypeScript"],
    serviceSlug: "saas-development",
  },
  {
    slug: "ai-call-analysis",
    client: "Lead Rescue",
    title: "Lead Rescue — AI call analysis with speech recognition and lead scoring",
    category: "AI / NLP",
    metaTitle: "AI Call Analysis Case Study | Speech + GPT | CodeBaxh",
    metaDescription:
      "How CodeBaxh built Lead Rescue — an AI call-analysis platform that transcribes calls, scores lead intent with GPT and NLP, and fires real-time alerts to lift conversions.",
    summary:
      "An AI platform that transcribes customer calls, scores lead intent with GPT and NLP, and fires real-time alerts — processing 10–50 calls in minutes.",
    overview: [
      "Lead Rescue turns high volumes of inbound and outbound calls into structured, actionable data. It combines automatic speech recognition, NLP, and GPT-based analysis so businesses can understand customer intent, measure lead quality, and improve sales performance — without manually listening to every call.",
      "The system processes 10–50 calls in minutes, transcribing conversations and scoring them so teams can focus on the highest-value prospects and respond in real time.",
    ],
    problem:
      "Teams recorded high volumes of calls but couldn't review them at scale, losing insight on lead quality, sentiment, and follow-ups — and missing high-value prospects.",
    approach: [
      "Built an Automatic Speech Recognition pipeline that transcribes recorded calls into searchable, analyzable text.",
      "Layered GPT and NLP analysis to detect intent, objections, and sentiment, then compute lead-heat scores to prioritize prospects.",
      "Added real-time alerts and a scalable Node.js + WebRTC backend to handle growing call volume.",
    ],
    solution:
      "An AI call-intelligence system that converts raw recordings into transcripts, insights, and lead scores — helping sales teams focus on the highest-probability leads and respond to opportunities in real time.",
    highlights: [
      { title: "Automatic transcription", body: "ASR converts recorded calls into accurate, searchable text transcripts." },
      { title: "Conversation intelligence", body: "GPT and NLP detect interest, objections, sentiment, and intent." },
      { title: "Lead heat scoring", body: "Scores prioritize prospects with the highest probability of conversion." },
      { title: "Real-time alerts", body: "Notifies teams of hot opportunities and potential problems as they surface." },
      { title: "Scalable backend", body: "Node.js and WebRTC handle growing call volume." },
      { title: "Structured insights", body: "Summaries, action items, and scores stored for search and review." },
    ],
    results: [
      { value: "10–50 calls", label: "Analyzed in minutes" },
      { value: "Lead scoring", label: "Automated intent & heat scores" },
      { value: "Real-time", label: "Alerts on hot opportunities" },
    ],
    techStack: ["Node.js", "GPT", "WebRTC", "Automatic Speech Recognition", "LLaMA", "MySQL"],
    serviceSlug: "ai-integration",
  },
  {
    slug: "ai-business-consultant-chatbot",
    client: "AI business tooling",
    title: "An AI business-consultancy chatbot for multi-department strategy",
    category: "AI Chatbot",
    metaTitle: "AI Consultancy Chatbot Case Study | OpenAI | CodeBaxh",
    metaDescription:
      "How CodeBaxh built a conversational AI consultant that guides businesses through marketing, HR, finance, and operations decisions with OpenAI-powered recommendations.",
    summary:
      "A conversational AI consultant that asks targeted questions and delivers actionable recommendations across marketing, HR, finance, operations, and IT.",
    overview: [
      "This platform acts as a digital AI advisor. Instead of complex forms or a full consulting engagement, it guides users through a structured conversation, asking simple, targeted questions to understand a business challenge.",
      "Based on the responses, it generates balanced, actionable recommendations across marketing, HR, finance, operations, strategy, and IT — turning traditional consultancy into a fast, accessible, scalable experience.",
    ],
    problem:
      "Small teams can't afford a full consulting engagement for every decision, and long forms or reports slow them down. They needed fast, structured, department-specific guidance.",
    approach: [
      "Designed a conversational flow that guides users through a structured consultation with simple, targeted questions.",
      "Integrated OpenAI with NLP tokenization to understand intent and generate balanced, context-aware recommendations.",
      "Built the app as a scalable, SaaS-style web platform ready for new AI models and feature expansion.",
    ],
    solution:
      "A digital AI advisor that analyzes a business's challenge through conversation and returns optimized, actionable recommendations across departments — turning traditional consultancy into a fast, accessible, scalable experience.",
    highlights: [
      { title: "Guided consultation", body: "A conversational flow replaces long forms with simple, targeted questions." },
      { title: "Multi-domain advice", body: "Marketing, HR, operations, finance, strategy, and IT guidance in one tool." },
      { title: "Context-aware output", body: "NLP interprets intent to produce balanced, actionable recommendations." },
      { title: "Decision support", body: "Fast strategic insights without a full consulting engagement." },
      { title: "SaaS-style app", body: "Scalable web architecture ready for feature and model expansion." },
      { title: "OpenAI-powered", body: "Generative AI simulates an intelligent business consultant." },
    ],
    results: [
      { value: "6 domains", label: "Marketing, HR, finance, ops, IT & strategy" },
      { value: "Conversational", label: "Guided Q&A, not forms" },
      { value: "SaaS-ready", label: "Scalable, model-agnostic build" },
    ],
    techStack: ["OpenAI", "Generative AI", "NLP", "Node.js", "Next.js"],
    serviceSlug: "ai-chatbot-development",
  },
  {
    slug: "redeemx-admin-dashboard",
    client: "RedeemX",
    title: "RedeemX — an analytics-rich admin dashboard for e-commerce",
    category: "Admin / Analytics",
    metaTitle: "Admin Dashboard Case Study | Next.js & Prisma | CodeBaxh",
    metaDescription:
      "How CodeBaxh built RedeemX's admin panel — product and order management with Chart.js analytics, advanced data tables, and NextAuth role-based access on Next.js 14.",
    summary:
      "A product-and-order management dashboard with real-time analytics, advanced data tables, and role-based access — built on Next.js 14 and PostgreSQL.",
    overview: [
      "RedeemX needed a modern, highly interactive admin dashboard to manage product listings, process orders, track user activity, and analyze key business metrics in real time — replacing a patchwork of disconnected tools.",
      "We architected the dashboard logic, built the components, connected the APIs, and delivered seamless data visualization on a clean, theme-aware interface.",
    ],
    problem:
      "RedeemX managed products, orders, and users across disconnected tools, with no real-time view of the metrics that drive the business.",
    approach: [
      "Built dynamic data tables with server-side pagination, sorting, and filtering over PostgreSQL via Prisma.",
      "Visualized revenue, orders, and user growth with Chart.js in a theme-aware (light/dark) UI.",
      "Secured the panel with NextAuth role-based auth and protected routes and views.",
    ],
    solution:
      "A clean, scalable admin platform that centralizes product and order operations and surfaces real-time analytics — eliminating disconnected tools and speeding internal workflows.",
    highlights: [
      { title: "Advanced data tables", body: "Server-side pagination, sorting, and filtering with full CRUD over PostgreSQL." },
      { title: "Analytics dashboard", body: "Revenue trends, top products, user growth, and inventory via Chart.js." },
      { title: "Role-based auth", body: "Secure login and protected routes and views with NextAuth." },
      { title: "Light / dark mode", body: "Theme-aware UI with reusable modals, inputs, cards, and alerts." },
      { title: "Prisma + PostgreSQL", body: "Type-safe models and optimized paginated queries with indexing." },
      { title: "Responsive layout", body: "Sidebar navigation, sticky headers, and loading skeletons." },
    ],
    results: [
      { value: "Real-time", label: "Revenue & growth analytics" },
      { value: "Role-based", label: "Secure NextAuth access" },
      { value: "One platform", label: "Replaced disconnected tools" },
    ],
    techStack: ["Next.js", "PostgreSQL", "Prisma", "Chart.js", "NextAuth", "TypeScript", "Tailwind CSS"],
    serviceSlug: "web-development",
  },
  {
    slug: "landlord-academy-lms",
    client: "The Landlord Society",
    title: "A GoHighLevel-integrated LMS for a landlord academy",
    category: "LMS / EdTech",
    metaTitle: "LMS Backend Case Study | Node.js & GoHighLevel | CodeBaxh",
    metaDescription:
      "How CodeBaxh built the backend for a real-estate education LMS — course delivery, progress tracking, and GoHighLevel automation on Node.js, Express, and MongoDB.",
    summary:
      "A lean, automation-first LMS backend for landlords and property managers — course delivery and progress tracking wired into GoHighLevel for lead nurturing.",
    overview: [
      "The Landlord Society needed a Learning Management System built specifically for landlords and property managers — covering compliance, regulations, and investment strategies. Unlike heavyweight off-the-shelf LMS platforms, it had to be lean, fast, and tightly integrated with GoHighLevel for marketing and automation.",
      "We built the backend engine: content delivery, user onboarding, course-progress tracking, and automation hooks for lead nurturing and engagement.",
    ],
    problem:
      "The client needed an LMS tailored to landlords — compliance, regulations, and investment training — that was lean, fast, and tightly integrated with GoHighLevel for marketing automation, unlike heavyweight off-the-shelf platforms.",
    approach: [
      "Built REST APIs on Node.js and Express for course retrieval, enrollment, lesson tracking, and admin actions.",
      "Modeled dynamic courses, quizzes, and progress logs in MongoDB, with JWT auth and route protection.",
      "Integrated GoHighLevel via its API to trigger emails, SMS, and CRM actions on enrollment, lesson completion, and milestones.",
    ],
    solution:
      "A custom-coded backend that powers content delivery and progress tracking while automating the client's lead-nurturing funnel through GoHighLevel — centralized training with zero-code marketing automation on top.",
    highlights: [
      { title: "API-driven courses", body: "CRUD REST APIs for courses, lessons, and modules on Node.js and Express." },
      { title: "Progress tracking", body: "Enrollment, lesson completion, and progress logs modeled in MongoDB." },
      { title: "GoHighLevel automation", body: "Triggers emails, SMS, and CRM actions on enrollment and milestones." },
      { title: "JWT security", body: "Tokenized authentication and route protection for all actions." },
      { title: "Admin APIs", body: "Manage users, roles, and analytics behind the scenes." },
      { title: "Lean & documented", body: "Purpose-built endpoints with docs for frontend and admin usage." },
    ],
    results: [
      { value: "Automated", label: "GoHighLevel lead nurturing" },
      { value: "API-driven", label: "Courses, lessons & progress" },
      { value: "Lean & fast", label: "Purpose-built, not off-the-shelf" },
    ],
    techStack: ["Node.js", "Express", "MongoDB", "GoHighLevel", "JWT", "REST APIs"],
    serviceSlug: "api-backend-development",
  },
  {
    slug: "saas-mvp-11-weeks",
    client: "Multi-tenant SaaS startup",
    title: "A multi-tenant SaaS MVP, shipped in 11 weeks",
    category: "SaaS MVP",
    metaTitle: "11-Week SaaS MVP Case Study | Multi-Tenant SaaS | CodeBaxh",
    metaDescription:
      "How CodeBaxh delivered a launch-ready multi-tenant SaaS MVP — auth, billing, and dashboards — in 11 weeks, on architecture built to scale.",
    summary:
      "A launch-ready multi-tenant SaaS MVP — auth, billing, and dashboards — delivered in 11 weeks.",
    overview: [
      "A founder needed to validate a SaaS idea with real, paying users quickly — without the throwaway code that forces a rewrite the moment the product gets traction. We scoped the smallest viable product that still proved the core value, then built it on architecture designed to scale.",
      "Working in weekly loops with live demos, the founder steered the build as it came together, and the MVP launched in 11 weeks on a foundation that held up past launch.",
    ],
    problem:
      "A founder needed to validate a SaaS idea with real, paying users quickly — but couldn't afford the throwaway code that forces a rewrite the moment the product gets traction.",
    approach: [
      "Scoped the smallest viable product that still proved the core value.",
      "Built multi-tenant architecture, authentication, and Stripe billing from the start.",
      "Shipped in weekly loops with demos, so the founder steered as it came together.",
    ],
    solution:
      "A launched, multi-tenant SaaS application with secure tenant isolation, subscription billing, role-based access, and a customer dashboard — ready for real users in 11 weeks, on a foundation that scaled past launch.",
    highlights: [
      { title: "Tight MVP scope", body: "The smallest feature set that still proved the core value." },
      { title: "Multi-tenant from day one", body: "Secure tenant isolation built in, not retrofitted." },
      { title: "Stripe billing", body: "Live subscriptions and billing ready at launch." },
      { title: "Role-based access", body: "Authentication and RBAC for real customer accounts." },
      { title: "Customer dashboard", body: "A usable, polished dashboard for real users." },
      { title: "Weekly demos", body: "Short build loops kept the founder in control throughout." },
    ],
    results: [
      { value: "11 weeks", label: "Idea to launched MVP" },
      { value: "Multi-tenant", label: "Built to scale from day one" },
      { value: "Stripe billing", label: "Live subscriptions at launch" },
    ],
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Stripe", "AWS"],
    serviceSlug: "mvp-development",
  },
  {
    slug: "mydasma-wedding-platform",
    client: "MyDasma",
    title: "MyDasma — a wedding-planning marketplace across web and mobile",
    category: "Marketplace / Mobile",
    metaTitle: "Wedding Marketplace Case Study | React Native | CodeBaxh",
    metaDescription:
      "How CodeBaxh built MyDasma — a cross-platform wedding-planning marketplace connecting clients and planners, with product sales, on React Native, Next.js, and NestJS.",
    summary:
      "A cross-platform marketplace that connects couples with wedding planners and lets vendors buy and sell products and services.",
    overview: [
      "With growing demand for event services, finding a suitable wedding planner had become difficult — organizers struggled to reach clients profitably, and couples struggled to find the right fit. MyDasma bridges the gap with quick, efficient communication between planners and clients.",
      "Beyond connecting the two sides, the platform lets businesses buy and sell products and services, streamlining the whole event-planning process across web and mobile.",
    ],
    problem:
      "Finding the right wedding planner is hard, and event organizers struggle to reach clients profitably. Both sides lacked a single place to connect and transact.",
    approach: [
      "Built native mobile apps with React Native alongside a Next.js web app from a shared backend.",
      "Developed the marketplace, messaging, and vendor product/service listings on NestJS and MongoDB.",
      "Designed flows for fast, efficient client–planner communication and transactions.",
    ],
    solution:
      "A mobile and web platform that bridges wedding planners and clients, streamlines event planning, and gives businesses a marketplace to sell products and services — making the whole process more efficient and cost-effective.",
    highlights: [
      { title: "Cross-platform", body: "Native React Native apps plus a Next.js web app from a shared backend." },
      { title: "Planner–client matching", body: "Connects couples with the right wedding planners fast." },
      { title: "Built-in marketplace", body: "Vendors buy and sell products and services on the platform." },
      { title: "Efficient communication", body: "Streamlined messaging between clients and planners." },
      { title: "NestJS backend", body: "Scalable APIs and data modeling on MongoDB." },
      { title: "Cost-effective planning", body: "Makes the event-planning process more efficient end to end." },
    ],
    results: [
      { value: "Web + mobile", label: "Shared cross-platform build" },
      { value: "Two-sided", label: "Clients and planners connected" },
      { value: "Marketplace", label: "Buy and sell services" },
    ],
    techStack: ["React Native", "Next.js", "NestJS", "Node.js", "React", "MongoDB"],
    serviceSlug: "mobile-app-development",
  },
  {
    slug: "transit-rewards-app",
    client: "Transit Rewards",
    title: "Transit Rewards — rewarding greener commuting",
    category: "Mobile / Sustainability",
    metaTitle: "Transit Rewards App Case Study | MERN & Mobile | CodeBaxh",
    metaDescription:
      "How CodeBaxh built Transit Rewards — a mobile app that rewards commuters for choosing public transport, logging commute hours and redeeming points, on the MERN stack.",
    summary:
      "A mobile app that incentivizes public-transport use — commuters log hours, earn transit reward points, and redeem them for rewards.",
    overview: [
      "Daily commuting is frustrating — long waits and congestion push people toward private vehicles, driving up noise, carbon emissions, and VOCs. Transit Rewards encourages drivers to choose public transportation through a simple, rewarding incentive system.",
      "Commuters log their transit hours and earn reward points they can redeem later, making eco-friendly commuting habits easier to adopt.",
    ],
    problem:
      "Long waits and congestion push commuters toward private vehicles, raising emissions and noise. There was little incentive to choose public transport.",
    approach: [
      "Built cross-platform mobile apps with React Native on a MERN backend.",
      "Created a system for commuters to log commute hours and accrue reward points.",
      "Added redemption flows that turn points into rewards to reinforce eco-friendly habits.",
    ],
    solution:
      "A user-friendly rewards platform that encourages drivers to switch to public transportation — logging commute hours, earning points, and redeeming them — promoting a cleaner environment through positive incentives.",
    highlights: [
      { title: "Commute logging", body: "Users log transit hours through a user-friendly mobile app." },
      { title: "Reward points", body: "Earned points can be redeemed for rewards over time." },
      { title: "Eco incentives", body: "Positive incentives nudge people toward public transport." },
      { title: "Cross-platform mobile", body: "React Native app on a MERN backend." },
      { title: "Points engine", body: "Tracks hours and accrues rewards reliably." },
      { title: "Greener commuting", body: "Aims to cut emissions by shifting trips to transit." },
    ],
    results: [
      { value: "Points engine", label: "Log commutes, earn rewards" },
      { value: "Cross-platform", label: "React Native mobile" },
      { value: "Greener", label: "Incentivizes public transit" },
    ],
    techStack: ["React Native", "Next.js", "NestJS", "Node.js", "MongoDB", "Socket.io"],
    serviceSlug: "mobile-app-development",
  },
  {
    slug: "fika-wall-art-ecommerce",
    client: "Fika",
    title: "Fika — custom wall-art e-commerce",
    category: "E-commerce",
    metaTitle: "Custom Wall-Art E-commerce Case Study | MERN | CodeBaxh",
    metaDescription:
      "How CodeBaxh built Fika — an e-commerce platform for custom wall art with a browsable art library and a few-click ordering flow, on the MERN stack and AWS Amplify.",
    summary:
      "An e-commerce platform for custom wall art — browse a curated library, personalize, and order in a couple of clicks for doorstep delivery.",
    overview: [
      "Turning old, corroded walls into something imaginative takes creativity most vendors can't offer. Fika gives customers a one-stop platform to transform their walls with custom art, chosen from a comprehensive, themed library.",
      "Customers browse, personalize, and order in a couple of clicks — and the wall art is delivered to their door.",
    ],
    problem:
      "Customizing walls with art takes creativity most vendors can't offer, and customers had no easy way to browse and order personalized wall art online.",
    approach: [
      "Built a browsable, themed art library with a fast few-click ordering flow.",
      "Developed the storefront and backend on the MERN stack with a WordPress content layer.",
      "Deployed on AWS Amplify for scalable hosting.",
    ],
    solution:
      "A one-stop platform to transform tired walls — customers pick from a comprehensive image library, place an order in a couple of clicks, and get the wall art delivered to their door.",
    highlights: [
      { title: "Curated art library", body: "A comprehensive, themed collection to match any home." },
      { title: "Few-click ordering", body: "Browse to checkout in a couple of clicks." },
      { title: "Personalization", body: "Customize wall art to individual preferences." },
      { title: "MERN storefront", body: "Full-stack store with a WordPress content layer." },
      { title: "AWS Amplify hosting", body: "Scalable, reliable deployment." },
      { title: "Doorstep delivery", body: "From order to delivery, handled end to end." },
    ],
    results: [
      { value: "Few-click", label: "Browse-to-order flow" },
      { value: "Curated library", label: "Themed art selection" },
      { value: "Doorstep", label: "Order to delivery" },
    ],
    techStack: ["React", "Next.js", "NestJS", "Node.js", "MongoDB", "WordPress", "AWS Amplify"],
    serviceSlug: "web-development",
  },
  {
    slug: "chattin-realtime-chat",
    client: "Chattin",
    title: "Chattin — a real-time chat app with public and private channels",
    category: "Realtime / SaaS",
    metaTitle: "Real-Time Chat App Case Study | React & Socket.io | CodeBaxh",
    metaDescription:
      "How CodeBaxh built Chattin — a full-stack real-time chat platform with public/private channels, custom auth, and WebSocket messaging on React, Node.js, and MongoDB.",
    summary:
      "A full-stack real-time chat platform with public and private channels, custom authentication, and instant WebSocket messaging.",
    overview: [
      "Chattin is a real-time messaging platform for users who want to communicate in public forums or private channels, with the modern UX of tools like Slack or Discord — real-time delivery, secure authentication, and full control over room access and roles.",
      "Built end to end, it covers everything from socket-level communication and form logic to UI design and database modeling.",
    ],
    problem:
      "Users wanted a modern messaging experience — public forums and private channels with real-time delivery, access control, and a responsive UI, like Slack or Discord.",
    approach: [
      "Built a RESTful Node.js/Express backend with custom auth (hashed passwords, session tokens) and Mongoose schemas for users, messages, and channels.",
      "Integrated Socket.io for real-time, bi-directional message broadcasting.",
      "Built a responsive React UI with Tailwind and DaisyUI, form validation, and toast feedback.",
    ],
    solution:
      "A responsive, real-time messaging app with public and private channels, secure custom authentication, and access control — deployed on Vercel with a cloud MongoDB Atlas backend.",
    highlights: [
      { title: "Real-time messaging", body: "Instant, bi-directional delivery over Socket.io." },
      { title: "Public & private channels", body: "Room creation with access control and admin actions." },
      { title: "Custom authentication", body: "Hashed passwords and session tokens, built from scratch." },
      { title: "Responsive UI", body: "React, Tailwind, and DaisyUI with toast feedback and validation." },
      { title: "Mongoose data model", body: "Schemas for users, messages, and channels." },
      { title: "Deployed on Vercel", body: "Global delivery with a cloud MongoDB Atlas backend." },
    ],
    results: [
      { value: "Real-time", label: "Socket.io messaging" },
      { value: "Public + private", label: "Channels with access control" },
      { value: "Full-stack", label: "Auth, API, and UI" },
    ],
    techStack: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "Vercel", "Tailwind CSS"],
    serviceSlug: "web-development",
  },
  {
    slug: "snippetz-code-learning",
    client: "Snippetz",
    title: "Snippetz — microlearning for code with hover explanations",
    category: "EdTech / Dev Tools",
    metaTitle: "Code Snippet Platform Case Study | Next.js 14 | CodeBaxh",
    metaDescription:
      "How CodeBaxh built Snippetz — a developer platform sharing code snippets with line-by-line hover explanations, on Next.js 14, TypeScript, and Tailwind with SSR/SSG.",
    summary:
      "A developer platform for sharing code snippets with line-by-line hover explanations — so you only read the parts you don't already know.",
    overview: [
      "Learning code online usually means skimming long blog posts, tutorials, and videos — inefficient when you only need one line or logic pattern. Snippetz is a developer-first platform for sharing short, functional code snippets across languages and frameworks.",
      "The twist: each snippet carries line-by-line explanations that appear on hover, so you only consume what's new or confusing.",
    ],
    problem:
      "Learning from long tutorials and videos wastes time when you only need one line or pattern. Developers needed a faster way to grasp just the unfamiliar parts.",
    approach: [
      "Built a minimal, fast UI on Next.js 14 with SSR/SSG and dynamic snippet routing.",
      "Created a custom TypeScript tooltip system that reveals line-specific explanations on hover.",
      "Organized snippets by language, category, and tags with Markdown parsing for contributions.",
    ],
    solution:
      "A dev-first microlearning library where each snippet carries inline, line-by-line explanations on hover — fast, SEO-friendly, and designed so learners consume only what's new or confusing.",
    highlights: [
      { title: "Hover explanations", body: "Custom TypeScript tooltips reveal line-specific context on hover." },
      { title: "Microlearning", body: "Learn a single functionality without a full tutorial." },
      { title: "Organized library", body: "Snippets by language, category, and tags." },
      { title: "SSR + SSG", body: "Fast loads and SEO benefits from Next.js 14 rendering." },
      { title: "Markdown support", body: "Parsing for community-contributed snippets." },
      { title: "Minimal, dev-first UI", body: "Built for focus and distraction-free learning." },
    ],
    results: [
      { value: "Line-by-line", label: "Hover-to-explain code" },
      { value: "SSR + SSG", label: "Fast, SEO-ready pages" },
      { value: "Microlearning", label: "Learn only what's new" },
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Markdown"],
    serviceSlug: "nextjs-development",
  },
  {
    slug: "prowire-marketplace",
    client: "Prowire",
    title: "Prowire — a marketplace for professional services",
    category: "Marketplace",
    metaTitle: "Services Marketplace Case Study | React & Node | CodeBaxh",
    metaDescription:
      "How CodeBaxh built Prowire — an online marketplace and networking platform connecting professional service providers with buyers, on React, Angular, Node.js, and SQL.",
    summary:
      "An online marketplace and networking platform that lets professional service providers and buyers connect and transact.",
    overview: [
      "Prowire is an online marketplace and networking platform that lets professional service providers and buyers find each other and transact in one place.",
      "We built the full stack — a React and Angular front end on a Node.js and SQL backend — with flows for listing, discovery, and transactions.",
    ],
    problem:
      "Professional service providers and buyers lacked a single, trusted platform to find each other and transact efficiently.",
    approach: [
      "Built the marketplace front end with React and Angular.",
      "Developed the backend and APIs on Node.js with a SQL database.",
      "Implemented provider and buyer flows for listing, discovery, and transactions.",
    ],
    solution:
      "A marketplace and networking platform where professional service providers list their offerings and buyers discover and transact with them in one place.",
    highlights: [
      { title: "Two-sided marketplace", body: "Connects professional service providers with buyers." },
      { title: "Provider listings", body: "Providers publish their services for discovery." },
      { title: "Networking & transactions", body: "Buyers find providers and transact in one platform." },
      { title: "React & Angular front end", body: "Interactive UI across the platform." },
      { title: "Node.js + SQL backend", body: "APIs and structured data storage." },
      { title: "Marketplace flows", body: "Listing, discovery, and transaction handling." },
    ],
    results: [
      { value: "Two-sided", label: "Providers and buyers" },
      { value: "Marketplace", label: "Discover and transact" },
      { value: "Full-stack", label: "React, Angular & Node" },
    ],
    techStack: ["React", "Angular", "Node.js", "SQL", "JavaScript", "Bootstrap"],
    serviceSlug: "web-development",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
