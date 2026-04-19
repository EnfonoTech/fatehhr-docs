#!/usr/bin/env bash
# Publish docs: commit + push to GitHub, then deploy to Vercel production.
#
# Usage:
#   bash scripts/deploy.sh "short commit message"
#
# Once Vercel's GitHub integration is connected to EnfonoTech/fatehhr-docs,
# the `vercel --prod` step becomes redundant — a push to main triggers
# auto-deploy. Until then this keeps things in sync.
set -euo pipefail

MSG="${1:-docs: update}"

cd "$(dirname "$0")/.."

if ! git diff --quiet || ! git diff --cached --quiet || [[ -n "$(git status --porcelain)" ]]; then
  git add -A
  git commit -m "$MSG"
fi

git push origin main

vercel --prod --yes
