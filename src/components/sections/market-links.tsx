import Link from "next/link";
import { markets } from "@/content/markets";
import { cn } from "@/lib/utils";

/** Inline links to each market page, for sitting under the markets map. */
export function MarketLinks({ className }: { className?: string }) {
  return (
    <nav aria-label="Markets" className={cn("relative mt-4 text-center text-sm", className)}>
      <span className="text-muted">Working with us from: </span>
      {markets.map((m, i) => (
        <span key={m.slug}>
          {i > 0 ? <span aria-hidden className="px-2 text-muted">·</span> : null}
          <Link href={`/markets/${m.slug}`} className="text-fg underline-offset-4 hover:text-accent-text hover:underline">
            {m.name}
          </Link>
        </span>
      ))}
    </nav>
  );
}
