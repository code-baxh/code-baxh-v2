import Image from "next/image";
import { AutoTabs } from "@/components/ui/auto-tabs";
import { toolGroups } from "@/content/tools";

/**
 * Logos of the tools we work in, grouped by purpose. Every logo is shown in its brand
 * colour on a white badge, so dark logos stay visible in the dark theme.
 *
 * simple-icons glyphs are lazy-loaded static SVGs (/tool-icons/<slug>.svg) rather than
 * inline paths: inline, their 66 KB of path data sat in the HTML and again in the RSC
 * payload, a third of the homepage's HTML, all ahead of first paint for a section
 * below the fold.
 */
const marks = {
  microsoft: (
    <svg aria-hidden viewBox="0 0 24 24" className="size-[1.05rem]">
      <rect x="1" y="1" width="10.5" height="10.5" fill="#F25022" />
      <rect x="12.5" y="1" width="10.5" height="10.5" fill="#7FBA00" />
      <rect x="1" y="12.5" width="10.5" height="10.5" fill="#00A4EF" />
      <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900" />
    </svg>
  ),
  aws: (
    <svg aria-hidden viewBox="0 0 24 24" className="size-[1.25rem]">
      <text x="12" y="13" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="10" fill="#232F3E">
        aws
      </text>
      <path d="M4 16.5c4.5 2.6 11.5 2.6 16 0" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  ),
};

export function ToolLogos() {
  return (
    <AutoTabs labels={toolGroups.map((g) => g.title)}>
      {toolGroups.map((g) => (
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
                    marks[t.mark]
                  ) : (
                    <Image src={`/tool-icons/${t.slug}.svg`} alt="" width={18} height={18} unoptimized className="size-[1.15rem]" />
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
