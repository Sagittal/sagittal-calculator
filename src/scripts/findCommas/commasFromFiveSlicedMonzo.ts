import { abs, computeMonzoInZone, computePlusOrMinusRange, Integer, Monzo } from "../../general"
import { analyzeComma, Comma } from "../../sagittal"
import { ComputeCommasFromFiveSlicedMonzoOptions } from "./types"

const computeCommasFromFiveSlicedMonzo = (
    fiveSlicedMonzo: Monzo<Integer, 5>,
    options: ComputeCommasFromFiveSlicedMonzoOptions,
): Comma[] => {
    const {
        minCents,
        maxCents,
        maxAbsoluteThreeExponent,
        maxApotomeSlope = Infinity,             // optional
        maxN2D3P9 = Infinity,                   // optional
    } = options || {}

    if (typeof minCents === "undefined") {
        throw new Error("Min cents must be supplied.")
    }
    if (typeof maxCents === "undefined") {
        throw new Error("Max cents must be supplied.")
    }
    if (typeof maxAbsoluteThreeExponent === "undefined") {
        throw new Error("Max absolute three exponent must be supplied.")
    }

    const analyzedCommas: Comma[] = []

    computePlusOrMinusRange(maxAbsoluteThreeExponent).forEach(three => {
        const threeSlicedMonzo: Monzo<Integer, 3> = [three, ...fiveSlicedMonzo] as Monzo<Integer, 3>
        const monzo = computeMonzoInZone(threeSlicedMonzo, [minCents, maxCents])

        if (monzo) {
            const analyzedComma: Comma = analyzeComma(monzo)

            if (abs(analyzedComma.apotomeSlope) > maxApotomeSlope) {
                return
            }

            if (analyzedComma.n2d3p9 > maxN2D3P9) {
                return
            }

            analyzedCommas.push(analyzedComma)
        }
    })

    return analyzedCommas
}

export {
    computeCommasFromFiveSlicedMonzo,
}
