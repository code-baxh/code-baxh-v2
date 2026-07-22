export type IntroPhase =
  | "idle"
  | "cursor-in"
  | "cursor-move"
  | "click"
  | "expand"
  | "code"
  | "loading"
  | "exit";

type SequenceCallbacks = {
  onPhase: (phase: IntroPhase) => void;
  onExpand: () => void;
  onBackgroundDark: () => void;
  onComplete: () => void;
};

const LOADING_MS = 300;
// Hard cap on the whole intro: whatever phase is showing fades out at this
// point. Keeps the branded flourish without gating LCP/CLS on mobile
// (measured 7.3s LCP / 0.466 CLS with the previous ~8-10s sequence).
const MAX_INTRO_MS = 1500;

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

export function runIntroSequence(callbacks: SequenceCallbacks) {
  let cancelled = false;

  const run = async () => {
    await sleep(150);
    if (cancelled) return;
    callbacks.onPhase("cursor-in");

    await sleep(250);
    if (cancelled) return;
    callbacks.onPhase("cursor-move");

    await sleep(300);
    if (cancelled) return;
    callbacks.onPhase("click");

    await sleep(150);
    if (cancelled) return;
    callbacks.onPhase("expand");
    callbacks.onExpand();
    callbacks.onBackgroundDark();

    await sleep(350);
    if (cancelled) return;
    callbacks.onPhase("code");
  };

  const capTimer = window.setTimeout(() => {
    if (!cancelled) callbacks.onComplete();
  }, MAX_INTRO_MS);

  run();

  return () => {
    cancelled = true;
    window.clearTimeout(capTimer);
  };
}

export function runLoadingPhase(onComplete: () => void) {
  const timer = window.setTimeout(onComplete, LOADING_MS);
  return () => window.clearTimeout(timer);
}
