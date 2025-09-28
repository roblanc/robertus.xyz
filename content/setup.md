This document outlines the hardware, software, and workflows I use daily.

## Devices

- **Main Machine**: Mac Mini (2020)
  - **Processor**: Apple M1
  - **Memory**: 16 GB RAM
  - **Storage**: 512 GB SSD
- **Laptop**: MacBook Air (2015)
  - **Processor**: 1.6GHz Intel Core i5
  - **Memory**: 8 GB RAM
  - **Storage**: 128 GB SSD
- **Old Windows PC**:
  - **OS**: Windows 10 Pro (10.0.19045)
  - **System**: Gigabyte Technology Co., Ltd.
  - **Processor**: Intel64 Family 6 Model 94 Stepping 3 (~2.8 GHz)
  - **Graphics**: NVIDIA GeForce GTX 950
  - **Memory**: 4 GB RAM
  - **Storage**:
    - 250 GB Samsung SSD 860 EVO
    - 500 GB WDC HDD
- **Phone**: iPhone 13 Mini

### Peripherals

- **Mouse**: Razer DeathAdder Essential

## Software

### Core Tools

- **Browser**: Brave Browser (main), Safari (secondary), Dia (tertiary, with cool LLM integration and memory features)
- **IDE**: Zed (main), Visual Studio Code (secondary)
- **Org Mode in Zed**: I use the [Org extension](https://zed.dev/extensions/org) for Zed to manage my notes and tasks in Org Mode.
- **Terminal**: Hyper (main, with `hyper-rename-tab` plugin), iTerm2 with Zsh (secondary), Warp (tertiary), Ghostty (quaternary)
  - **Font**: I use [Nerd Fonts](https://github.com/ryanoasis/nerd-fonts) to get glyphs and icons in my terminal.
  - **Preferred Fonts**: JetBrains Mono, Google Sans Code
  - [Ghostty Config](https://github.com/zerebos/ghostty-config)
- **Launcher**: Cling (main), Raycast (secondary). My AI shortcut is always remapped to `Cmd+E`.
- **Window Manager**: [AeroSpace](https://github.com/nikitabobko/AeroSpace) for tiling window management.

### Note-taking & Writing

- **Primary**: Obsidian and Craft for structured notes and writing.
- **Secondary**: Bear, Notion, and Drafts for quick capture and ideation.

### AI & Productivity

- **AI Assistants**: I frequently use GPT-4, Gemini 1.5, and Claude 3 for various tasks.
- **AI Search**: Perplexity AI for research.

### Content Creation

- **Video Editing**: Adobe Premiere Pro, Descript
- **Design**: Penpot, Framer

### Development & Automation

- **Containerization**: Docker
- **Automation**: n8n for workflow automation.
- **Scripting**: I rely on a personal collection of shell and Python scripts to automate repetitive tasks.
- **Hosting**: Netlify and Vercel for deploying web projects.
- **AI Development**: Dria for knowledge-centric AI.

### Utilities

- **Firewall**: LuLu for monitoring network connections.
- **File Transfer**: Folx for managing downloads.
- **Torrents**: Flux for torrent management.
- **Music Decoy**: Plays fake music when your boss is nearby.
*   **[MagicQuit](https://magicquit.com/)**
	MagicQuit is a Mac app that automatically closes (quits) applications when you haven't used them for a specified period of time. It helps keep your macOS desktop cleaner, frees up memory, and enhances battery life by quitting idle apps without any manual intervention.


## Workflow & Philosophy

### Cross-Device Sync

To maintain a consistent environment across my Macs, I use symbolic links. Key configuration files for my tools (like my AI assistant's memory) are stored in iCloud Drive. I then link to them from their expected local directories on each machine. This ensures my settings are always in sync, no matter where I am working.

### Personal Operating System

My productivity system is built on a set of plain text markdown files managed in my iCloud Drive. I maintain:
- A long-term file for yearly goals and todos.
- A daily journal for capturing tasks, logs, and ideas.
- A comprehensive, categorized list of all the software and tools I use or find interesting.

This text-based 'personal OS' is simple, portable, and powerful, allowing me to manage my life from any text editor.

### Obsidian Plugins

- **Natural Language Dates**: Install this plugin for easy date insertion.
  - **Date Format**: `dddd, MMMM D, YYYY`

## Kitty Terminal Theme

My terminal theme is based on the "Borland" theme. Here is the configuration from `current-theme.conf`:

```kitty
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
```

## CLI Tools

Here are all the CLI tools mentioned in the video “10 CLI apps that have actually improved the way I work in the terminal”:

1.  **Zoxide**

    A smarter, faster replacement for the `cd` command, using fuzzy matching to jump between directories efficiently.

2.  **rg (Ripgrep)**

    A modern, fast alternative to `grep` for searching text patterns in files, with sane defaults and recursive search.

3.  **fd**

    A user-friendly replacement for the `find` command, making file searches faster and more intuitive, with glob and regex support.

4.  **tmux**

    A terminal multiplexer that lets you manage multiple terminal sessions, panes, and windows, with session persistence and automation features.

5.  **gh (GitHub CLI)**

    Interact with GitHub directly from the terminal—create repos, check issues, and automate pull requests without opening a browser.

6.  **doppler**

    A CLI for secrets management, allowing you to inject environment variables securely for different environments (dev, prod, personal).

7.  **pass (Password Store)**

    A Unix password manager using GPG and Git, ideal for managing API tokens, database URLs, and passwords securely from the terminal.

8.  **jq**

    A powerful tool for parsing, filtering, and transforming JSON data in the terminal, essential for backend and fullstack developers.

9.  **stow**

    Manages dotfiles by creating symbolic links, making it easy to version control and share configurations across machines.

10. **fzf (Fuzzy Finder)**

    A fuzzy finding tool for the command line, great for interactive search and tab completion, and for building CLI apps with interactive selection.
