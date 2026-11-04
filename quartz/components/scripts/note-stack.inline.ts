// A trail of real, shareable note URLs. The underlying page stays in place.
const stackParam = "note"
let stackVersion = 0
let basePath = location.pathname
let stackItems: string[] = []

function stackURL(items: string[]) {
  const url = new URL(location.href)
  url.searchParams.delete(stackParam)
  items.forEach((item) => url.searchParams.append(stackParam, item))
  return url
}

function isNotePath(path: string) {
  return path.startsWith("/") && path !== "/" && !/^\/(?:static|tags|assets|test)(?:\/|$)/i.test(path) && !/:/.test(path) && !/\.(?:png|jpe?g|gif|svg|webp|pdf|css|js|woff2?)$/i.test(path)
}

async function renderNoteStack(items: string[], moveFocus = false) {
  const container = document.querySelector<HTMLElement>("#note-stack")
  if (!container) return
  const version = ++stackVersion
  stackItems = items.filter(isNotePath)
  container.replaceChildren()
  container.classList.toggle("has-notes", stackItems.length > 0)
  const requests = stackItems.map(async (path, index) => {
    const response = await fetch(path)
    if (!response.ok || !response.headers.get("content-type")?.includes("text/html")) throw new Error("Note unavailable")
    const doc = new DOMParser().parseFromString(await response.text(), "text/html")
    const article = doc.querySelector("article")
    if (!article) throw new Error("Note unavailable")
    const title = doc.querySelector("h1.article-title")?.textContent?.trim() || doc.title
    const pane = document.createElement("section")
    pane.className = "note-pane"
    pane.dataset.index = String(index)
    pane.setAttribute("aria-label", title)
    const heading = document.createElement("div")
    heading.className = "note-pane-heading"
    const label = document.createElement("span")
    label.className = "note-pane-title"
    label.textContent = title
    const close = document.createElement("button")
    close.type = "button"
    close.className = "note-pane-close"
    close.setAttribute("aria-label", `Close ${title} and later notes`)
    close.textContent = "×"
    heading.append(label, close)
    const content = document.createElement("div")
    content.className = "note-pane-content"
    const titleElement = document.createElement("h1")
    titleElement.textContent = title
    content.append(titleElement, article)
    // Links and media in fetched HTML are relative to that note, not the base page.
    for (const element of content.querySelectorAll<HTMLElement>("[href], [src]")) {
      for (const attr of ["href", "src"]) {
        const value = element.getAttribute(attr)
        if (value && !value.startsWith("#")) element.setAttribute(attr, new URL(value, response.url).href)
      }
    }
    const backlinks = doc.querySelector(".page-footer .backlinks")
    if (backlinks) {
      for (const link of backlinks.querySelectorAll<HTMLAnchorElement>("a[href]")) link.href = new URL(link.getAttribute("href")!, response.url).href
      content.append(backlinks)
    }
    pane.append(heading, content)
    close.addEventListener("click", () => changeStack(stackItems.slice(0, index)))
    return pane
  })
  const results = await Promise.allSettled(requests)
  if (version !== stackVersion) return
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      const pane = result.value
      const collapsed = index !== results.length - 1
      pane.classList.toggle("is-collapsed", collapsed)
      if (collapsed) {
        pane.querySelector<HTMLElement>(".note-pane-content")?.setAttribute("inert", "")
        const title = pane.querySelector<HTMLElement>(".note-pane-title")!
        const button = document.createElement("button")
        button.className = "note-pane-restore"
        button.textContent = title.textContent
        button.setAttribute("aria-label", `Return to ${title.textContent}`)
        button.addEventListener("click", () => changeStack(stackItems.slice(0, index + 1)))
        title.replaceWith(button)
      }
      container.append(pane)
    } else {
      const message = document.createElement("div")
      message.className = "note-pane note-pane-error"
      message.textContent = "Could not load this note. "
      const link = document.createElement("a")
      link.href = stackItems[index]
      link.textContent = "Open note"
      const close = document.createElement("button")
      close.type = "button"
      close.className = "note-pane-close"
      close.textContent = "×"
      close.setAttribute("aria-label", "Close unavailable note")
      close.addEventListener("click", () => changeStack(stackItems.slice(0, index)))
      message.append(link, close)
      container.append(message)
    }
  })
  container.scrollLeft = container.scrollWidth
  if (moveFocus) container.querySelector<HTMLButtonElement>(".note-pane:last-child .note-pane-close")?.focus({ preventScroll: true })
}

function changeStack(items: string[]) {
  history.pushState({ noteStack: true }, "", stackURL(items))
  void renderNoteStack(items, true)
}

document.addEventListener("nav", () => {
  basePath = location.pathname
  void renderNoteStack(new URL(location.href).searchParams.getAll(stackParam))
  const onClick = (event: MouseEvent) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const link = (event.target as Element)?.closest<HTMLAnchorElement>("a[href]")
    if (!link || link.target || link.hasAttribute("download")) return
    const root = document.querySelector("#quartz-root")
    if (!root?.contains(link) || !link.closest("article, .backlinks")) return
    const rawHref = link.getAttribute("href") || ""
    if (rawHref.startsWith("#")) {
      const pane = link.closest<HTMLElement>(".note-pane")
      if (pane && rawHref.length > 1) {
        const target = pane.querySelector<HTMLElement>(`#${CSS.escape(decodeURIComponent(rawHref.slice(1)))}`)
        if (target) {
          event.preventDefault()
          event.stopPropagation()
          target.scrollIntoView({ block: "start" })
        }
      }
      return
    }
    const url = new URL(link.href)
    if (url.origin !== location.origin || !isNotePath(url.pathname) || url.hash || url.search) return
    event.preventDefault()
    event.stopPropagation()
    const parentPane = link.closest<HTMLElement>(".note-pane")
    const base = parentPane ? stackItems.slice(0, Number(parentPane.dataset.index) + 1) : []
    changeStack([...base, url.pathname])
  }
  const onPopState = (event: PopStateEvent) => {
    if (location.pathname !== basePath) return
    event.stopImmediatePropagation()
    void renderNoteStack(new URL(location.href).searchParams.getAll(stackParam))
  }
  document.addEventListener("click", onClick, true)
  window.addEventListener("popstate", onPopState, true)
  window.addCleanup(() => {
    stackVersion++
    document.removeEventListener("click", onClick, true)
    window.removeEventListener("popstate", onPopState, true)
  })
})
