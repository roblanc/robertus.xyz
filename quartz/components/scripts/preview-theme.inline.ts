const previewThemes = ["paper", "dark", "pink", "green", "blueberry", "sage"]
const savedPreviewTheme = localStorage.getItem("preview-theme")
const initialPreviewTheme = savedPreviewTheme && previewThemes.includes(savedPreviewTheme)
  ? savedPreviewTheme
  : "paper"

function applyPreviewTheme(theme: string) {
  document.documentElement.setAttribute("data-preview-theme", theme)
  const mode: "dark" | "light" = theme === "dark" ? "dark" : "light"
  document.documentElement.setAttribute("saved-theme", mode)
  document.dispatchEvent(new CustomEvent<{ theme: "dark" | "light" }>("themechange", { detail: { theme: mode } }))
}

applyPreviewTheme(initialPreviewTheme)

document.addEventListener("nav", () => {
  const button = document.querySelector<HTMLButtonElement>("#preview-theme")
  if (!button) return
  const names: Record<string, string> = { paper: "Paper", dark: "Dark", pink: "Pinkish Calm", green: "Gameboy Green", blueberry: "Business Blueberry", sage: "Sage" }
  const updateLabel = () => {
    const theme = document.documentElement.getAttribute("data-preview-theme") || "paper"
    const label = `Color theme: ${names[theme]}. Click to change theme.`
    button.setAttribute("aria-label", label)
    button.title = label
  }
  updateLabel()
  const onClick = () => {
    const current = document.documentElement.getAttribute("data-preview-theme") || "paper"
    const next = previewThemes[(previewThemes.indexOf(current) + 1) % previewThemes.length]
    localStorage.setItem("preview-theme", next)
    applyPreviewTheme(next)
    updateLabel()
  }
  button.addEventListener("click", onClick)
  window.addCleanup(() => button.removeEventListener("click", onClick))
})
