import type { CaseStudy } from "./types";

const CODEBAXH_LED = "Designed and built by the CodeBaxh team.";
const FOUNDER_ENGINEER =
  "Our founder worked on this product as a full-stack engineer. It is not a CodeBaxh-led build.";

export const caseStudies: CaseStudy[] = [
  {
    slug: "gis-zoning-saas",
    clientName: "Zoneomics",
    clientNamePermission: false,
    title: "A GIS zoning platform that turns research into instant reports",
    metaTitle: "GIS Zoning SaaS Platform: Case Study",
    sector: "PropTech SaaS",
    category: "SaaS",
    summary:
      "A map-based real-estate zoning product with paid on-demand reports, role-based dashboards and deep search.",
    role: "founder-engineer",
    roleNote: FOUNDER_ENGINEER,
    problem: [
      "Real-estate professionals lost days collecting zoning and land-use data. They visited several city planning websites, queued at government offices and paid for each property report by hand.",
      "The workflow was slow and manual, and it could not scale.",
    ],
    approach: [
      "The platform was built on Next.js and NestJS, with a Mapbox GIS layer for parcel-level zoning overlays. Web scrapers and data pipelines collect zoning data from public municipal sources.",
      "Stripe Checkout and subscriptions handle paid report access. Role-based dashboards and deep search filters sit on top.",
    ],
    solution: [
      "A cloud-hosted SaaS on AWS that collects, processes and displays zoning data on an interactive map.",
      "Users search with detailed filters and buy reports online, instead of chasing paperwork across offices and websites.",
    ],
    built: [
      {
        title: "Interactive GIS mapping",
        body: "Mapbox zoning overlays with parcel-level zoom and land-use layers that can be switched on and off.",
      },
      {
        title: "Zoning search",
        body: "Deep filters across zone types, property types and square footage.",
      },
      {
        title: "Stripe payments and subscriptions",
        body: "On-demand report purchases and subscriptions with Stripe Checkout and webhooks.",
      },
      {
        title: "Automated data collection",
        body: "Web scrapers pull zoning data from public municipal sources, replacing manual record fetching.",
      },
      {
        title: "User dashboard",
        body: "Users manage subscriptions, purchases and saved searches in one place.",
      },
      {
        title: "AWS infrastructure",
        body: "EC2, S3 and Lambda with CI/CD pipelines to serve live map and search queries.",
      },
    ],
    stack: ["Next.js", "NestJS", "Stripe", "Mapbox", "PostgreSQL", "MongoDB", "AWS", "TypeScript"],
    results: [
      { text: "The platform grew to a large base of active users." },
      { text: "Property research that took days became available in minutes." },
      { text: "Zoning data coverage expanded across many cities." },
    ],
    services: ["saas-development", "payment-gateway-integration", "api-backend-development", "cloud-devops"],
    featured: true,
  },
  {
    slug: "legal-contract-ai",
    clientName: "",
    clientNamePermission: false,
    title: "Contract analysis with a multi-agent RAG pipeline",
    sector: "AI / LegalTech",
    category: "AI",
    summary:
      "Turns 500 to 1,000 page legal contracts into a queryable knowledge base that answers with cited sources.",
    role: "codebaxh-led",
    roleNote: CODEBAXH_LED,
    problem: [
      "Reviewing a long legal contract takes hours or days. Generic language models make things up when asked about legal text.",
      "The system had to give accurate answers that trace back to the actual contract language, across documents of 500 to 1,000 pages with complex clauses, tables and cross-references.",
    ],
    approach: [
      "We built an ingestion pipeline that parses and repairs complex document structure, so the models read clauses, tables and references correctly.",
      "Retrieval runs over a Qdrant vector database with query expansion and multi-step search. The work is split across agents for document processing, retrieval, query understanding and response generation, using OpenAI and Google Gemini models.",
    ],
    solution: [
      "A FastAPI platform where legal teams upload large contracts and ask questions in plain language.",
      "Each answer is generated from the retrieved contract sections, not from the model's memory, and points back to the source clauses.",
    ],
    built: [
      {
        title: "Document structure repair",
        body: "Parses and repairs complex layouts so clauses, tables and references are interpreted correctly.",
      },
      {
        title: "Advanced retrieval",
        body: "Query expansion and multi-step search find the right clauses in very long documents.",
      },
      {
        title: "Multi-agent workflow",
        body: "Separate agents handle processing, retrieval, query understanding and response generation.",
      },
      {
        title: "Cited answers",
        body: "Every response references the source clauses it was built from.",
      },
      {
        title: "Qdrant vector search",
        body: "Semantic similarity search across large document sets.",
      },
      {
        title: "FastAPI backend",
        body: "OpenAI and Gemini models sit behind a Python API that handles upload and querying.",
      },
    ],
    stack: ["Python", "FastAPI", "OpenAI", "Gemini", "Qdrant"],
    results: [
      { text: "Handles contracts of 500 to 1,000 pages with complex formatting." },
      { text: "Answers are grounded in retrieved text and cite the source clauses." },
      { text: "Static PDFs became a knowledge base that legal teams can query in plain language." },
    ],
    services: [
      "rag-knowledge-assistants",
      "ai-agent-development",
      "ai-integration",
      "llm-evaluation-guardrails",
    ],
    featured: true,
  },
  {
    slug: "multi-tenant-saas-mvp",
    clientName: "",
    clientNamePermission: false,
    title: "A multi-tenant SaaS MVP, from brief to launch",
    sector: "SaaS",
    category: "SaaS",
    summary:
      "Tenant isolation, subscription billing, role-based access and a customer dashboard, ready for real users on a tight timeline.",
    role: "codebaxh-led",
    roleNote: CODEBAXH_LED,
    problem: [
      "A founder needed to test a SaaS idea with real, paying users, and quickly.",
      "They could not afford throwaway code that would force a rewrite as soon as the product gained traction.",
    ],
    approach: [
      "We scoped the smallest product that still proved the core value. Multi-tenant architecture, authentication and Stripe billing were built in from the start.",
      "We shipped in weekly loops with live demos, so the founder steered the build as it came together.",
    ],
    solution: [
      "A launched multi-tenant SaaS application with secure tenant isolation, subscription billing, role-based access and a customer dashboard.",
      "It launched on schedule, on a foundation meant to last beyond launch.",
    ],
    built: [
      {
        title: "Tight MVP scope",
        body: "The smallest feature set that still proved the core value.",
      },
      {
        title: "Multi-tenancy from the start",
        body: "Secure tenant isolation built in, not added later.",
      },
      {
        title: "Stripe billing",
        body: "Subscriptions and billing live at launch.",
      },
      {
        title: "Role-based access",
        body: "Authentication and role-based permissions for real customer accounts.",
      },
      {
        title: "Customer dashboard",
        body: "A usable, finished dashboard for real users.",
      },
      {
        title: "Weekly demos",
        body: "Short build loops kept the founder in control throughout.",
      },
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Stripe", "AWS"],
    results: [
      { text: "From idea to a launched MVP on the agreed timeline." },
      { text: "Multi-tenant architecture in place from the first release." },
      { text: "Stripe subscriptions live at launch." },
    ],
    services: ["mvp-development", "saas-development", "payment-gateway-integration", "nextjs-development"],
    featured: true,
  },
  {
    slug: "omnichannel-messaging-saas",
    clientName: "Alive5",
    clientNamePermission: true,
    title: "An omnichannel messaging SaaS that unified five channels",
    sector: "Messaging SaaS",
    category: "SaaS",
    summary:
      "One real-time inbox for Facebook Messenger, Instagram, SMS, web chat and Google Business Messages, with templated replies.",
    role: "founder-engineer",
    roleNote: FOUNDER_ENGINEER,
    problem: [
      "Businesses handle conversations across Facebook Messenger, Instagram DMs, SMS, website chat and Google Business Messages.",
      "That split caused delays, missed replies and overloaded support teams.",
    ],
    approach: [
      "The work covered the full stack. Facebook Messenger, Instagram Graph, Google Business Messages and SMS gateways (Twilio, Nexmo) were integrated into a single inbox.",
      "A real-time conversation engine runs on Socket.io and Node.js, with Elasticsearch for message indexing and search. A CMS for saved replies, role-based access, filters and conversation labels completes the admin side.",
    ],
    solution: [
      "A central, real-time dashboard that brings every channel into one view.",
      "Messages are routed dynamically, and agents can see all active conversations across the team.",
    ],
    built: [
      {
        title: "Unified inbox",
        body: "Facebook, Instagram, SMS, web chat and Google Business Messages in a single real-time view.",
      },
      {
        title: "Real-time engine",
        body: "Two-way, event-driven messaging on Socket.io.",
      },
      {
        title: "Elasticsearch search",
        body: "Query and filter by platform, keyword, customer, status and agent.",
      },
      {
        title: "Built-in CMS",
        body: "Auto-responses, canned replies, saved messages and rich content editing.",
      },
      {
        title: "Role-based access",
        body: "Permissions, conversation labels and agent assignment across the team.",
      },
      {
        title: "Dynamic routing",
        body: "API-driven message routing with fallback handling and a mobile-friendly UI.",
      },
    ],
    stack: [
      "React",
      "Next.js",
      "Node.js",
      "Socket.io",
      "Elasticsearch",
      "MongoDB",
      "DynamoDB",
      "TypeScript",
    ],
    results: [
      { text: "Average response time to customers fell significantly." },
      { text: "Five messaging channels are handled in one inbox." },
      { text: "Agents work from a single real-time view with search, labels and assignment." },
    ],
    services: ["saas-development", "api-backend-development", "web-development"],
  },
  {
    slug: "home-equity-fintech-saas",
    clientName: "HomeRoyaltie",
    clientNamePermission: true,
    title: "A FinTech SaaS for home equity and second mortgages",
    sector: "FinTech SaaS",
    category: "SaaS",
    summary:
      "Real-time calculators, comparison dashboards and secure reports that explain home equity and second-mortgage options.",
    role: "founder-engineer",
    roleNote:
      "Our founder worked on this product as a senior full-stack developer. It is not a CodeBaxh-led build.",
    problem: [
      "Working out what a home is worth and how to borrow against it is confusing, risky and heavy on paperwork.",
      "People depend on loan officers and brokers just to compare their options.",
    ],
    approach: [
      "Responsive calculators and comparison dashboards were built on Next.js and NestJS, including a home-equity analyzer and a royalty versus second-mortgage simulator.",
      "Third-party property and loan APIs were integrated, and custom Puppeteer scrapers pull live lender rates and terms. The stack runs on AWS with role-based auth, encrypted sessions and CI/CD.",
    ],
    solution: [
      "A product that shows users their equity in real time and calculates eligibility from current asset value.",
      "It generates reports comparing traditional and royalty-based financing, so users rely less on brokers.",
    ],
    built: [
      {
        title: "Home equity analyzer",
        body: "Calculates equity in real time using current market rates.",
      },
      {
        title: "Royalty model simulator",
        body: "Compares second-mortgage and revenue-sharing financing side by side.",
      },
      {
        title: "Live rate scraping",
        body: "Custom Puppeteer scrapers pull lender terms and competitor rates.",
      },
      {
        title: "Personal dashboard",
        body: "Reports, uploaded documents and funding timelines for each user.",
      },
      {
        title: "Secure REST APIs",
        body: "Custom APIs for equity, loan and payment simulations.",
      },
      {
        title: "AWS CI/CD",
        body: "EC2, S3 and CodePipeline with version-controlled automatic deployment.",
      },
    ],
    stack: ["Next.js", "NestJS", "Node.js", "AWS", "MongoDB", "Puppeteer", "TypeScript"],
    results: [
      { text: "Equity and eligibility calculators run in real time." },
      { text: "Lender rates are collected automatically instead of by hand." },
      { text: "The platform runs on a secured AWS stack with automated deployment." },
    ],
    services: ["saas-development", "nextjs-development", "api-backend-development", "cloud-devops"],
  },
  {
    slug: "ai-call-analysis",
    clientName: "Lead Rescue",
    clientNamePermission: true,
    title: "AI call analysis with speech recognition and lead scoring",
    sector: "AI / Sales",
    category: "AI",
    summary:
      "Transcribes customer calls, scores lead intent with GPT and NLP, and alerts sales teams to hot opportunities in real time.",
    role: "codebaxh-led",
    roleNote: CODEBAXH_LED,
    problem: [
      "Teams recorded a high volume of calls but could not review them at scale.",
      "They lost insight into lead quality, sentiment and follow-ups, and missed high-value prospects.",
    ],
    approach: [
      "We built an automatic speech recognition pipeline that turns recorded calls into searchable text.",
      "GPT and NLP analysis then detects intent, objections and sentiment, and computes a lead heat score. Real-time alerts and a Node.js and WebRTC backend handle growing call volume.",
    ],
    solution: [
      "A call intelligence system that converts raw recordings into transcripts, insights and lead scores.",
      "Sales teams focus on the most promising leads and respond to opportunities as they appear, without listening to every call.",
    ],
    built: [
      {
        title: "Automatic transcription",
        body: "Speech recognition converts recorded calls into searchable transcripts.",
      },
      {
        title: "Conversation analysis",
        body: "GPT and NLP detect interest, objections, sentiment and intent.",
      },
      {
        title: "Lead heat scoring",
        body: "Scores rank prospects by how likely they are to convert.",
      },
      {
        title: "Real-time alerts",
        body: "Teams are notified of hot opportunities and potential problems as they surface.",
      },
      {
        title: "Structured insights",
        body: "Summaries, action items and scores are stored for search and review.",
      },
      {
        title: "Scalable backend",
        body: "Node.js and WebRTC handle growing call volume.",
      },
    ],
    stack: ["Node.js", "GPT", "LLaMA", "Automatic Speech Recognition", "WebRTC", "MySQL"],
    results: [
      { text: "Processes batches of calls in minutes." },
      { text: "Intent and lead heat scoring run automatically on every call." },
      { text: "Sales teams get real-time alerts on hot opportunities." },
    ],
    services: ["voice-call-ai", "ai-integration", "api-backend-development"],
  },
  {
    slug: "ai-business-consultant-chatbot",
    clientName: "",
    clientNamePermission: false,
    title: "An AI business consultancy chatbot for multi-department strategy",
    metaTitle: "AI Business Consultant Chatbot: Case Study",
    sector: "AI business tooling",
    category: "AI",
    summary:
      "A conversational AI advisor that asks targeted questions and returns recommendations across marketing, HR, finance, operations, strategy and IT.",
    role: "codebaxh-led",
    roleNote: CODEBAXH_LED,
    problem: [
      "Small teams cannot afford a full consulting engagement for every decision. Long forms and reports slow them down.",
      "They needed fast, structured guidance for each department.",
    ],
    approach: [
      "We designed a conversational flow that leads the user through a structured consultation with simple, targeted questions.",
      "OpenAI models and NLP interpret intent and generate balanced recommendations. The app is built as a SaaS-style web platform that can take new models and features.",
    ],
    solution: [
      "A digital advisor that learns about a business challenge through conversation.",
      "It returns practical recommendations across marketing, HR, finance, operations, strategy and IT.",
    ],
    built: [
      {
        title: "Guided consultation",
        body: "A conversational flow replaces long forms with simple, targeted questions.",
      },
      {
        title: "Multi-department advice",
        body: "Marketing, HR, operations, finance, strategy and IT guidance in one tool.",
      },
      {
        title: "Context-aware output",
        body: "NLP interprets intent to produce balanced, practical recommendations.",
      },
      {
        title: "OpenAI integration",
        body: "Generative AI plays the role of a business consultant in the conversation.",
      },
      {
        title: "SaaS-style web app",
        body: "A web architecture ready for new features and new models.",
      },
    ],
    stack: ["OpenAI", "Node.js", "Next.js"],
    results: [
      { text: "Covers marketing, HR, finance, operations, strategy and IT in one conversation." },
      { text: "Users get guidance through guided questions, not forms." },
      { text: "The build is ready for additional models and features." },
    ],
    services: ["ai-chatbot-development", "ai-integration", "nextjs-development"],
  },
  {
    slug: "redeemx-admin-dashboard",
    clientName: "RedeemX",
    clientNamePermission: true,
    title: "An analytics-rich admin dashboard for e-commerce",
    sector: "Admin / Analytics",
    category: "Web",
    summary:
      "A product and order management dashboard with real-time analytics, advanced data tables and role-based access.",
    role: "codebaxh-led",
    roleNote: CODEBAXH_LED,
    problem: [
      "Products, orders and users were managed across disconnected tools.",
      "There was no real-time view of the metrics that drive the business.",
    ],
    approach: [
      "We built data tables with server-side pagination, sorting and filtering over PostgreSQL through Prisma.",
      "Revenue, orders and user growth are charted with Chart.js in a light and dark themed UI. NextAuth secures the panel with role-based auth and protected routes.",
    ],
    solution: [
      "A clean admin platform that puts product and order operations in one place.",
      "It shows live analytics and removes the need to switch between separate tools.",
    ],
    built: [
      {
        title: "Advanced data tables",
        body: "Server-side pagination, sorting and filtering with full CRUD over PostgreSQL.",
      },
      {
        title: "Analytics dashboard",
        body: "Revenue trends, top products, user growth and inventory charted with Chart.js.",
      },
      {
        title: "Role-based auth",
        body: "Secure login with protected routes and views through NextAuth.",
      },
      {
        title: "Light and dark mode",
        body: "A themed UI with reusable modals, inputs, cards and alerts.",
      },
      {
        title: "Prisma and PostgreSQL",
        body: "Type-safe models and indexed, paginated queries.",
      },
      {
        title: "Responsive layout",
        body: "Sidebar navigation, sticky headers and loading skeletons.",
      },
    ],
    stack: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Chart.js",
      "NextAuth",
      "TypeScript",
      "Tailwind CSS",
    ],
    results: [
      { text: "Revenue and growth analytics are visible in real time." },
      { text: "Access is controlled by role through NextAuth." },
      { text: "One platform replaced a set of disconnected tools." },
    ],
    services: ["web-development", "nextjs-development", "api-backend-development"],
  },
  {
    slug: "landlord-academy-lms",
    clientName: "The Landlord Society",
    clientNamePermission: true,
    title: "A GoHighLevel-integrated LMS backend for a landlord academy",
    sector: "LMS / EdTech",
    category: "Web",
    summary:
      "A lean LMS backend for landlords and property managers, with course delivery and progress tracking wired into GoHighLevel.",
    role: "codebaxh-led",
    roleNote: CODEBAXH_LED,
    problem: [
      "The client needed a learning platform built for landlords and property managers, covering compliance, regulations and investment strategy.",
      "Off-the-shelf LMS products were too heavy. This one had to be lean, fast and tightly integrated with GoHighLevel for marketing automation.",
    ],
    approach: [
      "We built REST APIs on Node.js and Express for course retrieval, enrolment, lesson tracking and admin actions. Courses, quizzes and progress logs are modelled in MongoDB, with JWT auth and route protection.",
      "The GoHighLevel API triggers emails, SMS and CRM actions on enrolment, lesson completion and milestones.",
    ],
    solution: [
      "A custom backend that delivers course content and tracks progress.",
      "It also drives the client's lead-nurturing funnel through GoHighLevel, so training and marketing automation work together.",
    ],
    built: [
      {
        title: "Course APIs",
        body: "CRUD REST APIs for courses, lessons and modules on Node.js and Express.",
      },
      {
        title: "Progress tracking",
        body: "Enrolment, lesson completion and progress logs modelled in MongoDB.",
      },
      {
        title: "GoHighLevel automation",
        body: "Emails, SMS and CRM actions fire on enrolment and milestones.",
      },
      {
        title: "JWT security",
        body: "Token-based authentication and route protection for all actions.",
      },
      {
        title: "Admin APIs",
        body: "Endpoints to manage users, roles and analytics.",
      },
      {
        title: "Documentation",
        body: "Purpose-built endpoints documented for frontend and admin use.",
      },
    ],
    stack: ["Node.js", "Express", "MongoDB", "GoHighLevel", "JWT", "REST APIs"],
    results: [
      { text: "Lead nurturing runs automatically through GoHighLevel." },
      { text: "Courses, lessons and progress are served through documented APIs." },
      { text: "The client has a purpose-built backend in place of an off-the-shelf LMS." },
    ],
    services: ["api-backend-development", "web-development"],
  },
  {
    slug: "mydasma-wedding-platform",
    clientName: "MyDasma",
    clientNamePermission: true,
    title: "A wedding planning marketplace across web and mobile",
    sector: "Marketplace / Mobile",
    category: "Mobile",
    summary:
      "A cross-platform marketplace that connects couples with wedding planners and lets vendors buy and sell products and services.",
    role: "codebaxh-led",
    roleNote: CODEBAXH_LED,
    problem: [
      "Finding the right wedding planner is hard, and event organisers struggle to reach clients profitably.",
      "Both sides lacked a single place to connect and transact.",
    ],
    approach: [
      "We built mobile apps with React Native and a Next.js web app on a shared backend.",
      "The marketplace, messaging and vendor listings run on NestJS and MongoDB. Flows were designed for quick communication and transactions between clients and planners.",
    ],
    solution: [
      "A mobile and web platform that connects wedding planners with clients and simplifies event planning.",
      "Businesses also get a marketplace to sell products and services.",
    ],
    built: [
      {
        title: "Cross-platform apps",
        body: "React Native mobile apps and a Next.js web app on a shared backend.",
      },
      {
        title: "Planner and client matching",
        body: "Couples find suitable wedding planners quickly.",
      },
      {
        title: "Built-in marketplace",
        body: "Vendors buy and sell products and services on the platform.",
      },
      {
        title: "Messaging",
        body: "Direct communication between clients and planners.",
      },
      {
        title: "NestJS backend",
        body: "APIs and data modelling on MongoDB.",
      },
    ],
    stack: ["React Native", "Next.js", "NestJS", "Node.js", "React", "MongoDB"],
    results: [
      { text: "Web and mobile apps shipped on one shared backend." },
      { text: "Couples and planners connect and communicate in one place." },
      { text: "Vendors can list and sell products and services." },
    ],
    services: ["mobile-app-development", "web-development", "api-backend-development"],
  },
  {
    slug: "transit-rewards-app",
    clientName: "Transit Rewards",
    clientNamePermission: true,
    title: "A mobile app that rewards greener commuting",
    sector: "Mobile / Sustainability",
    category: "Mobile",
    summary:
      "Commuters log their public transport hours, earn reward points and redeem them for rewards.",
    role: "codebaxh-led",
    roleNote: CODEBAXH_LED,
    problem: [
      "Long waits and congestion push commuters toward private vehicles, which raises emissions and noise.",
      "There was little incentive to choose public transport.",
    ],
    approach: [
      "We built cross-platform mobile apps with React Native on a Node.js and MongoDB backend.",
      "Commuters log their transit hours and collect reward points. Redemption flows turn those points into rewards.",
    ],
    solution: [
      "A simple rewards platform that encourages drivers to switch to public transport.",
      "Users log commute hours, earn points and redeem them, which supports greener commuting habits.",
    ],
    built: [
      {
        title: "Commute logging",
        body: "Users log transit hours in the mobile app.",
      },
      {
        title: "Points engine",
        body: "Tracks logged hours and accrues reward points.",
      },
      {
        title: "Reward redemption",
        body: "Earned points can be redeemed for rewards over time.",
      },
      {
        title: "Cross-platform mobile",
        body: "One React Native codebase for the mobile apps.",
      },
    ],
    stack: ["React Native", "Next.js", "NestJS", "Node.js", "MongoDB", "Socket.io"],
    results: [
      { text: "A points engine for logging commutes and earning rewards." },
      { text: "Cross-platform mobile apps built with React Native." },
      { text: "A working incentive scheme for choosing public transport." },
    ],
    services: ["mobile-app-development", "api-backend-development"],
  },
  {
    slug: "fika-wall-art-ecommerce",
    clientName: "Fika",
    clientNamePermission: true,
    title: "Custom wall art e-commerce",
    sector: "E-commerce",
    category: "E-commerce",
    summary:
      "An online store for custom wall art. Customers browse a themed library, personalise a piece and order for delivery to their door.",
    role: "codebaxh-led",
    roleNote: CODEBAXH_LED,
    problem: [
      "Decorating walls with custom art takes creativity that most vendors cannot offer.",
      "Customers had no easy way to browse and order personalised wall art online.",
    ],
    approach: [
      "We built a themed art library that is easy to browse, with a short ordering flow.",
      "The storefront and backend run on a JavaScript stack with a WordPress content layer, hosted on AWS Amplify.",
    ],
    solution: [
      "A single platform for transforming tired walls.",
      "Customers pick from a wide image library, place an order in a few clicks and have the wall art delivered.",
    ],
    built: [
      {
        title: "Curated art library",
        body: "A wide, themed collection to suit different homes.",
      },
      {
        title: "Short ordering flow",
        body: "From browsing to checkout in a few clicks.",
      },
      {
        title: "Personalisation",
        body: "Customers adjust wall art to their own preferences.",
      },
      {
        title: "Storefront and backend",
        body: "A full-stack store with a WordPress content layer.",
      },
      {
        title: "AWS Amplify hosting",
        body: "Managed deployment and hosting on AWS.",
      },
    ],
    stack: ["React", "Next.js", "NestJS", "Node.js", "MongoDB", "WordPress", "AWS Amplify"],
    results: [
      { text: "A short flow from browsing to order." },
      { text: "A curated, themed library of wall art." },
      { text: "Orders are fulfilled through to doorstep delivery." },
    ],
    services: ["web-development", "nextjs-development", "cloud-devops"],
  },
  {
    slug: "chattin-realtime-chat",
    clientName: "Chattin",
    clientNamePermission: true,
    title: "A real-time chat app with public and private channels",
    sector: "Realtime / SaaS",
    category: "Web",
    summary:
      "A full-stack chat platform with public and private channels, custom authentication and instant WebSocket messaging.",
    role: "codebaxh-led",
    roleNote: CODEBAXH_LED,
    problem: [
      "Users wanted a modern messaging experience with public forums and private channels.",
      "It needed real-time delivery, access control and a responsive UI, in the style of Slack or Discord.",
    ],
    approach: [
      "We built a REST backend on Node.js and Express with custom auth (hashed passwords and session tokens) and Mongoose schemas for users, messages and channels.",
      "Socket.io handles two-way message broadcasting. The React UI uses Tailwind and DaisyUI, with form validation and toast feedback.",
    ],
    solution: [
      "A responsive real-time messaging app with public and private channels, secure custom authentication and access control.",
      "It is deployed on Vercel with a MongoDB Atlas database.",
    ],
    built: [
      {
        title: "Real-time messaging",
        body: "Instant two-way delivery over Socket.io.",
      },
      {
        title: "Public and private channels",
        body: "Room creation with access control and admin actions.",
      },
      {
        title: "Custom authentication",
        body: "Hashed passwords and session tokens, written from scratch.",
      },
      {
        title: "Responsive UI",
        body: "React, Tailwind and DaisyUI with validation and toast feedback.",
      },
      {
        title: "Data model",
        body: "Mongoose schemas for users, messages and channels.",
      },
      {
        title: "Deployment",
        body: "Hosted on Vercel with a cloud MongoDB Atlas backend.",
      },
    ],
    stack: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "Vercel", "Tailwind CSS"],
    results: [
      { text: "Real-time messaging over Socket.io." },
      { text: "Public and private channels with access control." },
      { text: "Auth, API and UI delivered as one full-stack build." },
    ],
    services: ["web-development", "api-backend-development"],
  },
  {
    slug: "snippetz-code-learning",
    clientName: "Snippetz",
    clientNamePermission: true,
    title: "Microlearning for code with hover explanations",
    sector: "EdTech / Dev Tools",
    category: "Web",
    summary:
      "A developer platform for sharing code snippets with line-by-line explanations on hover, so readers only study the parts they do not know.",
    role: "codebaxh-led",
    roleNote: CODEBAXH_LED,
    problem: [
      "Learning from long tutorials and videos wastes time when you only need one line or pattern.",
      "Developers needed a faster way to understand just the unfamiliar parts.",
    ],
    approach: [
      "We built a minimal, fast UI on Next.js with server rendering, static generation and dynamic snippet routes.",
      "A custom TypeScript tooltip system reveals an explanation for each line on hover. Snippets are organised by language, category and tags, with Markdown parsing for contributions.",
    ],
    solution: [
      "A developer-first library of short, working code snippets across languages and frameworks.",
      "Each snippet carries inline explanations on hover, so learners read only what is new or confusing.",
    ],
    built: [
      {
        title: "Hover explanations",
        body: "Custom TypeScript tooltips show context for a specific line on hover.",
      },
      {
        title: "Organised library",
        body: "Snippets sorted by language, category and tags.",
      },
      {
        title: "SSR and SSG",
        body: "Next.js rendering for fast loads and search-friendly pages.",
      },
      {
        title: "Markdown support",
        body: "Parsing for community-contributed snippets.",
      },
      {
        title: "Minimal UI",
        body: "Built for focus and distraction-free learning.",
      },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Markdown"],
    results: [
      { text: "Line-by-line explanations appear on hover." },
      { text: "Pages are server-rendered or statically generated for speed and SEO." },
      { text: "Learners can pick up a single technique without a full tutorial." },
    ],
    services: ["nextjs-development", "web-development"],
  },
  {
    slug: "prowire-marketplace",
    clientName: "Prowire",
    clientNamePermission: true,
    title: "A marketplace for professional services",
    sector: "Marketplace",
    category: "Web",
    summary:
      "An online marketplace and networking platform where professional service providers and buyers connect and transact.",
    role: "codebaxh-led",
    roleNote: CODEBAXH_LED,
    problem: [
      "Professional service providers and buyers lacked a single, trusted platform to find each other.",
      "Transacting across separate channels was inefficient.",
    ],
    approach: [
      "We built the marketplace front end with React and Angular, and the backend and APIs on Node.js with a SQL database.",
      "Provider and buyer flows cover listing, discovery and transactions.",
    ],
    solution: [
      "A marketplace and networking platform where providers list their services.",
      "Buyers discover providers and transact with them in one place.",
    ],
    built: [
      {
        title: "Two-sided marketplace",
        body: "Connects professional service providers with buyers.",
      },
      {
        title: "Provider listings",
        body: "Providers publish their services for discovery.",
      },
      {
        title: "Discovery and transactions",
        body: "Buyers find providers and transact on the platform.",
      },
      {
        title: "Front end",
        body: "Interactive UI built with React and Angular.",
      },
      {
        title: "Backend",
        body: "Node.js APIs with structured SQL storage.",
      },
    ],
    stack: ["React", "Angular", "Node.js", "SQL", "JavaScript", "Bootstrap"],
    results: [
      { text: "Providers and buyers meet on one platform." },
      { text: "Listing, discovery and transaction flows shipped." },
      { text: "Delivered as a full-stack build across front end, API and database." },
    ],
    services: ["web-development", "api-backend-development"],
  },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);
