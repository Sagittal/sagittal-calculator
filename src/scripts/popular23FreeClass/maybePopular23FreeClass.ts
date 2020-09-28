import { Max, Maybe, TwoThreeFreeClass } from "../../general"
import { analyze23FreeClass, N2D3P9 } from "../../sagittal"
import { computePopular23FreeClass } from "./popular23FreeClass"
import { Popular23FreeClass } from "./types"

const computeMaybePopular23FreeClass = (
    twoThreeFreeClass: TwoThreeFreeClass,
    maxN2D3P9: Max<N2D3P9>,
): Maybe<Popular23FreeClass> => {
    const twoThreeFreeClassAnalysis = analyze23FreeClass(twoThreeFreeClass)

    if (twoThreeFreeClassAnalysis.n2d3p9 <= maxN2D3P9) {
        return computePopular23FreeClass(twoThreeFreeClassAnalysis)
    }

    return undefined
}

export {
    computeMaybePopular23FreeClass,
}
