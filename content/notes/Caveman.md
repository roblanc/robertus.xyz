---
title: "Caveman: When AI Learns to Shut Up"
date: 2026-04-11
description: A review of the caveman Claude Code skill that cuts LLM output tokens by ~65% without losing any substance
tags:
  - AI
  - tools
  - blog
---

"Why use many token when few token do trick."

That's the tagline for [Caveman](https://github.com/JuliusBrussee/caveman), a Claude Code skill by Julius Brussee that reprograms how your AI agent communicates — stripping away all the pleasantries, hedging language, and filler prose that AI models reflexively produce, and replacing it with dense, caveman-speak responses.

The result: roughly **65–75% fewer output tokens**, at no cost to accuracy.

---

### The Problem It Solves

Every AI assistant has a tendency to over-explain. Ask it to fix a bug, and it will tell you what the bug is, why the bug exists, what the fix is, why the fix works, and then close with "I hope that helps!" It's not wrong. It's just exhausting — and expensive, if you're paying per token or waiting for slow responses.

Caveman flips the script. Instead of:

> "The reason your React component is re-rendering is likely because you're creating a new object reference on each render cycle. When you define an object inline in your JSX like `<MyComponent options={{key: 'value'}} />`, JavaScript creates a new object every time the component renders, which causes React to see a different reference and trigger a re-render of `MyComponent`..."

You get:

> "New object ref each render. Inline object prop = new ref = re-render. Wrap in `useMemo`."

Same information. 87% fewer tokens. ~3x faster.

---

### How It Works

Caveman installs as a skill via:

```bash
claude plugin marketplace add JuliusBrussee/caveman
```

Or for other agents (Codex, Cursor, Windsurf, Gemini CLI, etc.):

```bash
npx skills add JuliusBrussee/caveman
```

Once active, you can toggle it with `/caveman`. It comes with four intensity levels:

| Level | Style |
|-------|-------|
| **Lite** | Professional terseness, grammar intact |
| **Full** | Default mode — fragments, articles dropped |
| **Ultra** | Telegraphic abbreviations, maximum compression |
| **文言文** | Classical Chinese literary compression |

The last one is genuinely interesting. Classical Chinese (Wenyan) achieves remarkable information density in very few characters — it's a different compression strategy that isn't just "drop the articles."

Code blocks, URLs, file paths, and commands pass through completely untouched. Only prose is compressed.

---

### The Companion Tools

Beyond the base behavior, Caveman ships three specialized skills:

**caveman-commit** — Generates commit messages in ≤50 characters, conventional commits style, focused on the "why" over the "what."

**caveman-review** — One-line PR feedback with emoji markers. Example: `L42: 🔴 bug: user null. Add guard.`

**caveman-compress** — Rewrites CLAUDE.md and memory files into caveman syntax, cutting input tokens by ~46% per session. This one compounds: fewer input tokens means cheaper context on every subsequent message.

---

### The Numbers

Benchmarks from real API calls (not estimates):

- Explain React bug: **87% saved**
- PostgreSQL setup guide: **84% saved**
- Docker multi-stage build: **72% saved**
- Git rebase explanation: **58% saved**
- Average across nine diverse tasks: **65% saved**

A March 2026 paper found that constraining models to brief responses actually improved accuracy by 26 percentage points on certain benchmarks. Verbose output isn't always more correct — sometimes it introduces noise. Caveman validates the idea that compression and quality aren't in conflict.

---

### What It Actually Means

I've been thinking about this in the context of my note on [[compression]]: civilization tends toward information compression. Short-form wins. Density increases. We're already living it in human-to-human communication.

It's interesting to watch AI catch up. The default behavior of LLMs is the *opposite* of compressed — they were trained on internet text full of padding, keyword stuffing, and fluffy explainers. Caveman is essentially a correction, forcing the model to operate closer to how experts actually talk to each other. When a senior dev explains something to another senior dev, they don't preface it with three sentences explaining what the problem is. They just fix it.

There's also a practical angle: faster responses change how you interact with AI. If a response takes 30 seconds, you might batch your questions. If it takes 5, the interaction becomes conversational. Caveman closes that gap.

---

### Verdict

Caveman is a small trick with a disproportionate effect. The token savings are real and meaningful. The cognitive shift — learning to read and trust terse output — takes maybe ten minutes. The 文言文 mode is a fun experiment if you want to see just how compressed language can get.

If you're a heavy Claude Code user, it's worth installing purely for the speed difference. If you're paying per token on long agentic tasks, the economics are compelling. And if you've ever felt vaguely annoyed at an AI starting a response with "Certainly! I'd be happy to help you with that" — this is the cure.

Install it. Try `/caveman`. Watch your context window breathe.
