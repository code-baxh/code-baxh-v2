import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GlowCard } from "@/components/ui/glow-card";
import { Photo } from "@/components/ui/photo";
import { ServiceIcon } from "@/components/ui/service-icon";
import { serviceImage } from "@/content/images";
import type { Service } from "@/content/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <GlowCard className="flex h-full flex-col p-4">
      <Photo
        name={serviceImage[service.slug] ?? "circuit"}
        decorative
        className="aspect-[16/9] rounded-[0.9rem]"
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
        <div className="flex items-center gap-2.5">
          <ServiceIcon name={service.icon} className="size-5 shrink-0 text-accent-text" />
          <h3 className="text-xl font-semibold">
            <Link href={`/services/${service.slug}`} className="stretched">
              {service.name}
            </Link>
          </h3>
        </div>
        <p className="mt-3 text-sm text-muted">{service.summary}</p>
        <p className="mt-auto flex items-center gap-1 pt-5 text-sm font-medium text-accent-text">
          Learn more <ArrowUpRight aria-hidden className="size-4" />
        </p>
      </div>
    </GlowCard>
  );
}
