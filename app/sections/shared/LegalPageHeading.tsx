import { ChevronLeft } from "lucide-react";
import Link from "next/link";

type LegalPageHeadingProps = {
  title: string;
};

export function LegalPageHeading({ title }: LegalPageHeadingProps) {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
        Legal
      </p>
      <div className="mt-3 flex items-center gap-2 sm:gap-3">
        <Link
          href="/"
          className="-ml-1 inline-flex shrink-0 items-center justify-center rounded-full p-1 text-text-secondary transition-colors hover:text-text-primary"
          aria-label="Back to home"
        >
          <ChevronLeft className="size-7 sm:size-8" strokeWidth={2} aria-hidden />
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          {title}
        </h1>
      </div>
    </>
  );
}
