import type { Root, PhrasingContent } from "mdast"
import { visit } from "unist-util-visit"
import { QuartzTransformerPlugin } from "../types"

// Editorial links connect published notes without changing their source files.
const links: Record<string, Array<{ phrase: string; target: string }>> = {
  index: [
    { phrase: "working notes", target: "Become-a-specialized-generalist" },
    { phrase: "ideas and theories", target: "Superstimuli" },
  ],
  "notes/Become-a-specialized-generalist": [
    { phrase: "Reading, skimming, scanning, analyzing, interpreting, summarizing", target: "Books-are-tweets" },
    { phrase: "power of writing", target: "Share-the-obvious" },
  ],
  "notes/Books-are-tweets": [
    { phrase: "reading evergreen books", target: "How-to-read-higher-quality-books" },
    { phrase: "social media platforms", target: "Superstimuli" },
  ],
  "notes/How-to-read-higher-quality-books": [
    { phrase: "filtering out the fluff", target: "Books-are-tweets" },
  ],
  "notes/Share-the-obvious": [
    { phrase: "ideas seem obvious", target: "Execution-is-easy.-Ideas-are-everything." },
  ],
  "notes/Superstimuli": [
    { phrase: "slow pleasures of reading novels and nonfiction", target: "Books-are-tweets" },
  ],
}

export const PreviewLinks: QuartzTransformerPlugin = () => ({
  name: "PreviewLinks",
  markdownPlugins() {
    return [() => (tree: Root, file) => {
      const pending = [...(links[file.data.slug ?? ""] ?? [])]
      if (!pending.length) return
      visit(tree, "paragraph", (paragraph) => {
        const children: PhrasingContent[] = []
        for (const child of paragraph.children) {
          if (child.type !== "text") { children.push(child); continue }
          let remaining = child.value
          while (remaining) {
            const matches = pending.map((link, i) => ({ link, i, at: remaining.indexOf(link.phrase) }))
              .filter((match) => match.at >= 0).sort((a, b) => a.at - b.at)
            const match = matches[0]
            if (!match) { children.push({ type: "text", value: remaining }); break }
            if (match.at) children.push({ type: "text", value: remaining.slice(0, match.at) })
            children.push({ type: "link", url: match.link.target, children: [{ type: "text", value: match.link.phrase }] })
            remaining = remaining.slice(match.at + match.link.phrase.length)
            pending.splice(match.i, 1)
          }
        }
        paragraph.children = children
      })
    }]
  },
})
