import { computeIsSubMonzo, Max, Maybe, Monzo } from "../../general"
import { computeN2D3P9, N2D3P9 } from "../../sagittal"
import { computePopularRatio } from "./popularRatio"
import { PopularRatio } from "./types"

const computeMaybePopularRatio = (monzo: Monzo, maxN2D3P9: Max<N2D3P9>): Maybe<PopularRatio> => {
    if (computeIsSubMonzo(monzo)) return

    const n2d3p9 = computeN2D3P9(monzo)

    if (n2d3p9 <= maxN2D3P9) {
        return computePopularRatio({ monzo, n2d3p9 })
    }

    return undefined
}

export {
    computeMaybePopularRatio,
}
