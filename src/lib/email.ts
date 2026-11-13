import "server-only";
import nodemailer from "nodemailer";
import { Resend } from "resend";
import { site } from "@/config/site";
import type { ContactData, MessageData } from "./contact-schema";
import { abs } from "./seo";

type Mail = { to: string; subject: string; html: string; text: string; replyTo?: string };

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Sends through Resend when RESEND_API_KEY is set, otherwise through SMTP. */
async function send(mail: Mail) {
  // Falls back to the SMTP account, which is what Gmail requires as the sender anyway.
  const from =
    process.env.CONTACT_FROM_EMAIL || (process.env.SMTP_USER ? `${site.name} <${process.env.SMTP_USER}>` : "");
  if (!from) throw new Error("No sender address: set CONTACT_FROM_EMAIL or SMTP_USER");

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({ from, ...mail });
    if (error) throw new Error(`Resend: ${error.message}`);
    return;
  }
  if (process.env.SMTP_HOST && process.env.SMTP_PASS) {
    const port = Number(process.env.SMTP_PORT ?? 587);
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
    });
    await transport.sendMail({ from, ...mail });
    return;
  }
  throw new Error("No email provider configured: set SMTP_PASS (with SMTP_HOST and SMTP_USER) or RESEND_API_KEY");
}

function shell(title: string, body: string) {
  return `<!doctype html><html><body style="margin:0;background:#06080d;font-family:Arial,Helvetica,sans-serif;color:#eef0f5">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:32px 16px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#0c1018;border:1px solid #232a38;border-radius:16px">
<tr><td style="padding:28px 32px;border-bottom:1px solid #232a38"><a href="${esc(site.url)}" style="text-decoration:none"><img src="${esc(abs("/logo/codebaxh-logo-dark.png"))}" width="161" height="42" alt="CodeBaxh" style="display:block;border:0;outline:none;width:161px;height:42px;color:#ffffff;font-size:20px;font-weight:700"></a></td></tr>
<tr><td style="padding:32px"><h1 style="margin:0 0 16px;font-size:22px;color:#ffffff">${title}</h1>${body}</td></tr>
<tr><td style="padding:20px 32px;border-top:1px solid #232a38;font-size:12px;color:#a0a9ba">${esc(site.legal.entityName)} · ${esc(site.url)}</td></tr>
</table></td></tr></table></body></html>`;
}

type Enquiry = {
  /** Shown in the subject and heading, e.g. "project enquiry" or "message". */
  kind: string;
  name: string;
  email: string;
  rows: [string, string][];
  message: string;
};

/** Sends the enquiry to the team inbox, then a branded auto-reply to the sender. */
async function deliver({ kind, name, email, rows, message }: Enquiry) {
  const to = process.env.CONTACT_TO_EMAIL || site.contact.enquiriesEmail;
  const table = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 16px 6px 0;color:#a0a9ba;vertical-align:top">${k}</td><td style="padding:6px 0">${esc(v)}</td></tr>`,
    )
    .join("");
  const body = esc(message).replace(/\n/g, "<br>");

  await send({
    to,
    replyTo: email,
    subject: `New ${kind} from ${name}`,
    html: shell(
      `New ${kind}`,
      `<table role="presentation" cellpadding="0" cellspacing="0" style="font-size:15px">${table}</table>
       <p style="margin:24px 0 8px;color:#a0a9ba;font-size:13px">Message</p><p style="margin:0;font-size:15px;line-height:1.6">${body}</p>`,
    ),
    text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}`,
  });

  await send({
    to: email,
    subject: "We have received your message | CodeBaxh",
    html: shell(
      `Thank you, ${esc(name.split(" ")[0])}.`,
      `<p style="font-size:15px;line-height:1.6;margin:0 0 14px">We have received your ${kind} and a member of the team will reply shortly, usually within one working day.</p>
       <p style="font-size:15px;line-height:1.6;margin:0 0 14px">For your records, this is what you sent us:</p>
       <p style="font-size:14px;line-height:1.6;margin:0;padding:14px 16px;background:#151a26;border-radius:10px;color:#cfd5e2">${body}</p>
       <p style="font-size:13px;line-height:1.6;margin:20px 0 0;color:#a0a9ba">If you did not send this, you can ignore this email.</p>`,
    ),
    text: `Thank you, ${name}.\n\nWe have received your ${kind} and will reply shortly, usually within one working day.\n\nYour message:\n${message}\n\nCodeBaxh`,
  });
}

export function sendEnquiry(data: ContactData) {
  return deliver({
    kind: "project enquiry",
    name: data.name,
    email: data.email,
    message: data.message,
    rows: [
      ["Name", data.name],
      ["Email", data.email],
      ["Company", data.company || "Not given"],
      ["Services", data.services.join(", ")],
      ["Budget", data.budget],
      ["Timeline", data.timeline],
    ],
  });
}

export function sendMessage(data: MessageData) {
  return deliver({
    kind: "message",
    name: data.name,
    email: data.email,
    message: data.message,
    rows: [
      ["Name", data.name],
      ["Email", data.email],
      ["Phone", data.phone || "Not given"],
    ],
  });
}
