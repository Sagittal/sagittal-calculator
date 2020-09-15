import { Max, Maybe, TwoThreeFreeClass } from "../../general"
import { computeN2D3P9, N2D3P9 } from "../../sagittal"
import { computePopular23FreeClass } from "./popular23FreeClass"
import { Popular23FreeClass } from "./types"

const computeMaybePopular23FreeClass = (
    twoThreeFreeClass: TwoThreeFreeClass,
    maxN2D3P9: Max<N2D3P9>,
): Maybe<Popular23FreeClass> => {
    const n2d3p9 = computeN2D3P9(twoThreeFreeClass)

    if (n2d3p9 <= maxN2D3P9) {
        return computePopular23FreeClass({ twoThreeFreeClass, n2d3p9 })
    }

    return undefined
}

export {
    computeMaybePopular23FreeClass,
}
