"use client";

import { ThemeProvider } from "next-themes";
import { LazyMotion, MotionConfig, domAnimation } from "motion/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <LazyMotion features={domAnimation} strict>
        {/* reducedMotion="user" turns transform animations off for people who ask for that. */}
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  );
}
