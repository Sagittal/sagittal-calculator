import { abs, computeMonzoInZone, computePlusOrMinusRange, Monzo } from "../../general"
import { analyzeComma, NamedComma } from "../../notations"
import { ComputeCommasFromFiveSlicedMonzoOptions } from "./types"

const computeCommasFromFiveSlicedMonzo = (fiveSlicedMonzo: Monzo<5>, options: ComputeCommasFromFiveSlicedMonzoOptions): NamedComma[] => {
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

    const analyzedCommas: NamedComma[] = []

    computePlusOrMinusRange(maxAbsoluteThreeExponent).forEach(three => {
        const threeSlicedMonzo: Monzo<3> = [three, ...fiveSlicedMonzo] as Monzo<3>
        const monzo = computeMonzoInZone(threeSlicedMonzo, [minCents, maxCents])

        if (monzo) {
            const analyzedComma: NamedComma = analyzeComma(monzo)

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
