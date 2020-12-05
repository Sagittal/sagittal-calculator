import {Io} from "@sagittal/general"

const addFont = (): Io =>
    `  <style> @font-face { font-family: 'Bravura'; src: url('BravuraSagittalUpdate_v10.otf'); font-style: normal; }</style>\n` as Io

export {
    addFont,
}
