"use server";

import { headers } from "next/headers";
import {
  contactSchema,
  errorsFrom,
  messageSchema,
  type ContactField,
  type ContactInput,
  type ContactResult,
  type MessageField,
  type MessageInput,
  type MessageResult,
} from "@/lib/contact-schema";
import { sendEnquiry, sendMessage } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";

const FAILED =
  "Something went wrong on our side and your message was not sent. Your details are still in the form, so please try again.";

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: new URLSearchParams({ secret, response: token, remoteip: ip }),
  });
  const json = (await res.json()) as { success?: boolean };
  return json.success === true;
}

/** Rate limit and optional Turnstile check shared by both forms. Returns an error message, or null to continue. */
async function guard(turnstileToken: string) {
  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (!rateLimit(ip)) return "Too many submissions from this network. Please try again in a few minutes.";
  if (process.env.NEXT_PUBLIC_TURNSTILE_ENABLED === "true") {
    const passed = turnstileToken ? await verifyTurnstile(turnstileToken, ip) : false;
    if (!passed) return "We could not verify that you are human. Please try again.";
  }
  return null;
}

/** "Start a project" form. */
export async function submitContact(input: ContactInput): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    const fieldErrors = errorsFrom<ContactField>(parsed.error);
    // A filled honeypot is a bot: report success and send nothing.
    if (fieldErrors.website) return { ok: true };
    return { ok: false, message: "Please correct the highlighted fields and try again.", fieldErrors };
  }
  const blocked = await guard(parsed.data.turnstileToken);
  if (blocked) return { ok: false, message: blocked };
  try {
    await sendEnquiry(parsed.data);
    return { ok: true };
  } catch (err) {
    console.error("[start-a-project] sending failed:", err);
    return { ok: false, message: FAILED };
  }
}

/** Short "Contact us" form. */
export async function submitMessage(input: MessageInput): Promise<MessageResult> {
  const parsed = messageSchema.safeParse(input);
  if (!parsed.success) {
    const fieldErrors = errorsFrom<MessageField>(parsed.error);
    if (fieldErrors.website) return { ok: true };
    return { ok: false, message: "Please correct the highlighted fields and try again.", fieldErrors };
  }
  const blocked = await guard(parsed.data.turnstileToken);
  if (blocked) return { ok: false, message: blocked };
  try {
    await sendMessage(parsed.data);
    return { ok: true };
  } catch (err) {
    console.error("[contact] sending failed:", err);
    return { ok: false, message: FAILED };
  }
}
