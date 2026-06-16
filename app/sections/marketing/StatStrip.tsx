import { STATS } from "../../lib/site";
import { Reveal } from "../shared";

/** Quantified proof stats. */
export function StatStrip() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
      {STATS.map((stat, i) => (
        <Reveal
          key={stat.label}
          variant="pop-in"
          delay={(i * 100) as 0 | 100 | 200 | 300}
          className="kinetic-card bg-surface-elevated p-6 md:p-7"
        >
          <p className="text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
            {stat.value}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {stat.label}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
