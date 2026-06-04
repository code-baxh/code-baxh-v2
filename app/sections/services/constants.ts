export type ServiceCategory = "recruit" | "build";

export type Service = {
  title: string;
  description: string;
  category: ServiceCategory;
};

export const RECRUITMENT_SERVICES: Service[] = [
  {
    category: "recruit",
    title: "Tech recruitment",
    description:
      "Permanent and contract hires across all levels — from in-house teams to remote specialists, with real-time market insight.",
  },
  {
    category: "recruit",
    title: "Contractor package",
    description:
      "Compliance, onboarding, and payroll handled end-to-end. Agent of record, payment flows, and ongoing contractor tracking.",
  },
  {
    category: "recruit",
    title: "Market expertise",
    description:
      "Consultants who know the tech landscape deeply — specialty, knowledge, and connections to talent others miss.",
  },
];

export const BUILD_SERVICES: Service[] = [
  {
    category: "build",
    title: "Websites",
    description:
      "Fast, polished sites built with modern stacks — from marketing pages to full product experiences.",
  },
  {
    category: "build",
    title: "Software",
    description:
      "Custom tools, dashboards, and platforms tailored to how your team actually works.",
  },
  {
    category: "build",
    title: "Collaboration",
    description:
      "We embed with your team, ship in iterations, and keep communication clear from kickoff to launch.",
  },
];
