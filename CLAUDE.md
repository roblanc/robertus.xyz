# robertus.xyz — Claude Instructions

## Git workflow

- Always commit and push directly to `main`.
- Do NOT create feature branches unless explicitly asked.
- After every change, commit with a clear message and push immediately.

---

## Loop Protocol (autonomous agent mode)

When invoked without explicit instruction:

1. **Read** `BACKLOG.md` — find the first `- [ ]` task
2. **Mark in-progress**: `[ ]` → `[~]`, commit `chore: start <task>`
3. **Execute** the task fully
4. **Commit** with a clear message, push to main
5. **Mark done**: `[~]` → `[x]`, commit `chore: complete <task>`
6. **Exit** — one task per invocation
