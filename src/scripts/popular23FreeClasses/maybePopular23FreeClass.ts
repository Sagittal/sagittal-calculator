import { computeIsSubMonzo, Max, Maybe, Monzo } from "../../general"
import { compute23FreeClass, computeN2D3P9, N2D3P9 } from "../../sagittal"
import { computePopular23FreeClass } from "./popular23FreeClass"
import { Popular23FreeClass } from "./types"

const computeMaybePopular23FreeClass = (
    twoThreeFreeMonzo: Monzo,
    maxN2D3P9: Max<N2D3P9>
): Maybe<Popular23FreeClass> => {
    if (computeIsSubMonzo(twoThreeFreeMonzo)) return

    const n2d3p9 = computeN2D3P9(twoThreeFreeMonzo)

    if (n2d3p9 <= maxN2D3P9) {
        const twoThreeFreeClass = compute23FreeClass(twoThreeFreeMonzo)
        return computePopular23FreeClass({ twoThreeFreeClass, n2d3p9 })
    }

    return undefined
}

export {
    computeMaybePopular23FreeClass,
}
