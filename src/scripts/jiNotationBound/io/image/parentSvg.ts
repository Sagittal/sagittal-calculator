import { add, DEFAULT_PRECISION, Io, Px, round, UNISON } from "../../../../general"
import { JiNotationLevel, MAX_SYMBOL_CLASS_POSITION } from "../../../../sagittal"
import { JI_NOTATION_LEVEL_BOTTOMS } from "./levelHeights"
import { computeX } from "./x"

const addParentSvg = (): Io => {
    const width: Px = add(computeX(MAX_SYMBOL_CLASS_POSITION), computeX(UNISON))
    const height: Px = round(JI_NOTATION_LEVEL_BOTTOMS[ JiNotationLevel.MEDIUM ], DEFAULT_PRECISION)

    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">\n` as Io
}

export {
    addParentSvg,
}
