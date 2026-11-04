// @ts-ignore: inline script is bundled by Quartz
import script from "./scripts/preview-theme.inline"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

const PreviewTheme: QuartzComponent = () => (
  <button type="button" class="preview-theme" id="preview-theme" aria-label="Change color theme" title="Change color theme">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4" />
    </svg>
  </button>
)

PreviewTheme.beforeDOMLoaded = script
export default (() => PreviewTheme) satisfies QuartzComponentConstructor
