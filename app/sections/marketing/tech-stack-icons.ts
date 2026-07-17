import { TECH_STACK } from "../../lib/services";

const ICON_BASE = "/techstack";

function iconPath(filename: string) {
  return `${ICON_BASE}/${encodeURIComponent(filename)}`;
}

const TECH_ICON_FILES: Record<(typeof TECH_STACK)[number], string> = {
  "Next.js": iconPath("Next.js Icon.svg"),
  React: iconPath("React Icon.svg"),
  "React Native": iconPath("React Icon.svg"),
  Angular: iconPath("AngularJS Icon.svg"),
  Flutter: iconPath("Flutter Icon.svg"),
  TypeScript: iconPath("TypeScript Icon.svg"),
  "Node.js": iconPath("Node.js Icon.svg"),
  NestJS: iconPath("Nest.js Icon.svg"),
  Python: iconPath("Python Icon.svg"),
  FastAPI: iconPath("FastAPI Icon.svg"),
  PHP: iconPath("PHP Icon.svg"),
  Laravel: iconPath("Laravel Icon.svg"),
  "Strapi (headless CMS)": "",
  PostgreSQL: iconPath("PostgresSQL Icon.svg"),
  MySQL: iconPath("MySQL Icon.svg"),
  MongoDB: iconPath("MongoDB Icon.svg"),
  Redis: iconPath("Redis Icon.svg"),
  Supabase: iconPath("Supabase Icon.svg"),
  AWS: iconPath("AWS Icon.svg"),
  Azure: iconPath("Azure Icon.svg"),
  Docker: iconPath("Docker Icon.svg"),
  "Tailwind CSS": iconPath("Tailwind CSS Icon.svg"),
  Bootstrap: iconPath("Bootstrap Icon.svg"),
  Stripe: iconPath("Stripe Payment Icon.svg"),
  OpenAI: iconPath("OpenAI Brand Logo.svg"),
  Anthropic: iconPath("Anthropic Icon.svg"),
};

export type TechStackItem = {
  name: (typeof TECH_STACK)[number];
  icon?: string;
};

export const TECH_STACK_ITEMS: TechStackItem[] = TECH_STACK.map((name) => {
  const icon = TECH_ICON_FILES[name];
  return { name, icon: icon || undefined };
});
