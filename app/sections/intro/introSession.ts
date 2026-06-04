let introCompletedThisLoad = false;

export function hasIntroCompletedThisLoad() {
  return introCompletedThisLoad;
}

export function markIntroCompletedThisLoad() {
  introCompletedThisLoad = true;
}
