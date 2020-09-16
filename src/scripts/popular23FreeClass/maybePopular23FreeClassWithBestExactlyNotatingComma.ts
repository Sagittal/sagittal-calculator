import { computeIsSuperMonzo, computeJiPitchMonzo, Max, Maybe, TwoThreeFreeClass } from "../../general"
import { computeN2D3P9, N2D3P9 } from "../../sagittal"
import { analyzePopular23FreeClassWithBestExactlyNotatingComma } from "./popular23FreeClassWithBestExactlyNotatingComma"
import { Popular23FreeClassAnalysisWithBestExactlyNotatingComma } from "./types"

const computeMaybePopular23FreeClassAnalysisWithBestExactlyNotatingComma = (
    twoThreeFreeClass: TwoThreeFreeClass,
    maxN2D3P9: Max<N2D3P9>,
): Maybe<Popular23FreeClassAnalysisWithBestExactlyNotatingComma> => {
    if (!computeIsSuperMonzo(computeJiPitchMonzo(twoThreeFreeClass))) return

    const n2d3p9 = computeN2D3P9(twoThreeFreeClass)

    if (n2d3p9 <= maxN2D3P9) {
        return analyzePopular23FreeClassWithBestExactlyNotatingComma({ twoThreeFreeClass, n2d3p9 })
    }

    return undefined
}

export {
    computeMaybePopular23FreeClassAnalysisWithBestExactlyNotatingComma,
}
