import { computeIsSubMonzo, Max, Maybe, Monzo } from "../../general"
import { computeN2D3P9, N2D3P9 } from "../../sagittal"
import { computePopularRatioWithBestNotatingComma } from "./popularRatioWithBestNotatingComma"
import { PopularRatioWithBestNotatingComma } from "./types"

const computeMaybePopularRatioWithBestNotatingComma = (
    monzo: Monzo,
    maxN2D3P9: Max<N2D3P9>
): Maybe<PopularRatioWithBestNotatingComma> => {
    if (computeIsSubMonzo(monzo)) return

    const n2d3p9 = computeN2D3P9(monzo)

    if (n2d3p9 <= maxN2D3P9) {
        return computePopularRatioWithBestNotatingComma({ monzo, n2d3p9 })
    }

    return undefined
}

export {
    computeMaybePopularRatioWithBestNotatingComma,
}
