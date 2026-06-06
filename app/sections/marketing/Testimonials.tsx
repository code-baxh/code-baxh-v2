import { Quote } from "lucide-react";
import { TESTIMONIALS } from "./testimonials-data";
import { Reveal, SectionHeading } from "../shared";

export function Testimonials() {
  if (!TESTIMONIALS.length) return null;

  return (
    <section className="theme-obsidian border-t border-border bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say."
          description="Independent, verifiable feedback from international clients."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name + i}
              delay={(i * 100) as 0 | 100 | 200}
              className="flex h-full flex-col rounded-2xl border border-border bg-surface-elevated p-7"
            >
              <Quote className="size-6 text-accent" strokeWidth={2} aria-hidden />
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-text-secondary">
                {t.quote}
              </blockquote>
              <footer className="mt-6">
                <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                <p className="text-xs text-text-muted">{t.role}</p>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
