# Run instructions: X bookmarks → website

You are processing captured X posts for robertus.xyz. Work from the repo root.
A run has two phases; do both, in order.

## Phase 1 — publish what Robert approved

Read `automation/x-bookmarks/staging.md`. For every proposal checked `- [x]`:

1. Apply the edit exactly as written in its **Line** field, to the page named in
   its **Destination** field. If Robert edited the line text, his version wins —
   publish what's on the page, not what you would have written.
2. Append entries to existing lists in the style already there. Match the
   surrounding bullet format; don't reformat, re-sort, or touch neighbouring
   lines.
3. If the destination is `content/bookmarks.md`, add the entry under the current
   month's heading, newest first. Create the month heading if absent.
4. Remove the published proposal block from `staging.md`.

Leave unchecked proposals alone — they are still under review. Delete nothing
Robert hasn't acted on.

## Phase 2 — triage new captures

Read every `.md` file in `automation/x-bookmarks/inbox/` (ignore `.gitkeep`).
Each holds `url`, `saved`, and an optional `note`.

For each capture:

1. **Dedupe.** If the URL is already in `automation/x-bookmarks/processed.tsv`,
   delete the inbox file and skip it.
2. **Gather what context you can.** You will usually *not* be able to read the
   post — x.com blocks unauthenticated reads. Use, in order: Robert's note, the
   author handle from the URL, and a web search for the handle or any product
   name in the note. Do not guess at post content you could not verify, and
   never invent a quote, a claim, or a description of what the post said.
3. **Decide a destination** using the routing table below.
4. **Write a proposal** into `staging.md` in the format below.
5. **Record** the URL in `processed.tsv`, then delete the inbox file.

If context is too thin to route confidently, still write the proposal — set
Destination to `content/bookmarks.md` and add `needs-context` to the Notes
field, so Robert can fix it in one edit instead of rediscovering the link.

### Routing table

| Destination | What belongs there |
| --- | --- |
| `content/Tools.md` | Tools, apps, and services under `### Resources` — things you'd use, not read |
| `content/awesome-websites.md` | Sites interesting as sites: personal pages, unusual web things |
| `content/blogs-I-Follow.md` | An author's blog or newsletter, when the link is to the writer's home base |
| `content/research-papers.md` | Papers and preprints. Link the paper itself, not the tweet about it |
| `content/prompts.md` | Prompts, prompting techniques, system-prompt writeups |
| `content/youtube.md` | Video and channel recommendations |
| `content/books.md` | Books |
| `content/setup.md` | Only if Robert's note says he actually adopted it into his setup |
| `content/bookmarks.md` | Default. Anything interesting that fits none of the above |

Prefer the specific page when the fit is obvious; prefer `bookmarks.md` when
it isn't. A wrong promotion into a curated list costs Robert more to undo than a
missed one costs him to move.

**Link to the source, not the tweet,** whenever the post is pointing at
something — a tool's own site, the paper's PDF, the repo. Keep the X URL as the
`via` reference. A curated list full of x.com links ages badly.

### Proposal format

```markdown
### <short title>
- **Source:** <x.com url>
- **Link:** <the actual thing being linked, or same as source>
- **Destination:** content/<page>.md
- **Line:** - [Title](url) — one clause on why it's worth keeping
- **Notes:** <your reasoning, any uncertainty, or `needs-context`>
- [ ] approve
```

Write the **Line** in Robert's register: lowercase-ish, dry, specific, no
marketing adjectives. Look at the target page's existing entries and match them.
Most entries on this site are a bare `- [Name](url)` with no description at all —
when in doubt, follow that and skip the clause.

## Finishing a run

- Run `npx quartz build` if you edited anything under `content/`, to be sure the
  site still builds. If it fails, fix it or revert that edit before committing.
- Commit and push to `main`. One commit per run, message
  `bookmarks: <n> published, <m> queued` (omit either half if zero).
- If nothing changed — empty inbox, nothing approved — do not commit, and do not
  message Robert. A quiet run is the normal case.
