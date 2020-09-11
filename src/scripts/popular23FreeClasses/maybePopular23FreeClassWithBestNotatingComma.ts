import { computeIsSuperMonzo, computeJiPitchMonzo, Max, Maybe, TwoThreeFreeClass } from "../../general"
import { computeN2D3P9, N2D3P9 } from "../../sagittal"
import { computePopular23FreeClassWithBestNotatingComma } from "./popular23FreeClassWithBestNotatingComma"
import { Popular23FreeClassWithBestNotatingComma } from "./types"

const computeMaybePopular23FreeClassWithBestNotatingComma = (
    twoThreeFreeClass: TwoThreeFreeClass,
    maxN2D3P9: Max<N2D3P9>,
): Maybe<Popular23FreeClassWithBestNotatingComma> => {
    if (!computeIsSuperMonzo(computeJiPitchMonzo(twoThreeFreeClass))) return

    const n2d3p9 = computeN2D3P9(twoThreeFreeClass)

    if (n2d3p9 <= maxN2D3P9) {
        return computePopular23FreeClassWithBestNotatingComma({ twoThreeFreeClass, n2d3p9 })
    }

    return undefined
}

export {
    computeMaybePopular23FreeClassWithBestNotatingComma,
}
