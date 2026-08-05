# X bookmarks → website

Capture a post from X on your phone, and a scheduled Claude run turns it into a
draft entry for the site. Nothing reaches robertus.xyz without you approving it.

## How it flows

```
X app (Share → Shortcut)
  └─→ automation/x-bookmarks/inbox/<timestamp>-<id>.md   (one file per capture)
        └─→ daily Claude run reads the inbox
              ├─→ writes proposals into staging.md  ← you review here
              ├─→ records the URL in processed.tsv  (dedupe ledger)
              └─→ deletes the inbox file
                    └─→ you tick [x] on the ones you want
                          └─→ next run publishes them to content/ and pushes
```

Two files matter to you: `staging.md` (the review queue) and `processed.tsv`
(what's already been seen). Everything else is plumbing.

## One-time setup

### 1. GitHub token

Create a **fine-grained** personal access token at
<https://github.com/settings/personal-access-tokens/new>:

- Repository access: **Only select repositories** → `roblanc/robertus.xyz`
- Permissions: **Contents: Read and write** (nothing else)
- Expiration: your call — you'll need to redo this step when it lapses

Copy the token. It's shown once.

### 2. The iOS Shortcut

New Shortcut, named e.g. "Save to garden". Turn on **Show in Share Sheet** and
set accepted input to **URLs** only.

Actions, in order:

1. **Receive** URLs from Share Sheet
2. **Text** → `[[Shortcut Input]]` — call this the URL
3. **Ask for Input** (Text), prompt "Note?", **Allow default answer** empty —
   optional one-liner about why you saved it
4. **Current Date**, then **Format Date** → custom format `yyyy-MM-dd'T'HH-mm-ss`
5. **Text** — the file body:
   ```
   url: [URL from step 2]
   saved: [Formatted Date]
   note: [Provided Input from step 3]
   ```
6. **Base64 Encode** the text from step 5
7. **Get Contents of URL**
   - URL: `https://api.github.com/repos/roblanc/robertus.xyz/contents/automation/x-bookmarks/inbox/[Formatted Date].md`
   - Method: **PUT**
   - Headers:
     - `Authorization` → `Bearer YOUR_TOKEN`
     - `Accept` → `application/vnd.github+json`
   - Request Body: **JSON**
     - `message` (Text) → `bookmark: [Formatted Date]`
     - `content` (Text) → the Base64 Encoded output from step 6

That's a single API call per capture — creating a new file needs no `sha`, so
there's no read-modify-write and two quick captures can't clobber each other.

### 3. Desktop equivalent (optional)

Same idea as a bookmarklet or a `curl` one-liner; the endpoint and body are
identical. Only the filename needs to stay unique.

## Using it

**Share, don't bookmark.** X's bookmark button is private to X and there is no
free way to read it back — the API's free tier ended in February 2026, so
polling your actual bookmarks would mean pay-per-use billing. This pipeline
hangs off the *share* sheet instead: one extra tap, no API account, no cost.

**Add a note when the link isn't self-explanatory.** X blocks unauthenticated
reads of post content, so a run often sees only the URL, the author handle, and
your note. A bare link to a thread with no note may land in staging tagged
`needs-context` rather than being routed well. Five words is plenty.

## Reviewing

Open `staging.md`. Each proposal shows the destination page and the exact line
that would be added. Tick `- [x]` to approve, delete the block to reject, or
edit the text first — the next run publishes exactly what's written there.

## Turning it off

The schedule is a Claude Routine. Ask Claude to list and delete it, or disable
it from your Routines list. Deleting it stops the runs; captures keep piling up
harmlessly in `inbox/` until you re-enable.

## Why these files live outside `content/`

`publish.sh` syncs your Obsidian vault into `content/` with `rsync --delete`.
Anything in `content/` that isn't in the vault gets wiped on your next publish.
So the pipeline's working files sit in `automation/`, and the one page it does
write — `content/bookmarks.md` — is explicitly excluded from that delete in
`publish.sh`. If you ever add more automation-managed pages under `content/`,
add them to that exclude list too.
