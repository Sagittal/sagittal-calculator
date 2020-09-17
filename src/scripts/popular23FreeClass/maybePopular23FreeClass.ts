import { Max, Maybe, TwoThreeFreeClass } from "../../general"
import { computeN2D3P9, N2D3P9 } from "../../sagittal"
import { analyzePopular23FreeClass } from "./analyzePopular23FreeClass"
import { Popular23FreeClassAnalysis } from "./types"

const computeMaybePopular23FreeClassAnalysis = (
    twoThreeFreeClass: TwoThreeFreeClass,
    maxN2D3P9: Max<N2D3P9>,
): Maybe<Popular23FreeClassAnalysis> => {
    const n2d3p9 = computeN2D3P9(twoThreeFreeClass)

    if (n2d3p9 <= maxN2D3P9) {
        return analyzePopular23FreeClass({ twoThreeFreeClass, n2d3p9 })
    }

    return undefined
}

export {
    computeMaybePopular23FreeClassAnalysis,
}
