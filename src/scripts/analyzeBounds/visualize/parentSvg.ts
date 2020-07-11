import { MAXIMUM_POSITION } from "../../../notations/ji/intervals"
import { computeX } from "./x"
import { LEVEL_BOTTOMS } from "./levelHeights"
import { MARGIN } from "./sizes"
import { Level } from "../../../notations/ji/types"
import { Cents } from "../../../utilities/types"

const addParentSvg = () => {
    const width = computeX(MARGIN + MAXIMUM_POSITION as Cents)
    const height = LEVEL_BOTTOMS[ Level.MEDIUM ]

    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">\n`
}

export {
    addParentSvg,
}
