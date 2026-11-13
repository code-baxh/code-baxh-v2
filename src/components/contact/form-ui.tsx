"use client";

import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

/** Building blocks shared by the "Contact us" and "Start a project" forms. */

export const inputCls =
  "mt-2 block min-h-12 w-full rounded-xl border border-line-strong bg-bg px-4 py-3 text-base text-fg transition-colors placeholder:text-muted/70 hover:border-muted focus:border-accent-text aria-[invalid=true]:border-todo";

export function Required() {
  return (
    <span aria-hidden className="text-accent-text">
      {" "}
      *
    </span>
  );
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex items-center gap-1.5 text-sm text-todo">
      <TriangleAlert aria-hidden className="size-4 shrink-0" /> {message}
    </p>
  );
}

/** Props that mark a control invalid and tie it to its error text. */
export const invalidProps = (field: string, id: string, message?: string) => ({
  "data-field": field,
  "aria-invalid": message ? true : undefined,
  "aria-describedby": message ? id : undefined,
});

export function FormAlert({ ref, message }: { ref: React.Ref<HTMLDivElement>; message?: string }) {
  return (
    <div ref={ref} tabIndex={-1} aria-live="assertive" className={cn("outline-none", message ? "block" : "sr-only")}>
      {message ? (
        <p role="alert" className="flex gap-2 rounded-xl border border-todo/60 bg-todo/10 px-4 py-3 text-todo">
          <TriangleAlert aria-hidden className="mt-0.5 size-5 shrink-0" /> {message}
        </p>
      ) : null}
    </div>
  );
}

export function SuccessPanel({
  ref,
  title,
  onReset,
}: {
  ref: React.Ref<HTMLDivElement>;
  title: string;
  onReset: () => void;
}) {
  return (
    <div ref={ref} tabIndex={-1} role="status" className="card flex flex-col items-center gap-4 p-8 text-center outline-none sm:p-12">
      <span className="inline-flex size-16 items-center justify-center rounded-full bg-ok/15">
        <CheckCircle2 aria-hidden className="size-9 text-ok" />
      </span>
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="max-w-md text-lg text-muted">
        We have sent a confirmation to your inbox and will reply shortly, usually within one working day.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-2 inline-flex min-h-11 items-center rounded-full border border-line-strong px-5 font-medium hover:border-accent-text hover:text-accent-text"
      >
        Send another
      </button>
    </div>
  );
}

export function Consent({
  checked,
  onChange,
  error,
  errorId,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string;
  errorId: string;
}) {
  return (
    <div>
      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          name="consent"
          checked={checked}
          required
          onChange={(e) => onChange(e.target.checked)}
          className="mt-1 size-5 shrink-0 accent-[var(--accent)]"
          {...invalidProps("consent", errorId, error)}
        />
        <span className="text-sm text-muted">
          I agree that CodeBaxh may store and use these details to respond to me, as described in the{" "}
          <Link href="/privacy" className="text-accent-text underline underline-offset-4">
            Privacy Policy
          </Link>
          .<Required />
        </span>
      </label>
      <FieldError id={errorId} message={error} />
    </div>
  );
}

/** Hidden from people and assistive tech, attractive to bots. */
export function Honeypot({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>
        Website
        <input tabIndex={-1} autoComplete="off" name="website" value={value} onChange={(e) => onChange(e.target.value)} />
      </label>
    </div>
  );
}

const turnstileOn = process.env.NEXT_PUBLIC_TURNSTILE_ENABLED === "true";
const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function Turnstile() {
  if (!turnstileOn || !turnstileSiteKey) return null;
  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" />
      <div className="cf-turnstile min-h-[65px]" data-sitekey={turnstileSiteKey} data-theme="auto" />
    </>
  );
}

export function SubmitButton({ pending, label }: { pending: boolean; label: string }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-medium text-accent-fg shadow-[0_8px_30px_-8px_var(--accent)] transition-opacity disabled:cursor-wait disabled:opacity-70"
    >
      {pending ? <Loader2 aria-hidden className="size-5 animate-spin" /> : <Send aria-hidden className="size-4" />}
      {pending ? "Sending…" : label}
    </button>
  );
}

/** Moves focus to the first field with an error, or to the alert if none is found. */
export function focusFirstError(form: HTMLFormElement | null, fields: string[], fallback: HTMLElement | null) {
  const first = fields[0];
  const el = first && form?.querySelector<HTMLElement>(`[data-field="${first}"]`);
  if (el) el.focus();
  else fallback?.focus();
}
