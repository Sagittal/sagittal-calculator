import { computeRationalQuotientFromRationalNum } from "../../math"
import { TwoThreeFreeClass } from "../../music"
import { formatQuotient } from "./quotient"
import { Formatted } from "./types"

const format23FreeClass = (twoThreeFreeClass: TwoThreeFreeClass): Formatted<TwoThreeFreeClass> => {
    const quotient = computeRationalQuotientFromRationalNum(twoThreeFreeClass)

    return formatQuotient(quotient) as Formatted as Formatted<TwoThreeFreeClass>
}

export {
    format23FreeClass,
}
