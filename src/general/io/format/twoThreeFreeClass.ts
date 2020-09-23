import { computeRatioFromJiPitch, TwoThreeFreeClass } from "../../music"
import { formatRatio } from "./ratio"
import { Formatted } from "./types"

const format23FreeClass = (twoThreeFreeClass: TwoThreeFreeClass): Formatted<TwoThreeFreeClass> => {
    const ratio = computeRatioFromJiPitch(twoThreeFreeClass)

    return formatRatio(ratio) as Formatted as Formatted<TwoThreeFreeClass>
}

export {
    format23FreeClass,
}
