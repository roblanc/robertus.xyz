# robertus.xyz — Claude Instructions

## Git workflow

- Always commit and push directly to `main`.
- Do NOT create feature branches unless explicitly asked.
- After every change, commit with a clear message and push immediately.

---

## Quartz v5

This site runs on Quartz 5. Key differences from v4:

- **Config**: `quartz.config.yaml` (YAML) instead of `quartz.config.ts` (TypeScript)
- **Plugins**: Community plugins installed via npm. Build command: `npx quartz plugin install && npx quartz build`
- **Layout**: Declared per-plugin in `quartz.config.yaml` via `layout.position` (left/right/beforeBody/afterBody/footer)
- **URLs**: All lowercase and hyphenated. Old uppercase URLs redirect automatically via AliasRedirects.
- **Node.js**: Requires Node >= 22

---

## Loop Protocol (autonomous agent mode)

When invoked without explicit instruction:

1. **Read** `BACKLOG.md` — find the first `- [ ]` task
2. **Mark in-progress**: `[ ]` → `[~]`, commit `chore: start <task>`
3. **Execute** the task fully
4. **Commit** with a clear message, push to main
5. **Mark done**: `[~]` → `[x]`, commit `chore: complete <task>`
6. **Exit** — one task per invocation
