import {compute23FreeClass, computeScamonFromQuotient, Max, Quotient} from "@sagittal/general"
import {analyze23FreeClass, computeKnownRationalQuotients, N2D3P9} from "@sagittal/system"
import {computePopular23FreeClass} from "./popular23FreeClass"
import {Popular23FreeClass} from "./types"

const computePopular23FreeClassFromRationalQuotient = (
    rationalQuotient: Quotient<{rational: true}>,
): Popular23FreeClass => {
    const rationalScamon = computeScamonFromQuotient(rationalQuotient)
    const two3FreeClass = compute23FreeClass(rationalScamon)
    const two3FreeClassAnalysis = analyze23FreeClass(two3FreeClass)

    return computePopular23FreeClass(two3FreeClassAnalysis)
}

const computePopular23FreeClassesFromKnownNumerators = (maxN2D3P9: Max<N2D3P9>): Popular23FreeClass[] => {
    const knownRationalQuotients = computeKnownRationalQuotients(maxN2D3P9)
    knownRationalQuotients.push([1, 1] as Quotient<{rational: true, rough: 5}>)

    return knownRationalQuotients.map(computePopular23FreeClassFromRationalQuotient)
}

export {
    computePopular23FreeClassesFromKnownNumerators,
}
