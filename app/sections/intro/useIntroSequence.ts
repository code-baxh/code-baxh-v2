export type IntroPhase = "code" | "loading" | "exit";

const LOADING_MS = 300;

/**
 * Hard cap on the whole intro: whatever is showing fades out at this point.
 * Keeps the branded flourish without gating LCP/CLS on mobile — the previous
 * ~8-10s choreography (cursor, click, window expand) measured 7.3s LCP and
 * 0.466 CLS; the expand morph animated top/left/width/height, which the
 * Layout Instability API counts as a shift. The intro is now opacity-only.
 */
export const MAX_INTRO_MS = 1500;

export function runLoadingPhase(onComplete: () => void) {
  const timer = window.setTimeout(onComplete, LOADING_MS);
  return () => window.clearTimeout(timer);
}
