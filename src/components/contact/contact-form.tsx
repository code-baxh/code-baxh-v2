"use client";

import { useEffect, useId, useRef, useState, useTransition } from "react";
import { submitMessage } from "@/app/contact/actions";
import { errorsFrom, messageSchema, type MessageField } from "@/lib/contact-schema";
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

type Errors = Partial<Record<MessageField, string>>;
const empty = { name: "", email: "", phone: "", message: "", consent: false, website: "" };
const order: MessageField[] = ["name", "email", "phone", "message", "consent"];

/** The short "Contact us" form: name, email, optional phone and a message. */
export function ContactForm() {
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
    if (errors[key as MessageField]) setErrors((e) => ({ ...e, [key]: undefined }));
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
    const parsed = messageSchema.safeParse(payload);
    if (!parsed.success) {
      fail("Please correct the highlighted fields and try again.", errorsFrom<MessageField>(parsed.error));
      return;
    }
    setErrors({});
    setAlert(undefined);
    startTransition(async () => {
      try {
        const res = await submitMessage(payload as Parameters<typeof submitMessage>[0]);
        if (res.ok) {
          setSent(true);
          setValues(empty);
        } else fail(res.message, res.fieldErrors);
      } catch {
        fail("We could not reach the server. Your details are still in the form, so please try again.");
      }
    });
  }

  if (sent) return <SuccessPanel ref={successRef} title="Thank you. Your message is with us." onReset={() => setSent(false)} />;

  const eid = (k: MessageField) => `${id}-${k}-error`;

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="card space-y-6 p-6 text-left sm:p-10">
      <FormAlert ref={alertRef} message={alert} />

      <div>
        <label htmlFor={`${id}-name`} className="font-medium">
          Name
          <Required />
        </label>
        <input id={`${id}-name`} name="name" autoComplete="name" required value={values.name}
          onChange={(e) => set("name", e.target.value)} className={inputCls} {...invalidProps("name", eid("name"), errors.name)} />
        <FieldError id={eid("name")} message={errors.name} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-email`} className="font-medium">
            Email
            <Required />
          </label>
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" required value={values.email}
            onChange={(e) => set("email", e.target.value)} className={inputCls} {...invalidProps("email", eid("email"), errors.email)} />
          <FieldError id={eid("email")} message={errors.email} />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className="font-medium">
            Phone <span className="font-normal text-muted">(optional)</span>
          </label>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" value={values.phone}
            onChange={(e) => set("phone", e.target.value)} className={inputCls} />
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-message`} className="font-medium">
          Message
          <Required />
        </label>
        <textarea id={`${id}-message`} name="message" rows={5} required value={values.message}
          onChange={(e) => set("message", e.target.value)} className={inputCls} placeholder="How can we help?"
          {...invalidProps("message", eid("message"), errors.message)} />
        <FieldError id={eid("message")} message={errors.message} />
      </div>

      <Honeypot value={values.website} onChange={(v) => set("website", v)} />
      <Consent checked={values.consent} onChange={(v) => set("consent", v)} error={errors.consent} errorId={eid("consent")} />
      <Turnstile />
      <SubmitButton pending={pending} label="Send message" />
    </form>
  );
}
