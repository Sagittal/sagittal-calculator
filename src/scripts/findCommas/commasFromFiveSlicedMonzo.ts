import { computePlusOrMinusRange } from "../../utilities/plusOrMinusRange"
import { computeMonzoInRange } from "../../utilities/comma/monzoInRange"
import { analyzeComma } from "../../utilities/comma/comma"
import { Comma, Monzo } from "../../utilities/comma/types"
import { ComputeCommasFromFiveSlicedMonzoOptions } from "./types"

const computeCommasFromFiveSlicedMonzo = (fiveSlicedMonzo: Monzo, options: ComputeCommasFromFiveSlicedMonzoOptions) => {
    const {
        lowerBound,
        upperBound,
        maximumAbsoluteThreeExponent,
        maximumApotomeSlope = Infinity,             // optional
    } = options || {}

    if (typeof lowerBound === "undefined") throw new Error("Lower bound must be supplied.")
    if (typeof upperBound === "undefined") throw new Error("Upper bound must be supplied.")
    if (typeof maximumAbsoluteThreeExponent === "undefined") throw new Error("Maximum absolute three exponent must be supplied.")

    const analyzedCommas: Comma[] = []

    computePlusOrMinusRange(maximumAbsoluteThreeExponent).forEach(three => {
        const monzo = computeMonzoInRange([three, ...fiveSlicedMonzo], lowerBound, upperBound)

        if (monzo) {
            const analyzedComma = analyzeComma(monzo)

            if (Math.abs(analyzedComma.apotomeSlope) > maximumApotomeSlope) return

            analyzedCommas.push(analyzedComma)
        }
    })

    return analyzedCommas
}

export {
    computeCommasFromFiveSlicedMonzo,
}
