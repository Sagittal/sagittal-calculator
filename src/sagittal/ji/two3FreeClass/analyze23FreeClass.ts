import {
    compute23FreeClassName,
    computeJiPitchCopfr,
    computeJiPitchSmoothness,
    computeJiPitchSopfr,
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

    const two3FreePrimeLimit: Max<Prime<{ rough: 5 }>> = computeJiPitchSmoothness(two3FreeClass)

    const two3FreeSopfr: Sopfr<{ rough: 5 }> = computeJiPitchSopfr(two3FreeClass) as Sopfr<{ rough: 5 }>
    const two3FreeCopfr: Copfr<{ rough: 5 }> = computeJiPitchCopfr(two3FreeClass) as Copfr<{ rough: 5 }>

    const n2d3p9: N2D3P9 = computeN2D3P9(two3FreeClass)

    return {
        two3FreeClass,
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
