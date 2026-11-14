/**
 * GA4, defaulting to the property the live site already reports to, so measurement carries
 * on. Set NEXT_PUBLIC_GA_MEASUREMENT_ID="" to turn it off (for example when switching to
 * Plausible only); the cookie banner and the "Cookie settings" links then disappear too.
 * GA4 loads only after a visitor accepts analytics cookies.
 */
const raw = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-0ZK9N00Q90";

/** Only a well-formed measurement ID, since it is written into an inline script. */
export const gaId = /^G-[A-Z0-9]+$/.test(raw) ? raw : "";
