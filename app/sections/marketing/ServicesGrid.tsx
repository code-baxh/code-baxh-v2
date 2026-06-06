import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../../lib/services";
import { Reveal } from "../shared";

/** Grid of service cards linking to each service landing page. */
export function ServicesGrid({ limit }: { limit?: number }) {
  const services = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <Reveal
          key={service.slug}
          delay={((i % 3) * 100) as 0 | 100 | 200}
          className="h-full"
        >
          <Link
            href={`/services/${service.slug}`}
            className="group kinetic-card flex h-full flex-col rounded-2xl border border-border bg-surface-elevated p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[var(--glass-shadow)]"
          >
            <h3 className="flex items-start justify-between gap-3 text-lg font-semibold text-text-primary md:text-xl">
              {service.navLabel}
              <ArrowUpRight
                className="size-4 shrink-0 text-text-muted transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                strokeWidth={2}
                aria-hidden
              />
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary md:text-base">
              {service.summary}
            </p>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
