import { Cents, Io, Px } from "../../../../general"
import { JiNotationLevel, MAX_SINGLE_SHAFT_CENTS } from "../../../../sagittal"
import { JI_NOTATION_LEVEL_BOTTOMS } from "./levelHeights"
import { MARGIN } from "./sizes"
import { computeX } from "./x"

const addParentSvg = (): Io => {
    const width: Px = computeX(MARGIN + MAX_SINGLE_SHAFT_CENTS as Cents)
    const height: Px = JI_NOTATION_LEVEL_BOTTOMS[ JiNotationLevel.MEDIUM ]

    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">\n` as Io
}

export {
    addParentSvg,
}
