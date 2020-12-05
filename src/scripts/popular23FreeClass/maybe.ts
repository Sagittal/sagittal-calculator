import {Max, Maybe, Two3FreeClass} from "@sagittal/general"
import {analyze23FreeClass, N2D3P9} from "@sagittal/system"
import {computePopular23FreeClass} from "./popular23FreeClass"
import {Popular23FreeClass} from "./types"

const computeMaybePopular23FreeClass = (
    two3FreeClass: Two3FreeClass,
    maxN2D3P9: Max<N2D3P9>,
): Maybe<Popular23FreeClass> => {
    const two3FreeClassAnalysis = analyze23FreeClass(two3FreeClass)

    if (two3FreeClassAnalysis.n2d3p9 <= maxN2D3P9) {
        return computePopular23FreeClass(two3FreeClassAnalysis)
    }

    return undefined
}

export {
    computeMaybePopular23FreeClass,
}
