import { computeIsSubMonzo, computeN2D3P9, Max, Monzo, N2D3P9 } from "../../general"
import { computePopularRatio } from "./popularRatio"
import { PopularRatio } from "./types"

const computeMaybePopularRatio = (monzo: Monzo, maxN2D3P9: Max<N2D3P9>): PopularRatio | undefined => {
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
