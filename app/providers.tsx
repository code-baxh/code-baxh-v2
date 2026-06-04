"use client";

import { IntroProvider } from "./sections/intro";

export function Providers({ children }: { children: React.ReactNode }) {
  return <IntroProvider>{children}</IntroProvider>;
}
