import {
  siAnsible,
  siAnthropic,
  siAsana,
  siCloudflare,
  siCypress,
  siDatadog,
  siDigitalocean,
  siEslint,
  siGithubactions,
  siGooglecloud,
  siGrafana,
  siJest,
  siK6,
  siKubernetes,
  siLinux,
  siNetlify,
  siNginx,
  siPrometheus,
  siPytest,
  siSelenium,
  siSentry,
  siSonarqubeserver,
  siTerraform,
  siTestinglibrary,
  siVitest,
  siClickup,
  siConfluence,
  siDiscord,
  siDocker,
  siFastapi,
  siFigma,
  siGithub,
  siGooglegemini,
  siGooglemeet,
  siJira,
  siLangchain,
  siLinear,
  siLoom,
  siMiro,
  siMongodb,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siNotion,
  siPostgresql,
  siPostman,
  siPython,
  siReact,
  siRedis,
  siStripe,
  siSupabase,
  siTailwindcss,
  siTrello,
  siTypescript,
  siVercel,
  siWhatsapp,
  siZoom,
  type SimpleIcon,
} from "simple-icons";

/**
 * Tools shown in the "Tools" section, grouped by purpose. Most icons come from
 * simple-icons (CC0) and are served as small static SVG files by
 * app/tool-icons/[icon]/route.ts. AWS and Microsoft are not in that set, so they
 * have a `mark` drawn in components/sections/tool-logos.tsx.
 */
export type Tool = SimpleIcon | { title: string; slug: string; mark: "aws" | "microsoft" };

const aws: Tool = { title: "AWS", slug: "aws", mark: "aws" };
const azure: Tool = { title: "Microsoft Azure", slug: "azure", mark: "microsoft" };
const teams: Tool = { title: "Microsoft Teams", slug: "teams", mark: "microsoft" };

export const toolGroups: { title: string; note: string; tools: Tool[] }[] = [
  {
    title: "Development",
    note: "The languages, frameworks and AI tooling we build with.",
    tools: [
      siNextdotjs, siReact, siTypescript, siNodedotjs, siNestjs, siPython, siFastapi, siPostgresql, siMongodb,
      siRedis, siSupabase, siTailwindcss, siStripe, siAnthropic, siGooglegemini, siLangchain, siGithub,
    ],
  },
  {
    title: "Cloud and infrastructure",
    note: "Cloud hosting, CI/CD pipelines, containers, infrastructure as code and monitoring.",
    tools: [
      aws, azure, siGooglecloud, siVercel, siCloudflare, siDigitalocean, siNetlify, siDocker, siKubernetes, siTerraform,
      siAnsible, siGithubactions, siNginx, siLinux, siGrafana, siPrometheus, siDatadog, siSentry,
    ],
  },
  {
    title: "QA and testing",
    note: "Unit, integration, end-to-end, API and load testing, plus static analysis, on every release.",
    tools: [siJest, siVitest, siTestinglibrary, siCypress, siSelenium, siPytest, siPostman, siK6, siSonarqubeserver, siEslint],
  },
  {
    title: "Project management",
    note: "We work in your tracker, or set one up.",
    tools: [siJira, siLinear, siNotion, siClickup, siTrello, siAsana, siConfluence, siFigma, siMiro],
  },
  {
    title: "Client communication",
    note: "Weekly demos and written updates, wherever your team already talks.",
    tools: [teams, siZoom, siGooglemeet, siLoom, siWhatsapp, siDiscord],
  },
];

/** Every tool that has a simple-icons glyph: one static SVG file each. */
export const iconTools = toolGroups.flatMap((g) => g.tools).filter((t): t is SimpleIcon => !("mark" in t));
