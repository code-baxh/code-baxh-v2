type WorkCardProps = {
  index: number;
};

export function WorkCard({ index }: WorkCardProps) {
  return (
    <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface-muted">
      <div className="absolute inset-0 flex items-end p-7 md:p-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
            Case study
          </p>
          <p className="mt-2 text-lg font-medium text-text-primary md:text-xl">
            Project placeholder {index}
          </p>
        </div>
      </div>
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(to top, color-mix(in srgb, var(--surface) 90%, transparent), transparent 60%)",
        }}
        aria-hidden
      />
    </div>
  );
}
