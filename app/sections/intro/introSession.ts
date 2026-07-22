const INTRO_SEEN_KEY = "cb-intro-seen";

let introCompletedThisLoad = false;

export function hasIntroCompletedThisLoad() {
  if (introCompletedThisLoad) return true;
  // Persisted across visits: returning visitors skip the intro entirely.
  try {
    return window.localStorage.getItem(INTRO_SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

export function markIntroCompletedThisLoad() {
  introCompletedThisLoad = true;
  try {
    window.localStorage.setItem(INTRO_SEEN_KEY, "1");
  } catch {
    // Storage unavailable (private mode etc.) — in-memory flag still applies.
  }
}
