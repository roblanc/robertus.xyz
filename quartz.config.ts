import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import { PreviewLinks } from "./quartz/plugins/transformers/previewLinks"

// Experimental theme preview. `QUARTZ_VARIANT=azlen npx quartz build -o public/test`
// builds the whole site a second time into /test with the paper/serif theme.
// The regular build (no env var) is untouched.
const isAzlenVariant = process.env.QUARTZ_VARIANT === "azlen"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🌵",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: isAzlenVariant ? "robertus.xyz/test" : "robertus.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        header: "CPMono_v07",
        body: isAzlenVariant ? "ET Book" : "CPMono_v07",
        code: "CPMono_v07",
      },
      colors: isAzlenVariant
        ? {
            lightMode: {
              light: "#F2F0EB",
              lightgray: "#E2DFD7",
              gray: "#B9B5AB",
              darkgray: "#3A3A38",
              dark: "#111111",
              secondary: "#006399",
              tertiary: "#84a59d",
              highlight: "rgba(0, 99, 153, 0.10)",
              textHighlight: "rgba(255, 224, 83, 0.55)",
            },
            darkMode: {
              light: "#0E0E0D",
              lightgray: "#22211F",
              gray: "#4A4844",
              darkgray: "#D4D1CA",
              dark: "#F5F3EE",
              secondary: "#8DB4CF",
              tertiary: "#84a59d",
              highlight: "rgba(141, 180, 207, 0.14)",
              textHighlight: "rgba(255, 224, 83, 0.28)",
            },
          }
        : {
            lightMode: {
              light: "#FFFFFF",
              lightgray: "#E5E5E0",
              gray: "#C8C8C1",
              darkgray: "#6B6B6B",
              dark: "#000000",
              secondary: "#006399",
              tertiary: "#84a59d",
              highlight: "rgba(0, 99, 155, 0.08)",
              textHighlight: "rgba(229, 229, 224, 0.9)",
            },
            darkMode: {
              light: "#0A0A0A",
              lightgray: "#1E1E1E",
              gray: "#3A3A3A",
              darkgray: "#9A9A9A",
              dark: "#FFFFFF",
              secondary: "#7b97aa",
              tertiary: "#84a59d",
              highlight: "rgba(123, 151, 170, 0.15)",
              textHighlight: "rgba(255, 255, 255, 0.15)",
            },
          },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      ...(isAzlenVariant ? [PreviewLinks()] : []),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        include: ["**/*.md"],
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
