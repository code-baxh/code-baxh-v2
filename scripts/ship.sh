#!/usr/bin/env bash
# Check the code and push it to GitHub. Vercel is connected to the repository and
# deploys every push to main on its own.
# Usage: pnpm ship
set -euo pipefail
cd "$(dirname "$0")/.."

if ! git diff --quiet || ! git diff --cached --quiet || [ -n "$(git ls-files --others --exclude-standard)" ]; then
  echo "There are uncommitted changes. Commit them first so GitHub and the live site stay identical:"
  git status --short
  exit 1
fi

echo "1/2 Checking the code…"
pnpm typecheck
pnpm lint

echo "2/2 Pushing to GitHub (Vercel deploys it automatically)…"
git push origin main
