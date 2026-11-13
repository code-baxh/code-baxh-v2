import { z } from "zod";
import { homeServices } from "@/content/services";

export const budgetOptions = [
  "Under $10k",
  "$10k to $25k",
  "$25k to $50k",
  "$50k to $100k",
  "Over $100k",
  "Not sure yet",
] as const;

export const timelineOptions = ["As soon as possible", "Within 1 month", "1 to 3 months", "3 months or more", "Just exploring"] as const;

/** Kept short on purpose: the merged service line-up, not every individual service page. */
export const serviceOptions = [...homeServices.map((s) => s.title), "Something else"];

/** One schema, used by the form in the browser and by the server action. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.email("Please enter a valid work email address.").max(200),
  company: z.string().trim().max(150).optional().default(""),
  services: z.array(z.enum(serviceOptions as [string, ...string[]])).min(1, "Choose at least one service."),
  budget: z.enum(budgetOptions, "Choose a budget range."),
  timeline: z.enum(timelineOptions, "Choose a timeline."),
  message: z.string().trim().min(20, "Tell us a little more, at least 20 characters.").max(5000),
  consent: z.literal(true, "Please confirm you have read the Privacy Policy."),
  /** Honeypot. Real people never see or fill this field. */
  website: z.string().max(0).optional().default(""),
  turnstileToken: z.string().optional().default(""),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactData = z.output<typeof contactSchema>;
export type ContactField = keyof ContactData;

export type ContactResult =
  | { ok: true }
  | { ok: false; message: string; fieldErrors?: Partial<Record<ContactField, string>> };


/** The short "Contact us" form: a general message rather than a project brief. */
export const messageSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.email("Please enter a valid email address.").max(200),
  phone: z.string().trim().max(40).optional().default(""),
  message: z.string().trim().min(10, "Please write a short message, at least 10 characters.").max(5000),
  consent: z.literal(true, "Please confirm you have read the Privacy Policy."),
  website: z.string().max(0).optional().default(""),
  turnstileToken: z.string().optional().default(""),
});

export type MessageInput = z.input<typeof messageSchema>;
export type MessageData = z.output<typeof messageSchema>;
export type MessageField = keyof MessageData;
export type MessageResult =
  | { ok: true }
  | { ok: false; message: string; fieldErrors?: Partial<Record<MessageField, string>> };

export function errorsFrom<K extends string>(error: z.ZodError): Partial<Record<K, string>> {
  const out: Partial<Record<K, string>> = {};
  for (const issue of error.issues) {
    const key = issue.path[0] as K | undefined;
    if (key && !out[key]) out[key] = issue.message;
  }
  return out;
}
