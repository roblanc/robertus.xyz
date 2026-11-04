const previewThemes = ["paper", "dark", "pink", "green", "blueberry", "sage"]
const savedPreviewTheme = localStorage.getItem("preview-theme")
const initialPreviewTheme = savedPreviewTheme && previewThemes.includes(savedPreviewTheme)
  ? savedPreviewTheme
  : localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ? "dark"
    : "paper"

function applyPreviewTheme(theme: string) {
  document.documentElement.setAttribute("data-preview-theme", theme)
  const mode: "dark" | "light" = theme === "dark" ? "dark" : "light"
  document.documentElement.setAttribute("saved-theme", mode)
  document.dispatchEvent(new CustomEvent<{ theme: "dark" | "light" }>("themechange", { detail: { theme: mode } }))
}

applyPreviewTheme(initialPreviewTheme)

document.addEventListener("nav", () => {
  const picker = document.querySelector<HTMLSelectElement>("#preview-theme")
  if (!picker) return
  picker.value = document.documentElement.getAttribute("data-preview-theme") || "paper"
  const onChange = () => {
    localStorage.setItem("preview-theme", picker.value)
    applyPreviewTheme(picker.value)
  }
  picker.addEventListener("change", onChange)
  window.addCleanup(() => picker.removeEventListener("change", onChange))
})
