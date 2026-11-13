"use client";

import { useEffect, useId, useRef, useState, useTransition } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, MessageCircle, Send, X } from "lucide-react";
import { submitMessage } from "@/app/contact/actions";
import { errorsFrom, messageSchema, type MessageField } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

const OPEN_AFTER_MS = 20000;
const SEEN_KEY = "cb-help-prompt";
const HIDDEN_ON = ["/contact", "/start-a-project"];

const topics = [
  { id: "new-product", label: "Build a new product", hint: "Web, mobile or SaaS" },
  { id: "ai", label: "Add AI to my product", hint: "RAG, agents, chatbots" },
  { id: "team", label: "Extend my team", hint: "Engineers, QA, DevOps" },
  { id: "other", label: "Something else", hint: "Ask us anything" },
] as const;

type Step = "intro" | "form" | "sent";
type Errors = Partial<Record<MessageField, string>>;

const field =
  "mt-1.5 block min-h-11 w-full rounded-xl border border-line-strong bg-bg px-3.5 py-2.5 text-base text-fg placeholder:text-muted/70 focus:border-accent-text aria-[invalid=true]:border-todo";

/**
 * A small "How can we help?" panel that slides in from the corner after a
 * short time on the site. It is deliberately not a full-screen modal: it never
 * blocks the page or takes keyboard focus on its own, which keeps it polite
 * for visitors and clear of search engines' intrusive-interstitial rules.
 * It opens once per browser session; afterwards the launcher button stays.
 */
