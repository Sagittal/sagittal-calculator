import { IO } from "../../../../general"

const addFont = (): IO =>
    `  <style> @font-face { font-family: 'Bravura'; src: url('BravuraSagittalUpdate_v10.otf'); font-style: normal; }</style>\n` as IO

export {
    addFont,
}
