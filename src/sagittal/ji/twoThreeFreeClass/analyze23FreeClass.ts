import {
    computeCopfr,
    computePrimeLimit,
    computeRationalMonzoFromRationalNum,
    computeSopfr,
    Copfr,
    Prime,
    Sopfr,
    TwoThreeFreeClass,
} from "../../../general"
import { computeN2D3P9, N2D3P9 } from "./n2d3p9"
import { TwoThreeFreeClassAnalysis } from "./types"

const analyze23FreeClass = (twoThreeFreeClass: TwoThreeFreeClass): TwoThreeFreeClassAnalysis => {
    const primeLimit: Prime = computePrimeLimit(twoThreeFreeClass)

    const twoThreeFreeClassMonzo = computeRationalMonzoFromRationalNum(twoThreeFreeClass)
    const twoThreeFreeSopfr: Sopfr<{ rough: 5 }> = computeSopfr(twoThreeFreeClassMonzo) as Sopfr<{ rough: 5 }>
    const twoThreeFreeCopfr: Copfr<{ rough: 5 }> = computeCopfr(twoThreeFreeClassMonzo) as Copfr<{ rough: 5 }>
    const n2d3p9: N2D3P9 = computeN2D3P9(twoThreeFreeClass)

    return {
        ...twoThreeFreeClass,
        twoThreeFreePrimeLimit: primeLimit,
        twoThreeFreeSopfr,
        twoThreeFreeCopfr,
        n2d3p9,
    }
}

export {
    analyze23FreeClass,
}
