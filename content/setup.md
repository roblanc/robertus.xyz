---
published: true
website_url: https://robertus.xyz/setup
title: Setup
---

This document outlines the hardware, software, and workflows I use daily.

## Devices

**Main Machine: Mac Mini (2020)**
- Processor: Apple M1
- Memory: 16 GB RAM
- Storage: 512 GB SSD

**Laptop: MacBook Air (2015)**
- Processor: 1.6GHz Intel Core i5
- Memory: 8 GB RAM
- Storage: 128 GB SSD

**Old Windows PC**
- OS: Windows 10 Pro (10.0.19045)
- System: Gigabyte Technology Co., Ltd.
- Processor: Intel64 Family 6 Model 94 Stepping 3 (~2.8 GHz)
- Graphics: NVIDIA GeForce GTX 950
- Memory: 4 GB RAM
- Storage: 250 GB Samsung SSD 860 EVO + 500 GB WDC HDD

**Phone:** iPhone 13 Mini

## Peripherals

- Mouse: Razer DeathAdder Essential

## Software

### Core Tools

- **Browser:** Brave Browser (main), Safari (secondary), Dia (tertiary, with cool LLM integration and memory features)
- **IDE:** Zed (main), Visual Studio Code (secondary)
- **Org Mode in Zed:** I use the Org extension for Zed to manage my notes and tasks in Org Mode.
- **Terminal:** Hyper (main, with hyper-rename-tab plugin), iTerm2 with Zsh (secondary), Warp (tertiary), Ghostty (quaternary)
- **Font:** I use Nerd Fonts to get glyphs and icons in my terminal. Preferred: JetBrains Mono, Google Sans Code
- **Launcher:** Cling (main) — An instant fuzzy-search finder and launcher for macOS. Raycast (secondary). My AI shortcut is always remapped to Cmd+E.
- **Window Manager:** AeroSpace for tiling window management.

### Note-taking & Writing

- **Primary:** Obsidian and Craft for structured notes and writing.
- **Secondary:** Bear, Notion, and Drafts for quick capture and ideation.

### AI & Productivity

- **AI Assistants:** I frequently use GPT-4, Gemini 1.5, and Claude 3 for various tasks.
- **WisprFlow:** [wisprflow.ai](https://wisprflow.ai/) — An AI-powered voice dictation platform designed to convert speech into text across various applications, enabling users to write, edit, and control documents significantly faster than traditional typing.
- **AI Search:** Perplexity AI for research.

### AI Enhancements

Tools that sit on top of AI workflows and make them meaningfully better.

#### [caveman](https://github.com/JuliusBrussee/caveman)

> why use many token when few token do trick

A Claude Code skill that cuts ~65–75% of output tokens by making the agent respond like a caveman — no filler, no hedging, just the answer. Technical accuracy stays intact.

```bash
claude plugin marketplace add JuliusBrussee/caveman && claude plugin install caveman@caveman
```

Activate with `/caveman`. Three intensity levels: lite, full, ultra.

### Content Creation

- **Video Editing:** Adobe Premiere Pro, Descript, OBS Studio
- **Design:** Penpot, Framer

### Accessibility & Voice Control

- **Talon Voice:** [talonvoice.com](https://talonvoice.com/) — A voice-based accessibility software that allows users to control their computer using their voice, eye tracking, or other noises. Highly customizable through Python scripts, runs locally, supports multiple platforms.

### Development & Automation

- **Containerization:** Docker
- **Automation:** n8n for workflow automation.
- **Scripting:** A personal collection of shell and Python scripts to automate repetitive tasks.
- **Hosting:** Netlify and Vercel for deploying web projects.
- **AI Development:** Dria for knowledge-centric AI.

### Utilities

- **Firewall:** LuLu for monitoring network connections.
- **File Transfer:** Folx for managing downloads.
- **Torrents:** Flux for torrent management.
- **Music Decoy:** Plays fake music when your boss is nearby.
- **MagicQuit:** Automatically closes applications when you haven't used them for a specified period. Helps keep macOS desktop cleaner, frees up memory, and enhances battery life.

## Workflow & Philosophy

### Cross-Device Sync

To maintain a consistent environment across my Macs, I use symbolic links. Key configuration files are stored in iCloud Drive and linked from their expected local directories on each machine.

### Personal Operating System

My productivity system is built on plain text markdown files managed in iCloud Drive:

- A long-term file for yearly goals and todos.
- A daily journal for capturing tasks, logs, and ideas.
- A comprehensive, categorized list of all the software and tools I use or find interesting.

## Obsidian Plugins

- **Natural Language Dates:** Easy date insertion. Date Format: `dddd, MMMM D, YYYY`
- **Theme:** Azure

## Kitty Terminal

### Theme

Based on the "Borland" theme:

```
background            #0000a3
foreground            #ffff4d
cursor                #ffa460
selection_background  #a3a3a3
color0                #4e4e4e
color8                #7c7c7c
color1                #ff6b60
color9                #ffb6b0
color2                #a7ff60
color10               #ceffab
color3                #ffffb6
color11               #ffffcb
color4                #96cafd
color12               #b5dcfe
color5                #ff73fd
color13               #ff9cfe
color6                #c6c4fd
color14               #dfdffe
color7                #eeeeee
color15               #ffffff
selection_foreground #0000a3
tab_bar_edge top
```

### Configuration

```
hide_window_decorations titlebar-only
```

## CLI Tools

- **[Zoxide](https://github.com/ajeetdsouza/zoxide)** — Smarter `cd` with fuzzy matching.
- **[rg (Ripgrep)](https://github.com/BurntSushi/ripgrep)** — Fast `grep` replacement.
- **[fd](https://github.com/sharkdp/fd)** — User-friendly `find` replacement.
- **[tmux](https://github.com/tmux/tmux)** — Terminal multiplexer with session persistence.
- **[gh](https://cli.github.com/)** — GitHub CLI for repos, issues, PRs from the terminal.
- **[doppler](https://www.doppler.com/)** — Secrets management, injects env vars per environment.
- **[pass](https://www.passwordstore.org/)** — Unix password manager using GPG and Git.
- **[jq](https://jqlang.github.io/jq/)** — Parse, filter, and transform JSON in the terminal.
- **[stow](https://www.gnu.org/software/stow/)** — Manages dotfiles via symlinks.
- **[fzf](https://github.com/junegunn/fzf)** — Fuzzy finder for interactive terminal search.
- **[suckless tools](https://suckless.org/)** — Minimalist, high-quality software.
- **[whatscli](https://github.com/normen/whatscli)** — CLI for WhatsApp.
- **[Mole](https://github.com/tw93/Mole)** — macOS cleanup and disk analyzer.
- **[dooit](https://dooit-org.github.io/dooit/)** — Interactive terminal-based todo manager.

## Nice to Have

- Mini PC Geekom MiniAir 11 cu procesor Intel Celeron N5095 pana la 2.9 GHz, 256GB SSD, 8GB RAM, Intel UHD Graphics, Dual WiFi, BT, HDMI, Windows 11
- Old Compaqnx9420 laptop with Debian 11 installed
