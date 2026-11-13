"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HelpPrompt = dynamic(() => import("./help-prompt").then((m) => m.HelpPrompt), { ssr: false });

/**
 * Loads the help prompt's code (and the form validation it pulls in) only once the page
 * has loaded and gone idle. The prompt renders nothing for its first 1.5–20 seconds
 * anyway, so this keeps ~50 KB of JS out of the first load without changing what anyone sees.
 */
export function HelpPromptLoader() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const start = () => setLoad(true);
    const whenIdle = () => {
      if ("requestIdleCallback" in window) window.requestIdleCallback(start, { timeout: 4000 });
      else setTimeout(start, 2000);
    };
    if (document.readyState === "complete") whenIdle();
    else window.addEventListener("load", whenIdle, { once: true });
    return () => window.removeEventListener("load", whenIdle);
  }, []);

  return load ? <HelpPrompt /> : null;
}
