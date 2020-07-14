import { Cents } from "../../../general"
import { Level, MAXIMUM_POSITION} from "../../../notations"
import { LEVEL_BOTTOMS } from "./levelHeights"
import { MARGIN } from "./sizes"
import { computeX } from "./x"

const addParentSvg = () => {
    const width = computeX(MARGIN + MAXIMUM_POSITION as Cents)
    const height = LEVEL_BOTTOMS[ Level.MEDIUM ]

    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">\n`
}

export {
    addParentSvg,
}
