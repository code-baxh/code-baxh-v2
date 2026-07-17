import { CLIENT_LOGOS, FOUNDER } from "../../lib/site";
import { Reveal } from "../shared";

/**
 * Trust strip — real, backed proof under the hero (per CRO research). Once you
 * confirm which client/product names can be shown publicly, add them to
 * CLIENT_LOGOS in lib/site.ts and they replace the proof chips below. We never
 * render an unbacked "trusted by" claim with nothing behind it.
 */
const PROOF_POINTS = [
  `Upwork ${FOUNDER.upworkBadge}`,
  "6+ years shipping software",
  "Multi-tenant SaaS MVP in 11 weeks",
  "Clients across North America, Europe & the Middle East",
];

export function ClientLogos() {
  const hasLogos = CLIENT_LOGOS.length > 0;

  return (
    <Reveal variant="pop-in" className="flex flex-col items-center gap-5 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
        {hasLogos ? "Recent work for" : "Proven, senior delivery"}
      </p>

      {hasLogos ? (
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-lg font-semibold tracking-tight text-text-primary/80 md:text-xl">
          {CLIENT_LOGOS.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      ) : (
        <ul className="flex flex-wrap items-center justify-center gap-2.5">
          {PROOF_POINTS.map((point) => (
            <li
              key={point}
              className="rounded-full border border-border bg-surface-elevated px-4 py-2 text-sm font-medium text-text-secondary"
            >
              {point}
            </li>
          ))}
        </ul>
      )}

      {hasLogos && (
        <p className="text-xs text-text-muted">
          Upwork {FOUNDER.upworkBadge} · senior full-stack delivery
        </p>
      )}
    </Reveal>
  );
}
