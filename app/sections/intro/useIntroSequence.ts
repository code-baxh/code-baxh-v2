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

const LOADING_MS = 3200;
const SAFETY_MS = 18000;

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

export function runIntroSequence(callbacks: SequenceCallbacks) {
  let cancelled = false;

  const run = async () => {
    await sleep(400);
    if (cancelled) return;
    callbacks.onPhase("cursor-in");

    await sleep(500);
    if (cancelled) return;
    callbacks.onPhase("cursor-move");

    await sleep(700);
    if (cancelled) return;
    callbacks.onPhase("click");

    await sleep(200);
    if (cancelled) return;
    callbacks.onPhase("expand");
    callbacks.onExpand();
    callbacks.onBackgroundDark();

    await sleep(850);
    if (cancelled) return;
    callbacks.onPhase("code");
  };

  const safetyTimer = window.setTimeout(() => {
    if (!cancelled) callbacks.onComplete();
  }, SAFETY_MS);

  run();

  return () => {
    cancelled = true;
    window.clearTimeout(safetyTimer);
  };
}

export function runLoadingPhase(onComplete: () => void) {
  const timer = window.setTimeout(onComplete, LOADING_MS);
  return () => window.clearTimeout(timer);
}
