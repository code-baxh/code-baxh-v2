import Link from "next/link";
import { Reveal } from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PageHeroProps) {
  return (
    <section className="theme-obsidian relative overflow-hidden border-t border-border bg-surface py-24 sm:py-28 md:py-32">
      <div className="section-orb -left-24 top-10 h-72 w-72 opacity-70" />
      <div className="section-orb -right-24 bottom-0 h-72 w-72 opacity-40" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="hero-eyebrow mb-6 text-xs font-medium uppercase tracking-[0.25em] text-text-muted md:text-sm">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-text-primary sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
            {description}
          </p>

          {(primaryHref || secondaryHref) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryHref && primaryLabel ? (
                <Link
                  href={primaryHref}
                  className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-[#0d0d0d] transition-[transform,opacity] hover:-translate-y-px hover:opacity-90 md:text-base"
                >
                  {primaryLabel}
                </Link>
              ) : null}
              {secondaryHref && secondaryLabel ? (
                <Link
                  href={secondaryHref}
                  className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-text-primary transition-colors hover:border-white/35 hover:bg-white/[0.04] md:text-base"
                >
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
