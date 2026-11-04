import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import PreviewTheme from "./quartz/components/PreviewTheme"

// See quartz.config.ts — `QUARTZ_VARIANT=azlen` builds the /test theme preview.
const isAzlenVariant = process.env.QUARTZ_VARIANT === "azlen"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: isAzlenVariant ? [Component.Backlinks()] : [],
  footer: Component.Footer({
    links: {},
  }) as any,
}

// /test variant: a single reading column with a tiny fixed rail (logo, search, theme),
// in the spirit of azlen.me. No explorer, graph or TOC chrome.
const azlenContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta({ showDate: false }),
    Component.TagList(),
  ],
  left: [Component.PageTitle(), Component.Search(), PreviewTheme()],
  right: [Component.Graph({ localGraph: { showTags: false, focusOnHover: true }, globalGraph: { showTags: false, enableRadial: false } })],
}

const azlenListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta({ showDate: false }),
  ],
  left: [Component.PageTitle(), Component.Search(), PreviewTheme()],
  right: [],
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = isAzlenVariant
  ? azlenContentPageLayout
  : {
      beforeBody: [
        Component.Breadcrumbs(),
        Component.ArticleTitle(),
        Component.ContentMeta({ showDate: false }),
        Component.TagList(),
      ],
      left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        Component.Search(),
        Component.Darkmode(),
        Component.Explorer({
          title: "Explore", // Changed title to be more general
          folderClickBehavior: "link",
        }),
      ],
      right: [
        Component.Graph(),
        Component.DesktopOnly(Component.TableOfContents()),
        Component.Backlinks(),
      ],
    }

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = isAzlenVariant
  ? azlenListPageLayout
  : {
      beforeBody: [
        Component.Breadcrumbs(),
        Component.ArticleTitle(),
        Component.ContentMeta({ showDate: false }),
      ],
      left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        Component.Search(),
        Component.Darkmode(),
        Component.Explorer({
          title: "Explore", // Changed title to be more general
          folderClickBehavior: "link",
        }),
      ],
      right: [],
    }
