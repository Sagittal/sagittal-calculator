import { analyzeComma, Comma, computeMonzoInRange, computePlusOrMinusRange, Monzo } from "../../general"
import { ComputeCommasFromFiveSlicedMonzoOptions } from "./types"

const computeCommasFromFiveSlicedMonzo = (fiveSlicedMonzo: Monzo<5>, options: ComputeCommasFromFiveSlicedMonzoOptions) => {
    const {
        lowerBound,
        upperBound,
        maximumAbsoluteThreeExponent,
        maximumApotomeSlope = Infinity,             // optional
    } = options || {}

    if (typeof lowerBound === "undefined") {
        throw new Error("Lower bound must be supplied.")
    }
    if (typeof upperBound === "undefined") {
        throw new Error("Upper bound must be supplied.")
    }
    if (typeof maximumAbsoluteThreeExponent === "undefined") {
        throw new Error("Maximum absolute three exponent must be supplied.")
    }

    const analyzedCommas: Comma[] = []

    computePlusOrMinusRange(maximumAbsoluteThreeExponent).forEach(three => {
        const threeSlicedMonzo: Monzo<3> = [ three, ...fiveSlicedMonzo ] as Monzo<3>
        const monzo = computeMonzoInRange(threeSlicedMonzo, lowerBound, upperBound)

        if (monzo) {
            const analyzedComma = analyzeComma(monzo)

            if (Math.abs(analyzedComma.apotomeSlope) > maximumApotomeSlope) {
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
