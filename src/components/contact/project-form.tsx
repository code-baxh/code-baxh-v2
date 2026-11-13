"use client";

import { useEffect, useId, useRef, useState, useTransition } from "react";
import { Check } from "lucide-react";
import { submitContact } from "@/app/contact/actions";
import {
  budgetOptions,
  contactSchema,
  errorsFrom,
  serviceOptions,
  timelineOptions,
  type ContactField,
} from "@/lib/contact-schema";
import { cn } from "@/lib/utils";
import {
  Consent,
  FieldError,
  FormAlert,
  Honeypot,
  Required,
  SubmitButton,
  SuccessPanel,
  Turnstile,
  focusFirstError,
  inputCls,
  invalidProps,
} from "./form-ui";

type Errors = Partial<Record<ContactField, string>>;
const empty = {
  name: "",
  email: "",
  company: "",
  services: [] as string[],
  budget: "",
  timeline: "",
  message: "",
  consent: false,
  website: "",
};
const order: ContactField[] = ["name", "email", "services", "budget", "timeline", "message", "consent"];

const pill =
  "inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 text-sm transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent-text";
const pillOn = "border-accent bg-accent text-accent-fg";
const pillOff = "border-line-strong hover:border-accent-text";

function Step({ n, title, hint, children }: { n: number; title: string; hint: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-6 border-t border-line pt-8 first:border-t-0 first:pt-0 md:grid-cols-[13rem_1fr] md:gap-10">
      <div>
        <p className="flex items-center gap-3">
          <span className="inline-flex size-9 items-center justify-center rounded-full bg-accent font-mono text-sm font-medium text-accent-fg">
            {n}
          </span>
          <span className="font-display text-xl font-semibold">{title}</span>
        </p>
        <p className="mt-3 text-sm text-muted">{hint}</p>
      </div>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

/** The detailed "Start a project" form, in three short steps on one page. */
export function ProjectForm() {
  const id = useId();
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [alert, setAlert] = useState<string>();
  const [sent, setSent] = useState(false);
  const [pending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);
  const alertRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sent) successRef.current?.focus();
  }, [sent]);

  const set = <K extends keyof typeof empty>(key: K, value: (typeof empty)[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key as ContactField]) setErrors((e) => ({ ...e, [key]: undefined }));
  };
  const fail = (message: string, errs: Errors = {}) => {
    setErrors(errs);
    setAlert(message);
    focusFirstError(formRef.current, order.filter((k) => errs[k]), alertRef.current);
  };

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const turnstileToken = new FormData(e.currentTarget).get("cf-turnstile-response")?.toString() ?? "";
    const payload = { ...values, turnstileToken };
    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      fail("Please correct the highlighted fields and try again.", errorsFrom<ContactField>(parsed.error));
      return;
    }
    setErrors({});
    setAlert(undefined);
    startTransition(async () => {
      try {
        const res = await submitContact(payload as Parameters<typeof submitContact>[0]);
        if (res.ok) {
          setSent(true);
          setValues(empty);
        } else fail(res.message, res.fieldErrors);
      } catch {
        fail("We could not reach the server. Your details are still in the form, so please try again.");
      }
    });
  }

  if (sent) return <SuccessPanel ref={successRef} title="Thank you. Your brief is with us." onReset={() => setSent(false)} />;

  const eid = (k: ContactField) => `${id}-${k}-error`;

  const radios = (field: "budget" | "timeline", legend: string, options: readonly string[]) => (
    <fieldset>
      <legend className="font-medium">
        {legend}
        <Required />
      </legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o, i) => {
          const on = values[field] === o;
          return (
            <label key={o} className={cn(pill, on ? pillOn : pillOff)}>
              <input
                type="radio"
                name={field}
                value={o}
                checked={on}
                onChange={() => set(field, o)}
                className="sr-only"
                {...(i === 0 ? invalidProps(field, eid(field), errors[field]) : {})}
              />
              {o}
            </label>
          );
        })}
      </div>
      <FieldError id={eid(field)} message={errors[field]} />
    </fieldset>
  );

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="card space-y-8 p-6 text-left sm:p-10">
      <FormAlert ref={alertRef} message={alert} />

      <Step n={1} title="About you" hint="So we know who to reply to.">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor={`${id}-name`} className="font-medium">
              Name
              <Required />
            </label>
            <input id={`${id}-name`} name="name" autoComplete="name" required value={values.name}
              onChange={(e) => set("name", e.target.value)} className={inputCls} {...invalidProps("name", eid("name"), errors.name)} />
            <FieldError id={eid("name")} message={errors.name} />
          </div>
          <div>
            <label htmlFor={`${id}-email`} className="font-medium">
              Work email
              <Required />
            </label>
            <input id={`${id}-email`} name="email" type="email" autoComplete="email" required value={values.email}
              onChange={(e) => set("email", e.target.value)} className={inputCls} {...invalidProps("email", eid("email"), errors.email)} />
            <FieldError id={eid("email")} message={errors.email} />
          </div>
        </div>
        <div>
          <label htmlFor={`${id}-company`} className="font-medium">
            Company <span className="font-normal text-muted">(optional)</span>
          </label>
          <input id={`${id}-company`} name="company" autoComplete="organization" value={values.company}
            onChange={(e) => set("company", e.target.value)} className={inputCls} />
        </div>
      </Step>

      <Step n={2} title="What you need" hint="Choose every service that applies. A rough idea is enough.">
        <fieldset>
          <legend className="font-medium">
            Services
            <Required />
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {serviceOptions.map((s, i) => {
              const on = values.services.includes(s);
              return (
                <label key={s} className={cn(pill, on ? pillOn : pillOff)}>
                  <input
                    type="checkbox"
                    name="services"
                    value={s}
                    checked={on}
                    onChange={() => set("services", on ? values.services.filter((x) => x !== s) : [...values.services, s])}
                    className="sr-only"
                    {...(i === 0 ? invalidProps("services", eid("services"), errors.services) : {})}
                  />
                  {on ? <Check aria-hidden className="size-4" strokeWidth={3} /> : null}
                  {s}
                </label>
              );
            })}
          </div>
          <FieldError id={eid("services")} message={errors.services} />
        </fieldset>
      </Step>

      <Step n={3} title="Project details" hint="Budget and timing help us suggest the right approach.">
        {radios("budget", "Budget range", budgetOptions)}
        {radios("timeline", "Timeline", timelineOptions)}
        <div>
          <label htmlFor={`${id}-message`} className="font-medium">
            Tell us about the project
            <Required />
          </label>
          <textarea id={`${id}-message`} name="message" rows={6} required value={values.message}
            onChange={(e) => set("message", e.target.value)} className={inputCls}
            placeholder="What are you building, who is it for, and where are you today?"
            {...invalidProps("message", eid("message"), errors.message)} />
          <FieldError id={eid("message")} message={errors.message} />
        </div>
      </Step>

      <div className="space-y-6 border-t border-line pt-8">
        <Honeypot value={values.website} onChange={(v) => set("website", v)} />
        <Consent checked={values.consent} onChange={(v) => set("consent", v)} error={errors.consent} errorId={eid("consent")} />
        <Turnstile />
        <SubmitButton pending={pending} label="Send project brief" />
      </div>
    </form>
  );
}
