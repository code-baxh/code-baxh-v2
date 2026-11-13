"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      type="button"
      aria-label="Switch between dark and light theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="inline-flex size-11 items-center justify-center rounded-full text-muted transition-colors hover:text-fg"
    >
      {/* Both icons render; CSS picks one, so there is no hydration mismatch. */}
      <Sun aria-hidden className="hidden size-5 dark:block" />
      <Moon aria-hidden className="block size-5 dark:hidden" />
    </button>
  );
}
