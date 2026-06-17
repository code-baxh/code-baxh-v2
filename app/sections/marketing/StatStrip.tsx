import { STATS } from "../../lib/site";
import { Reveal } from "../shared";

/** Quantified proof stats. */
export function StatStrip() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:rounded-2xl md:grid-cols-4">
      {STATS.map((stat, i) => (
        <Reveal
          key={stat.label}
          variant="pop-in"
          delay={(i * 100) as 0 | 100 | 200 | 300}
          className="kinetic-card bg-surface-elevated p-3 sm:p-4 md:p-6 md:p-7"
        >
          <p className="text-lg font-semibold tracking-tight text-text-primary sm:text-xl md:text-2xl md:text-3xl">
            {stat.value}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-text-secondary sm:mt-2 sm:text-sm">
            {stat.label}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
