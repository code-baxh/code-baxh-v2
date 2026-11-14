/** Shown on the Privacy Policy and Terms. Update whenever either document changes. */
export const legalLastUpdated = "15 November 2026";

/** Processors named in the Privacy Policy. Keep in line with the services actually configured. */
export const processors = [
  { name: "Netlify, Inc.", purpose: "Website hosting and delivery", location: "United States / global network" },
  { name: "Google (Google Analytics 4), if you accept cookies", purpose: "Website statistics", location: "EU / United States" },
  { name: "Resend (or the SMTP provider configured for the site)", purpose: "Sending contact-form emails", location: "United States / EU" },
  { name: "Plausible Analytics, when enabled", purpose: "Cookieless website statistics", location: "EU" },
  { name: "Cloudflare (Turnstile), when enabled", purpose: "Spam protection on the contact form", location: "Global" },
  { name: "Cal.com, when you book a call", purpose: "Scheduling discovery calls", location: "United States / EU" },
];
