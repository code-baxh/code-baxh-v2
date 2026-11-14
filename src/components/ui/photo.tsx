import Image from "next/image";
import { images, type ImageKey } from "@/content/images";
import { cn } from "@/lib/utils";

type Props = {
  name: ImageKey;
  /** Pass true when the photo is purely atmospheric. */
  decorative?: boolean;
  className?: string;
  sizes?: string;
  /** The page's LCP image: fetched eagerly at high priority instead of lazily. */
  priority?: boolean;
  /** Darkening gradient from the bottom, for captions. */
  scrim?: boolean;
  children?: React.ReactNode;
};

/** Photo in a plain rounded frame. */
export function Photo({ name, decorative, className, sizes = "(min-width: 1024px) 40vw, 100vw", priority, scrim, children }: Props) {
  const img = images[name];
  return (
    <div className={cn("relative overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface-2", className)}>
      <Image
        src={img.src}
        alt={decorative ? "" : img.alt}
        fill
        sizes={sizes}
        // `priority` is deprecated in Next 16; eager + fetchPriority="high" is the recommended LCP setup.
        {...(priority ? { loading: "eager" as const, fetchPriority: "high" as const } : {})}
        className="object-cover"
      />
      {scrim ? <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" /> : null}
      {children}
    </div>
  );
}
