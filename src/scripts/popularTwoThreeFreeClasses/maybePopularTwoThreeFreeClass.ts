import { computeIsSubMonzo, Max, Maybe, Monzo } from "../../general"
import { computeN2D3P9, computeTwoThreeFreeClass, N2D3P9 } from "../../sagittal"
import { computePopularTwoThreeFreeClass } from "./popularTwoThreeFreeClass"
import { Popular23FreeClass } from "./types"

const computeMaybePopularTwoThreeFreeClass = (
    twoThreeFreeMonzo: Monzo,
    maxN2D3P9: Max<N2D3P9>
): Maybe<Popular23FreeClass> => {
    if (computeIsSubMonzo(twoThreeFreeMonzo)) return

    const twoThreeFreeClass = computeTwoThreeFreeClass(twoThreeFreeMonzo)
    const n2d3p9 = computeN2D3P9(twoThreeFreeClass)

    if (n2d3p9 <= maxN2D3P9) {
        return computePopularTwoThreeFreeClass({ twoThreeFreeClass, n2d3p9 })
    }

    return undefined
}

export {
    computeMaybePopularTwoThreeFreeClass,
}
