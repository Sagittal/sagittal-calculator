import { Cents, IO } from "../../../../general"
import { Level, MAX_SINGLE_SHAFT_CENTS } from "../../../../sagittal"
import { LEVEL_BOTTOMS } from "./levelHeights"
import { MARGIN } from "./sizes"
import { computeX } from "./x"

const addParentSvg = (): IO => {
    const width = computeX(MARGIN + MAX_SINGLE_SHAFT_CENTS as Cents)
    const height = LEVEL_BOTTOMS[ Level.MEDIUM ]

    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">\n` as IO
}

export {
    addParentSvg,
}
