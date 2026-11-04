// @ts-ignore: inline script is bundled by Quartz
import script from "./scripts/preview-theme.inline"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

const PreviewTheme: QuartzComponent = () => (
  <label class="preview-theme">
    <span class="preview-theme-label">Theme</span>
    <select id="preview-theme" aria-label="Color theme">
      <option value="paper">Paper</option>
      <option value="dark">Dark</option>
      <option value="pink">Pinkish Calm</option>
      <option value="green">Gameboy Green</option>
      <option value="blueberry">Business Blueberry</option>
      <option value="sage">Sage</option>
    </select>
  </label>
)

PreviewTheme.beforeDOMLoaded = script
export default (() => PreviewTheme) satisfies QuartzComponentConstructor
