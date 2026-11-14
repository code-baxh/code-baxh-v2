"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState, useSyncExternalStore } from "react";
import { CONSENT_EVENT, OPEN_EVENT, readConsent, saveConsent, setBannerOpen, type Consent } from "@/lib/consent";

const subscribe = (onChange: () => void) => {
  window.addEventListener(CONSENT_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
};

type GtagWindow = { gtag?: (...args: unknown[]) => void; [key: string]: unknown };

/** Removes _ga and _ga_<ID>, which GA sets on the top-level domain. */
function clearGaCookies() {
  const parts = location.hostname.split(".");
  for (const pair of document.cookie.split(";")) {
    const name = pair.split("=")[0].trim();
    if (!name.startsWith("_ga")) continue;
    document.cookie = `${name}=; Max-Age=0; path=/`;
    for (let i = 0; i < parts.length - 1; i++) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${parts.slice(i).join(".")}`;
    }
  }
}

const button =
  "inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-line-strong px-5 text-sm font-medium text-fg transition-colors hover:border-accent-text hover:text-accent-text";

/**
 * Cookie banner plus Google Analytics. GA4 is not requested at all until the visitor accepts
 * (consent mode "basic"), and ad signals stay denied. Accept and Decline carry equal weight,
 * and "Cookie settings" in the footer reopens the banner so consent can be withdrawn as easily
 * as it was given. Renders nothing on the server, so it never affects static HTML or LCP.
 */
export function ConsentManager({ gaId }: { gaId: string }) {
  const consent = useSyncExternalStore(subscribe, readConsent, () => "unknown" as const);
  const [reopened, setReopened] = useState(false);
  const visible = consent === null || reopened;

  useEffect(() => {
    const onOpen = () => setReopened(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => setBannerOpen(visible), [visible]);

  const choose = (c: Consent) => {
    const w = window as unknown as GtagWindow;
    // Covers changing your mind after GA has already loaded in this tab.
    w[`ga-disable-${gaId}`] = c !== "granted";
    w.gtag?.("consent", "update", { analytics_storage: c });
    if (c === "denied") clearGaCookies();
    saveConsent(c);
    setReopened(false);
  };

  return (
    <>
      {consent === "granted" ? (
        <>
          <Script id="ga4" strategy="lazyOnload">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'granted'});gtag('js',new Date());gtag('config','${gaId}',{cookie_expires:34128000});`}
          </Script>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="lazyOnload" />
        </>
      ) : null}

      {visible ? (
        <section
          aria-labelledby="consent-title"
          className="fixed inset-x-4 bottom-4 z-50 sm:right-auto sm:max-w-sm"
        >
          <div className="card p-5 text-left shadow-2xl shadow-black/40">
            <h2 id="consent-title" className="font-display font-semibold">
              Analytics cookies
            </h2>
            <p className="mt-1.5 text-sm text-muted">
              May we use Google Analytics cookies to see, in aggregate, how the site is used? They stay off unless you
              accept. You can change this any time under Cookie settings.{" "}
              <Link href="/privacy#cookies" className="text-fg underline underline-offset-2 hover:text-accent-text">
                Privacy Policy
              </Link>
            </p>
            <div className="mt-4 flex gap-2">
              <button type="button" className={button} onClick={() => choose("denied")}>
                Decline
              </button>
              <button type="button" className={button} onClick={() => choose("granted")}>
                Accept
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
