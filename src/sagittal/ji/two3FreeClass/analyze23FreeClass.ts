import {
    compute23FreeClassName,
    computeCopfr, computeNumFromMonzo,
    computePrimeLimit,
    computeRationalMonzoFromRatio,
    computeSopfr,
    Copfr,
    Max,
    Prime,
    Sopfr,
    Two3FreeClass,
} from "../../../general"
import { computeN2D3P9, N2D3P9 } from "./n2d3p9"
import { Two3FreeClassAnalysis } from "./types"

const analyze23FreeClass = (two3FreeClass: Two3FreeClass): Two3FreeClassAnalysis => {
    const name = compute23FreeClassName(two3FreeClass)

    const two3FreePrimeLimit: Max<Prime<{ rough: 5 }>> = computePrimeLimit(two3FreeClass)

    // TODO: yeah see this is a perfect example of where you should be able to just call these calcs on the Num
    const two3FreeClassMonzo = computeRationalMonzoFromRatio(two3FreeClass)
    const two3FreeSopfr: Sopfr<{ rough: 5 }> = 
        computeSopfr(computeNumFromMonzo(two3FreeClassMonzo)) as Sopfr<{ rough: 5 }>
    const two3FreeCopfr: Copfr<{ rough: 5 }> = 
        computeCopfr(computeNumFromMonzo(two3FreeClassMonzo)) as Copfr<{ rough: 5 }>

    const n2d3p9: N2D3P9 = computeN2D3P9(two3FreeClass)

    return {
        ...two3FreeClass,
        name,
        two3FreePrimeLimit,
        two3FreeSopfr,
        two3FreeCopfr,
        n2d3p9,
    }
}

export {
    analyze23FreeClass,
}
