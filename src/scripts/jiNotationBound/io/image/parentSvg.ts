import { ACCURACY_THRESHOLD, Cents, computeCentsFromPitch, Io, Px, round } from "../../../../general"
import { JiNotationLevel, MAX_SYMBOL_CLASS_POSITION } from "../../../../sagittal"
import { JI_NOTATION_LEVEL_BOTTOMS } from "./levelHeights"
import { MARGIN } from "./sizes"
import { computeX } from "./x"

const addParentSvg = (): Io => {
    const width: Px = computeX(MARGIN + computeCentsFromPitch(MAX_SYMBOL_CLASS_POSITION) as Cents)
    const height: Px = round(JI_NOTATION_LEVEL_BOTTOMS[ JiNotationLevel.MEDIUM ], ACCURACY_THRESHOLD)

    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">\n` as Io
}

export {
    addParentSvg,
}
