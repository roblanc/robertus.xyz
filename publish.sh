#!/bin/bash
# Sync Obsidian/Website → content/, then push to GitHub
set -e

OBSIDIAN="/Users/romica/Library/Mobile Documents/iCloud~md~obsidian/Documents/Obsidian/Website"
REPO="$(dirname "$0")"

echo "Syncing from Obsidian..."
rsync -a --delete "$OBSIDIAN/" "$REPO/content/"

echo "Pushing to GitHub..."
cd "$REPO"
npx quartz sync
