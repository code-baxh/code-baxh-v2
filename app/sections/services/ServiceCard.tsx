type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-surface-elevated p-7 transition-shadow hover:shadow-[var(--glass-shadow)] md:p-8">
      <h3 className="text-lg font-semibold text-text-primary md:text-xl">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
        {description}
      </p>
    </article>
  );
}
