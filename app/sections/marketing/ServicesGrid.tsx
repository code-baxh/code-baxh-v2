import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ORDERED_SERVICES } from "../../lib/services";
import { Reveal } from "../shared";

/** Grid of service cards linking to each service landing page. */
export function ServicesGrid({ limit }: { limit?: number }) {
  const services = limit ? ORDERED_SERVICES.slice(0, limit) : ORDERED_SERVICES;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <Reveal
          key={service.slug}
          variant="pop-in"
          delay={((i % 3) * 100) as 0 | 100 | 200}
          className="h-full"
        >
          <Link
            href={`/services/${service.slug}`}
            className="group kinetic-card flex h-full flex-col rounded-xl border border-border bg-surface-elevated p-4 sm:rounded-2xl sm:p-5 md:p-7"
          >
            <h3 className="flex items-start justify-between gap-2 text-base font-semibold text-text-primary sm:gap-3 sm:text-lg md:text-xl">
              {service.navLabel}
              <ArrowUpRight
                className="size-3 shrink-0 text-text-muted transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent sm:size-4"
                strokeWidth={2}
                aria-hidden
              />
            </h3>
            <p className="mt-2 flex-1 text-xs leading-relaxed text-text-secondary sm:mt-3 sm:text-sm md:text-base">
              {service.summary}
            </p>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
