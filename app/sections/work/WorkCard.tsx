import type { WorkItem } from "./constants";

type WorkCardProps = WorkItem;

export function WorkCard({ title, category, description }: WorkCardProps) {
  return (
    <article className="group kinetic-card relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface-muted transition-transform duration-300 hover:-translate-y-1">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-8">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-text-muted">
          {category}
        </p>
        <h3 className="mt-2 text-lg font-medium text-text-primary md:text-xl">
          {title}
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-text-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {description}
        </p>
      </div>
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(to top, color-mix(in srgb, var(--surface) 92%, transparent), transparent 55%)",
        }}
        aria-hidden
      />
    </article>
  );
}
