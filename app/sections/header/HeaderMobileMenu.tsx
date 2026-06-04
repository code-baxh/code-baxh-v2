"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NAV_CTA, NAV_LINKS } from "./constants";

type HeaderMobileMenuProps = {
  introReady: boolean;
};

export function HeaderMobileMenu({ introReady }: HeaderMobileMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  const drawer =
    open && typeof document !== "undefined"
      ? createPortal(
          <div
            className="fixed inset-0 z-[9990] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
              aria-label="Close menu"
              onClick={close}
            />

            <aside
              id="mobile-nav-drawer"
              className="theme-obsidian absolute left-0 top-0 z-[9991] flex h-full w-[min(18rem,86vw)] flex-col border-r border-white/[0.08] bg-[#0d0d0d] px-6 pb-8 pt-24 shadow-[16px_0_48px_rgb(0_0_0/0.5)] animate-[mobile-drawer-in_0.3s_cubic-bezier(0.16,1,0.3,1)_both]"
            >
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {NAV_LINKS.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-xl px-3 py-3.5 text-base font-medium transition-colors duration-150 hover:bg-white/[0.06] hover:text-text-primary ${
                      pathname === link.href
                        ? "bg-white/[0.06] text-text-primary"
                        : "text-text-secondary"
                    } animate-fade-up`}
                    style={{ animationDelay: `${index * 60}ms` }}
                    onClick={close}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto pt-8">
                <Link
                  href={NAV_CTA.href}
                  className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#0d0d0d] transition-[transform,box-shadow] duration-150 hover:shadow-[0_8px_24px_rgb(255_184_0/0.28)]"
                  onClick={close}
                >
                  {NAV_CTA.label}
                </Link>
              </div>
            </aside>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full text-text-primary transition-[background-color,transform] duration-150 hover:bg-white/[0.06] active:scale-95 sm:size-10 lg:hidden ${
          introReady ? "animate-fade-up" : "opacity-0"
        } ${open ? "bg-white/[0.08]" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        onClick={() => setOpen((value) => !value)}
        style={{ animationDelay: introReady ? "320ms" : undefined }}
      >
        <span className="flex items-center gap-1" aria-hidden>
          <span className="size-1 rounded-full bg-current" />
          <span className="size-1 rounded-full bg-current" />
          <span className="size-1 rounded-full bg-current" />
        </span>
      </button>

      {drawer}
    </>
  );
}
