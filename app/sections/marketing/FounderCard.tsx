import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Check, Quote } from "lucide-react";
import { FOUNDER } from "../../lib/site";
import { Reveal, SectionHeading } from "../shared";

const DELIVERY_POINTS = [
  "Direct access to Bilal and the engineers doing the work — no account-manager layer.",
  "Weekly demos, a shared board, and async updates that flex to your timezone.",
  "Production experience across web apps, multi-tenant SaaS, and AI products.",
  "Clear contracts, NDAs on request, and milestone-based payments.",
];

const STATS = [
  { label: "Years building", value: "6+" },
  { label: "Shipped products", value: "30+" },
  { label: "Client rating", value: "5.0" },
];

export function FounderSection() {
  return (
    <section className="theme-paper border-t border-border bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div className="flex flex-col gap-10">
            <Reveal>
              <SectionHeading
                eyebrow="Who you'll work with"
                title="Senior delivery, led by the founder."
                description="CodeBaxh is founder-led. You get experienced engineers in the room from day one — scoping, building, and shipping with you."
              />
            </Reveal>

            <Reveal delay={100}>
              <div className="kinetic-card rounded-2xl border border-border bg-surface-elevated p-6">
                <Quote className="size-6 text-accent/50" strokeWidth={2} aria-hidden />
                <p className="mt-3 text-base leading-relaxed text-text-secondary">
                  {FOUNDER.bio}
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="grid grid-cols-3 gap-4 border-t border-border pt-8">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-semibold text-text-primary md:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-text-muted md:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={100} variant="pop-in">
            <div className="kinetic-card rounded-2xl border border-border bg-surface-elevated p-7 md:p-9">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-sm font-bold text-accent">
                  BK
                </div>
                <div>
                  <p className="text-lg font-semibold text-text-primary">{FOUNDER.name}</p>
                  <p className="text-sm text-text-muted">{FOUNDER.role}</p>
                </div>
                <div className="ml-auto inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text-primary">
                  <BadgeCheck className="size-4 text-accent" strokeWidth={2} aria-hidden />
                  Upwork {FOUNDER.upworkBadge}
                </div>
              </div>

              <div className="mt-7 border-t border-border pt-7">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-text-muted">
                  What working with us looks like
                </p>
                <ul className="mt-4 space-y-3">
                  {DELIVERY_POINTS.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-text-secondary md:text-base"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-accent"
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-7">
                <Link
                  href="/about"
                  className="inline-flex rounded-full bg-text-primary px-6 py-3 text-sm font-medium text-surface transition-opacity hover:opacity-90"
                >
                  More about us
                </Link>
                <a
                  href={FOUNDER.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-surface-muted"
                >
                  {FOUNDER.name}&apos;s portfolio
                  <ArrowUpRight
                    className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2}
                    aria-hidden
                  />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
