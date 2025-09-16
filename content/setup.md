
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
- **Phone**: iPhone 13 Mini

### Peripherals

- **Mouse**: Razer DeathAdder Essential

## Software

### Core Tools

- **Browser**: Brave Browser (main), Safari (secondary), Dia (tertiary, with cool LLM integration and memory features)
- **IDE**: Zed (main), Visual Studio Code (secondary)
- **Terminal**: iTerm2 with Zsh (main), Warp (secondary), Ghostty (tertiary)
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
