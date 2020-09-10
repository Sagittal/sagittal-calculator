import { computeRatioFromMonzo, formatRatio, Formatted } from "../../../general"
import { TwoThreeFreeClass } from "../../types"

const format23FreeClass = (twoThreeFreeClass: TwoThreeFreeClass): Formatted<TwoThreeFreeClass> => {
    return formatRatio(computeRatioFromMonzo(twoThreeFreeClass.monzo)) as Formatted as Formatted<TwoThreeFreeClass>
}

export {
    format23FreeClass,
}
