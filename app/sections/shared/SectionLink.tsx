import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type SectionLinkProps = {
  href: string;
  label: string;
};

export function SectionLink({ href, label }: SectionLinkProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-accent md:text-base"
    >
      {label}
      <ArrowUpRight
        className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        strokeWidth={2}
        aria-hidden
      />
    </Link>
  );
}
