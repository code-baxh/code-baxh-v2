import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center text-center px-5 py-24">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">This page does not exist.</h1>
      <p className="mt-5 text-lg text-muted">The link may be old, or the page may have moved.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/services" variant="secondary">
          Browse services
        </ButtonLink>
      </div>
    </div>
  );
}
