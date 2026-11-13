import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; path: string };

/** Visible breadcrumb trail plus matching BreadcrumbList schema. "Home" is added automatically. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center justify-center gap-1.5 text-sm text-muted">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {i > 0 ? <ChevronRight aria-hidden className="size-3.5" /> : null}
              {last ? (
                <span aria-current="page" className="text-fg">
                  {c.name}
                </span>
              ) : (
                <Link href={c.path} className="inline-flex min-h-8 items-center hover:text-accent-text">
                  {c.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      <JsonLd data={breadcrumbSchema(all)} />
    </nav>
  );
}
