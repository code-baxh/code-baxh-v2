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
import { AutoTabs } from "@/components/ui/auto-tabs";

/**
 * Logos of the tools we work in, grouped by purpose. Most icons come from
 * simple-icons (CC0); AWS and Microsoft are not in that set, so they are drawn
 * here. Every logo is shown in its brand colour on a white badge, so dark
 * logos stay visible in the dark theme.
 */
type Tool = SimpleIcon | { title: string; slug: string; mark: React.ReactNode };

const microsoftMark = (
  <svg aria-hidden viewBox="0 0 24 24" className="size-[1.05rem]">
    <rect x="1" y="1" width="10.5" height="10.5" fill="#F25022" />
    <rect x="12.5" y="1" width="10.5" height="10.5" fill="#7FBA00" />
    <rect x="1" y="12.5" width="10.5" height="10.5" fill="#00A4EF" />
    <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900" />
  </svg>
);
const awsMark = (
  <svg aria-hidden viewBox="0 0 24 24" className="size-[1.25rem]">
    <text x="12" y="13" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="10" fill="#232F3E">
      aws
    </text>
    <path d="M4 16.5c4.5 2.6 11.5 2.6 16 0" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" fill="none" />
  </svg>
);
const aws: Tool = { title: "AWS", slug: "aws", mark: awsMark };
const azure: Tool = { title: "Microsoft Azure", slug: "azure", mark: microsoftMark };
const teams: Tool = { title: "Microsoft Teams", slug: "teams", mark: microsoftMark };

const groups: { title: string; note: string; tools: Tool[] }[] = [
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

export function ToolLogos() {
  return (
    <AutoTabs labels={groups.map((g) => g.title)}>
      {groups.map((g) => (
        <div key={g.title} className="card mx-auto flex h-full max-w-5xl flex-col justify-center p-6 text-center sm:p-10">
          <h3 className="text-2xl font-semibold">{g.title}</h3>
          <p className="mx-auto mt-2 max-w-2xl text-muted">{g.note}</p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {g.tools.map((t) => (
              <li
                key={t.slug}
                className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface-2 py-1.5 pl-1.5 pr-4 text-sm text-fg"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-white shadow-sm">
                  {"mark" in t ? (
                    t.mark
                  ) : (
                    <svg aria-hidden viewBox="0 0 24 24" className="size-[1.15rem]" fill={`#${t.hex}`}>
                      <path d={t.path} />
                    </svg>
                  )}
                </span>
                {t.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </AutoTabs>
  );
}