export function HelpPrompt() {
  const pathname = usePathname();
  const id = useId();
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(true);
  const [step, setStep] = useState<Step>("intro");
  const [topic, setTopic] = useState<(typeof topics)[number] | null>(null);
  const [values, setValues] = useState({ name: "", email: "", message: "", consent: false, website: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [alert, setAlert] = useState<string>();
  const [pending, startTransition] = useTransition();
  const panelRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  const hidden = HIDDEN_ON.some((p) => pathname.startsWith(p));

  // Opens the panel with a short "typing" beat before the greeting (skipped for reduced motion).
  const show = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setTyping(!reduced);
    setOpen(true);
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {}
    if (!reduced) window.setTimeout(() => setTyping(false), 1100);
  };
  const showRef = useRef(show);

  // Open on its own once per session, after a short delay.
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {}
    const t = window.setTimeout(() => {
      setReady(true);
      if (!seen) showRef.current();
    }, seen ? 1500 : OPEN_AFTER_MS);
    return () => window.clearTimeout(t);
  }, []);

  const close = (returnFocus = true) => {
    setOpen(false);
    if (returnFocus) window.setTimeout(() => launcherRef.current?.focus(), 0);
  };

  const set = <K extends keyof typeof values>(key: K, value: (typeof values)[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key as MessageField]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const payload = { ...values, phone: "", turnstileToken: "", message: values.message.trim() };
    const parsed = messageSchema.safeParse(payload);
    if (!parsed.success) {
      const errs = errorsFrom<MessageField>(parsed.error);
      setErrors(errs);
      setAlert("Please check the highlighted fields.");
      const first = (["name", "email", "message", "consent"] as const).find((k) => errs[k]);
      if (first) panelRef.current?.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus();
      return;
    }
    setErrors({});
    setAlert(undefined);
    startTransition(async () => {
      try {
        const res = await submitMessage({
          ...payload,
          message: `[Help prompt: ${topic?.label ?? "General"}]\n\n${payload.message}`,
        } as Parameters<typeof submitMessage>[0]);
        if (res.ok) setStep("sent");
        else {
          setErrors(res.fieldErrors ?? {});
          setAlert(res.message);
        }
      } catch {
        setAlert("We could not reach the server. Please try again.");
      }
    });
  }

  if (hidden || !ready) return null;

  const err = (k: MessageField) =>
    errors[k] ? (
      <p id={`${id}-${k}-error`} className="mt-1 text-xs text-todo">
        {errors[k]}
      </p>
    ) : null;
  const aria = (k: MessageField) => ({
    "data-field": k,
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${id}-${k}-error` : undefined,
  });

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 max-sm:left-4">
      {open ? (
        <div
          ref={panelRef}
          role="dialog"
          aria-labelledby={`${id}-title`}
          onKeyDown={(e) => e.key === "Escape" && close()}
          className="help-panel frame-glow w-full rounded-[1.4rem] p-px shadow-2xl shadow-black/40 sm:w-[24rem]"
        >
          <div className="max-h-[min(78dvh,40rem)] overflow-y-auto rounded-[calc(1.4rem-1px)] bg-surface text-left">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-line px-5 py-4">
              <span className="relative inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-accent-fg">
                CB
                <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-surface bg-ok" />
              </span>
              <div className="min-w-0 flex-1">
                <p id={`${id}-title`} className="font-display font-semibold leading-tight">
                  How can we help?
                </p>
                <p className="text-xs text-muted">The CodeBaxh team replies within one working day</p>
              </div>
              <button
                type="button"
                onClick={() => close()}
                aria-label="Close"
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-muted hover:bg-surface-2 hover:text-fg"
              >
                <X aria-hidden className="size-5" />
              </button>
            </div>

            <div className="p-5" aria-live="polite">
              {step === "intro" ? (
                typing ? (
                  <p className="inline-flex items-center gap-1.5 rounded-2xl rounded-bl-sm bg-surface-2 px-4 py-3.5" aria-label="Typing">
                    {[0, 1, 2].map((i) => (
                      <span key={i} className="typing-dot size-1.5 rounded-full bg-muted" style={{ animationDelay: `${i * 0.16}s` }} />
                    ))}
                  </p>
                ) : (
                  <div className="help-in">
                    <p className="rounded-2xl rounded-bl-sm bg-surface-2 px-4 py-3 text-[0.95rem]">
                      Hi, welcome to CodeBaxh. What are you working on? Pick one and we will point you to the right
                      person.
                    </p>
                    <ul className="mt-4 grid grid-cols-2 gap-2">
                      {topics.map((t) => (
                        <li key={t.id}>
                          <button
                            type="button"
                            onClick={() => {
                              setTopic(t);
                              setStep("form");
                            }}
                            className="flex h-full min-h-[4.5rem] w-full flex-col justify-center rounded-xl border border-line-strong px-3.5 py-2.5 text-left transition-colors hover:border-accent hover:bg-accent/10"
                          >
                            <span className="text-sm font-medium">{t.label}</span>
                            <span className="mt-0.5 text-xs text-muted">{t.hint}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/start-a-project"
                      onClick={() => close(false)}
                      className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-accent-text hover:underline"
                    >
                      Or fill in the full project form <ArrowRight aria-hidden className="size-4" />
                    </Link>
                  </div>
                )
              ) : null}

              {step === "form" ? (
                <form onSubmit={onSubmit} noValidate className="help-in space-y-3.5">
                  <button
                    type="button"
                    onClick={() => setStep("intro")}
                    className="inline-flex min-h-9 items-center gap-1.5 text-xs text-muted hover:text-fg"
                  >
                    <ArrowLeft aria-hidden className="size-3.5" /> Back
                  </button>
                  <p className="rounded-2xl rounded-bl-sm bg-surface-2 px-4 py-3 text-[0.95rem]">
                    <span className="font-medium text-accent-text">{topic?.label}.</span> Tell us a little more and
                    where to reach you.
                  </p>
                  {alert ? (
                    <p role="alert" className="rounded-xl border border-todo/60 bg-todo/10 px-3.5 py-2.5 text-sm text-todo">
                      {alert}
                    </p>
                  ) : null}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor={`${id}-name`} className="text-sm font-medium">
                        Name
                      </label>
                      <input id={`${id}-name`} name="name" autoComplete="name" required value={values.name}
                        onChange={(e) => set("name", e.target.value)} className={field} {...aria("name")} />
                      {err("name")}
                    </div>
                    <div>
                      <label htmlFor={`${id}-email`} className="text-sm font-medium">
                        Email
                      </label>
                      <input id={`${id}-email`} name="email" type="email" autoComplete="email" required value={values.email}
                        onChange={(e) => set("email", e.target.value)} className={field} {...aria("email")} />
                      {err("email")}
                    </div>
                  </div>
                  <div>
                    <label htmlFor={`${id}-message`} className="text-sm font-medium">
                      How can we help?
                    </label>
                    <textarea id={`${id}-message`} name="message" rows={3} required value={values.message}
                      onChange={(e) => set("message", e.target.value)} className={field}
                      placeholder="A sentence or two is enough." {...aria("message")} />
                    {err("message")}
                  </div>
                  <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                    <input tabIndex={-1} autoComplete="off" name="website" value={values.website}
                      onChange={(e) => set("website", e.target.value)} />
                  </div>
                  <div>
                    <label className="flex cursor-pointer items-start gap-2.5">
                      <input type="checkbox" checked={values.consent} required
                        onChange={(e) => set("consent", e.target.checked)}
                        className="mt-0.5 size-4.5 shrink-0 accent-[var(--accent)]" {...aria("consent")} />
                      <span className="text-xs text-muted">
                        I agree to CodeBaxh using these details to reply, as set out in the{" "}
                        <Link href="/privacy" className="text-accent-text underline underline-offset-2">
                          Privacy Policy
                        </Link>
                        .
                      </span>
                    </label>
                    {err("consent")}
                  </div>
                  <button
                    type="submit"
                    disabled={pending}
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-accent px-5 font-medium text-accent-fg disabled:cursor-wait disabled:opacity-70"
                  >
                    {pending ? <Loader2 aria-hidden className="size-4 animate-spin" /> : <Send aria-hidden className="size-4" />}
                    {pending ? "Sending…" : "Send message"}
                  </button>
                </form>
              ) : null}

              {step === "sent" ? (
                <div className="help-in flex flex-col items-center py-4 text-center">
                  <span className="inline-flex size-14 items-center justify-center rounded-full bg-ok/15">
                    <CheckCircle2 aria-hidden className="size-8 text-ok" />
                  </span>
                  <p className="mt-4 font-display text-xl font-semibold">Thank you. Message received.</p>
                  <p className="mt-2 text-sm text-muted">
                    We have emailed you a confirmation and will reply within one working day.
                  </p>
                  <button
                    type="button"
                    onClick={() => close()}
                    className="mt-5 inline-flex min-h-11 items-center rounded-full border border-line-strong px-5 text-sm font-medium hover:border-accent-text hover:text-accent-text"
                  >
                    Close
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      <button
        ref={launcherRef}
        type="button"
        onClick={() => (open ? close(false) : show())}
        aria-expanded={open}
        aria-label={open ? "Close the help panel" : "Open the help panel: how can we help?"}
        className={cn(
          "help-in inline-flex size-14 items-center justify-center rounded-full bg-accent text-accent-fg shadow-[0_10px_30px_-8px_var(--accent)] transition-transform hover:scale-105",
          open && "max-sm:hidden",
        )}
      >
        {open ? <X aria-hidden className="size-6" /> : <MessageCircle aria-hidden className="size-6" />}
      </button>
    </div>
  );
}
