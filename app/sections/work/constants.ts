export type WorkItem = {
  title: string;
  category: "Recruitment" | "Build";
  description: string;
};

export const WORK_ITEMS: WorkItem[] = [
  {
    category: "Build",
    title: "Client product platform",
    description:
      "Full-stack web application shipped with a product team — architecture, UI, and deployment.",
  },
  {
    category: "Recruitment",
    title: "Engineering team placement",
    description:
      "Permanent and contract hires placed across frontend, backend, and DevOps roles.",
  },
  {
    category: "Build",
    title: "Marketing site & brand system",
    description:
      "Modern marketing site with dual-theme design system and performance-first delivery.",
  },
  {
    category: "Recruitment",
    title: "Contractor compliance rollout",
    description:
      "Agent-of-record setup, onboarding workflows, and payroll for a distributed contractor bench.",
  },
];
