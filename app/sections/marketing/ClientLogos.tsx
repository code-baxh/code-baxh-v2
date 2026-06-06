import { CLIENT_LOGOS, FOUNDER } from "../../lib/site";

/**
 * Trust strip — Upwork Top Rated Plus badge + (optionally) real CodeBaxh client
 * or product names. Placed under the hero per current CRO research. Add names to
 * CLIENT_LOGOS in lib/site.ts once you confirm which can be shown publicly.
 */
export function ClientLogos() {
  const hasLogos = CLIENT_LOGOS.length > 0;

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
        {hasLogos ? "Recent work for" : "Trusted by US & EU clients"}
      </p>
      {hasLogos && (
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-lg font-semibold tracking-tight text-text-primary/80 md:text-xl">
          {CLIENT_LOGOS.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}
      <p className="text-xs text-text-muted">
        Upwork {FOUNDER.upworkBadge} · senior full-stack delivery
      </p>
    </div>
  );
}
