import {add, DEFAULT_PRECISION, Io, Px, round, UNISON} from "@sagittal/general"
import {HALF_APOTOME, JiNotationLevelId} from "@sagittal/system"
import {JI_NOTATION_LEVEL_BOTTOMS} from "./levelHeights"
import {computeX} from "./x"

const addParentSvg = (): Io => {
    const width: Px = add(computeX(HALF_APOTOME), computeX(UNISON))
    const height: Px = round(JI_NOTATION_LEVEL_BOTTOMS[JiNotationLevelId.MEDIUM], DEFAULT_PRECISION)

    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">\n` as Io
}

export {
    addParentSvg,
}
