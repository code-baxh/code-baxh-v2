import type { ServiceCategory } from "./constants";

type ServiceCardProps = {
  title: string;
  description: string;
  category: ServiceCategory;
};

const CATEGORY_LABEL: Record<ServiceCategory, string> = {
  recruit: "Recruitment",
  build: "Build",
};

export function ServiceCard({ title, description, category }: ServiceCardProps) {
  return (
    <article className="kinetic-card h-full rounded-2xl border border-border bg-surface-elevated p-7 md:p-8">
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-text-muted">
        {CATEGORY_LABEL[category]}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-text-primary md:text-xl">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
        {description}
      </p>
    </article>
  );
}
