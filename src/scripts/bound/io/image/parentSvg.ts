import { Cents, Io, Px } from "../../../../general"
import { Level, MAX_SINGLE_SHAFT_CENTS } from "../../../../sagittal"
import { LEVEL_BOTTOMS } from "./levelHeights"
import { MARGIN } from "./sizes"
import { computeX } from "./x"

const addParentSvg = (): Io => {
    const width: Px = computeX(MARGIN + MAX_SINGLE_SHAFT_CENTS as Cents)
    const height: Px = LEVEL_BOTTOMS[ Level.MEDIUM ]

    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">\n` as Io
}

export {
    addParentSvg,
}
