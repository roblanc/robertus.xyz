// @ts-ignore: Quartz bundles inline scripts
import script from "./scripts/note-stack.inline"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

const NoteStack: QuartzComponent = () => <div id="note-stack" aria-label="Open notes" />
NoteStack.afterDOMLoaded = script
export default (() => NoteStack) satisfies QuartzComponentConstructor
