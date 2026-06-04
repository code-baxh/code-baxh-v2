import Link from "next/link";
import { Reveal, SectionShell } from "../shared";

const STATS = [
  { value: "2", label: "Core capabilities", detail: "Recruitment and software delivery" },
  { value: "24h", label: "Response window", detail: "We reply within one business day" },
  { value: "Global", label: "Working range", detail: "Islamabad base, remote-friendly teams" },
  { value: "Tech", label: "Specialist focus", detail: "Engineering, product, and digital build" },
] as const;

const QUICK_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

export function HomeStatsSection() {
  return (
    <SectionShell index="01" label="Overview" theme="obsidian" tone="muted">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
            One team for hiring momentum and product delivery.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-text-secondary md:text-lg">
            Code Baxh is built for companies that need both: sharp recruitment
            and a studio that can ship. Explore each area below, or jump
            straight to what you need.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 bg-surface-elevated px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-white/20 hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {STATS.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={(index * 100) as 0 | 100 | 200 | 300}
              className="kinetic-card rounded-2xl border border-border bg-surface-elevated p-6 md:p-7"
            >
              <p className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-semibold text-text-primary">
                {stat.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {stat.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
