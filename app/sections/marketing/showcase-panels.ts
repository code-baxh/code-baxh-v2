export type ShowcasePanel = {
  tag: string;
  title: string;
  body: string;
  points: string[];
  href: string;
  cta: string;
};

export const SHOWCASE_PANELS: ShowcasePanel[] = [
  {
    tag: "01 · Web & Mobile",
    title: "Web & mobile apps your users love",
    body: "Fast, polished web apps and cross-platform mobile apps — built once, shipped to every screen.",
    points: ["Next.js & React on the web", "React Native for iOS & Android", "Design, build, and launch"],
    href: "/services/web-development",
    cta: "Web development",
  },
  {
    tag: "02 · SaaS Platforms",
    title: "SaaS platforms, from MVP to scale",
    body: "Secure multi-tenant SaaS with billing, auth, and dashboards — on architecture that grows with you.",
    points: ["Multi-tenant architecture", "Stripe billing & subscriptions", "MVP delivered in 11 weeks"],
    href: "/services/saas-development",
    cta: "SaaS development",
  },
  {
    tag: "03 · AI Products",
    title: "AI features that actually work",
    body: "RAG pipelines, LLM features, and AI agents grounded in your data — accurate, evaluated, and cost-controlled.",
    points: ["RAG & vector search", "OpenAI & Anthropic", "Chatbots & AI agents"],
    href: "/services/ai-integration",
    cta: "AI integration",
  },
];
