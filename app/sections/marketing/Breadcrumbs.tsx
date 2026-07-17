import Link from "next/link";
import { ChevronRight } from "lucide-react";

/** Visual breadcrumbs. Pair with breadcrumbSchema() for the JSON-LD. */
export function Breadcrumbs({
  items,
}: {
  items: ReadonlyArray<{ name: string; path: string }>;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-text-muted">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span className="text-text-secondary" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="transition-colors hover:text-text-primary"
                >
                  {item.name}
                </Link>
              )}
              {!isLast && (
                <ChevronRight className="size-3" strokeWidth={2} aria-hidden />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
