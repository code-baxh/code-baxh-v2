export type ServiceCategory = "recruit" | "build";

export type Service = {
  title: string;
  description: string;
  category: ServiceCategory;
};

/**
 * Featured services for homepage stacking section.
 * Displayed as cards in the "What we build" stack section.
 */
export const FEATURED_SERVICES: Service[] = [
  {
    category: "build",
    title: "Web Development",
    description:
      "Fast, polished web apps built with modern stacks — from marketing pages to full product experiences.",
  },
  {
    category: "build",
    title: "SaaS Development",
    description:
      "Secure multi-tenant SaaS with billing, auth, and dashboards — on architecture that grows with you.",
  },
  {
    category: "build",
    title: "AI Integration",
    description:
      "RAG pipelines, LLM features, and AI agents grounded in your data — accurate, evaluated, and cost-controlled.",
  },
  {
    category: "build",
    title: "Mobile Apps",
    description:
      "Cross-platform iOS and Android apps with React Native — shipped fast, updated faster.",
  },
];
