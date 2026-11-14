/**
 * The visitor's analytics-cookie choice. Kept in local storage (a strictly necessary record of
 * the choice itself), with an in-memory fallback so the banner still closes when storage is
 * blocked. A choice older than 12 months counts as no choice, so the visitor is asked again.
 */
export type Consent = "granted" | "denied";

const KEY = "cb-consent";
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

/** Fired on window when the choice changes. */
export const CONSENT_EVENT = "cb:consent";
/** Fired on window to reopen the banner ("Cookie settings"). */
export const OPEN_EVENT = "cb:consent-open";
/** Fired on window when the banner opens or closes. */
export const BANNER_EVENT = "cb:consent-banner";

let memory: Consent | null = null;
let bannerOpen = false;

export function readConsent(): Consent | null {
  try {
    const stored = JSON.parse(localStorage.getItem(KEY) ?? "null") as { c?: string; t?: number } | null;
    if ((stored?.c === "granted" || stored?.c === "denied") && Date.now() - (stored.t ?? 0) < MAX_AGE_MS) {
      return stored.c;
    }
  } catch {}
  return memory;
}

export function saveConsent(c: Consent) {
  memory = c;
  try {
    localStorage.setItem(KEY, JSON.stringify({ c, t: Date.now() }));
  } catch {}
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

/** Lets other corner widgets (the help prompt) wait until the banner is answered. */
export function setBannerOpen(open: boolean) {
  if (open === bannerOpen) return;
  bannerOpen = open;
  window.dispatchEvent(new Event(BANNER_EVENT));
}

export const isBannerOpen = () => bannerOpen;
