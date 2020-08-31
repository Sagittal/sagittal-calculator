import { abs, Cents, computeMonzoInZone, computePlusOrMinusRange, Integer, Min, Monzo } from "../../general"
import { AnalyzedRationalPitch, MAX_SINGLE_SHAFT_CENTS } from "../../sagittal"
import { analyzeRationalPitch } from "./analyzeRationalPitch"
import { DEFAULT_MAX_ABSOLUTE_THREE_EXPONENT } from "./constants"
import { ComputeCommasFromFiveSlicedMonzoOptions } from "./types"

const computeCommasFromFiveSlicedMonzo = (
    fiveSlicedMonzo: Monzo<Integer, 5>,
    options?: ComputeCommasFromFiveSlicedMonzoOptions,
): AnalyzedRationalPitch[] => {
    const {
        minCents = 0 as Min<Cents>,
        maxCents = MAX_SINGLE_SHAFT_CENTS,
        maxAbsoluteThreeExponent = DEFAULT_MAX_ABSOLUTE_THREE_EXPONENT,
        maxAbsoluteApotomeSlope = Infinity,             // optional
        maxN2D3P9 = Infinity,                   // optional
    } = options || {}

    const analyzedCommas: AnalyzedRationalPitch[] = []

    computePlusOrMinusRange(maxAbsoluteThreeExponent).forEach(three => {
        const threeSlicedMonzo: Monzo<Integer, 3> = [three, ...fiveSlicedMonzo] as Monzo<Integer, 3>
        const monzo = computeMonzoInZone(threeSlicedMonzo, [minCents, maxCents])

        if (monzo) {
            const analyzedComma: AnalyzedRationalPitch = analyzeRationalPitch(monzo)

            if (abs(analyzedComma.apotomeSlope) > maxAbsoluteApotomeSlope) {
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
