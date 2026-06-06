import { CLIENT_LOGOS, FOUNDER } from "../../lib/site";

/**
 * Trust strip — named enterprise clients (via Zoneomics) + Upwork badge.
 * Placed directly under the hero (above the fold) per current CRO research.
 * Text-based for now; swap in real logo SVGs at public/logos/ when available.
 */
export function ClientLogos({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
        Trusted by teams behind
      </p>
      <ul
        className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-3 ${
          compact ? "text-base" : "text-lg md:text-xl"
        } font-semibold tracking-tight text-text-primary/80`}
      >
        {CLIENT_LOGOS.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <p className="text-xs text-text-muted">
        via Zoneomics · Upwork {FOUNDER.upworkBadge}
      </p>
    </div>
  );
}
