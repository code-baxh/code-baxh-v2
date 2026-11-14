"use client";

import { openConsentSettings } from "@/lib/consent";

/** Reopens the cookie banner so a visitor can change or withdraw their choice. */
export function CookieSettingsButton({ className, children = "Cookie settings" }: { className?: string; children?: React.ReactNode }) {
  return (
    <button type="button" onClick={openConsentSettings} className={className}>
      {children}
    </button>
  );
}
