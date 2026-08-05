#!/bin/bash
# Sync Obsidian/Website → content/, then push to GitHub
set -e

OBSIDIAN="/Users/romica/Library/Mobile Documents/iCloud~md~obsidian/Documents/Obsidian/Website"
REPO="$(dirname "$0")"

# Pages written by automation rather than by the vault. --delete would wipe
# these on every publish, so they are excluded from the sync. Add any new
# automation-managed page here too. See automation/x-bookmarks/README.md
AUTOMATED_PAGES=(
  "bookmarks.md"
)

echo "Syncing from Obsidian..."
rsync -a --delete "${AUTOMATED_PAGES[@]/#/--exclude=}" "$OBSIDIAN/" "$REPO/content/"

echo "Pushing to GitHub..."
cd "$REPO"
npx quartz sync
