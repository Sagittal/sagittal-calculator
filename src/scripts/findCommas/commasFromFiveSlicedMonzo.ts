import { analyzeComma, Comma, computeMonzoInRange, computePlusOrMinusRange, Monzo } from "../../general"
import { ComputeCommasFromFiveSlicedMonzoOptions } from "./types"

const computeCommasFromFiveSlicedMonzo = (fiveSlicedMonzo: Monzo<5>, options: ComputeCommasFromFiveSlicedMonzoOptions) => {
    const {
        lowerBound,
        upperBound,
        maxAbsoluteThreeExponent,
        maxApotomeSlope = Infinity,             // optional
        maxN2D3P9 = Infinity,                   // optional
    } = options || {}

    if (typeof lowerBound === "undefined") {
        throw new Error("Lower bound must be supplied.")
    }
    if (typeof upperBound === "undefined") {
        throw new Error("Upper bound must be supplied.")
    }
    if (typeof maxAbsoluteThreeExponent === "undefined") {
        throw new Error("Max absolute three exponent must be supplied.")
    }

    const analyzedCommas: Comma[] = []

    computePlusOrMinusRange(maxAbsoluteThreeExponent).forEach(three => {
        const threeSlicedMonzo: Monzo<3> = [three, ...fiveSlicedMonzo] as Monzo<3>
        const monzo = computeMonzoInRange(threeSlicedMonzo, lowerBound, upperBound)

        if (monzo) {
            const analyzedComma = analyzeComma(monzo)

            if (Math.abs(analyzedComma.apotomeSlope) > maxApotomeSlope) {
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
