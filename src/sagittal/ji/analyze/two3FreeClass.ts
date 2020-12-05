import {
    compute23FreeClassName,
    computeRationalScamonCopfr,
    computeRationalScamonSmoothness,
    Copfr,
    Max,
    Prime,
    Sopfr,
    Two3FreeClass,
} from "@sagittal/general"
import {computeN2D3P9, computeSopfgtt, N2D3P9} from "../badness"
import {Two3FreeClassAnalysis} from "./types"

const analyze23FreeClass = (two3FreeClass: Two3FreeClass): Two3FreeClassAnalysis => {
    const name = compute23FreeClassName(two3FreeClass)

    const two3FreePrimeLimit: Max<Prime<{rough: 5}>> = computeRationalScamonSmoothness(two3FreeClass)

    const two3FreeSopfr: Sopfr<{rough: 5}> = computeSopfgtt(two3FreeClass) as Sopfr<{rough: 5}>
    const two3FreeCopfr: Copfr<{rough: 5}> = computeRationalScamonCopfr(two3FreeClass) as Copfr<{rough: 5}>

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
