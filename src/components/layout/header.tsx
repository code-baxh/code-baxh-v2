"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/config/site";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[92rem] items-center justify-between gap-4 px-5 sm:px-8 lg:px-14">
        <Logo />
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-full px-3.5 text-[0.95rem] text-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <ButtonLink href="/contact" variant="secondary" className="hidden min-h-10 px-5 lg:inline-flex">
            Contact us
          </ButtonLink>
          <ButtonLink href="/start-a-project" className="hidden min-h-10 px-5 sm:inline-flex">
            Start a project
          </ButtonLink>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </div>
      <div aria-hidden className="scroll-progress absolute inset-x-0 bottom-0 h-0.5 bg-accent" />
      <nav id="mobile-nav" aria-label="Mobile" hidden={!open} className="border-t border-line md:hidden">
        <ul className="mx-auto flex max-w-[92rem] flex-col px-5 py-3">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center text-lg text-fg"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="grid gap-3 py-3">
            <ButtonLink href="/start-a-project" className="w-full">
              Start a project
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" className="w-full">
              Contact us
            </ButtonLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
