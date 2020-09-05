import { abs, computeMonzoInZone, computePlusOrMinusRange, Integer, Monzo } from "../../general"
import { AnalyzedRationalPitch } from "../types"
import { analyzeRationalPitch } from "./analyzeRationalPitch"
import {
    DEFAULT_MAX_ABSOLUTE_APOTOME_SLOPE,
    DEFAULT_MAX_ABSOLUTE_THREE_EXPONENT,
    DEFAULT_MAX_CENTS,
    DEFAULT_MAX_N2D3P9,
    DEFAULT_MIN_CENTS,
} from "./constants"
import { CommasFromFiveSlicedMonzoOptions } from "./types"

const computeCommasFromFiveSlicedMonzo = (
    fiveSlicedMonzo: Monzo<Integer, 5>,
    options?: CommasFromFiveSlicedMonzoOptions,
): AnalyzedRationalPitch[] => {
    const {
        minCents = DEFAULT_MIN_CENTS,
        maxCents = DEFAULT_MAX_CENTS,
        maxAbsoluteThreeExponent = DEFAULT_MAX_ABSOLUTE_THREE_EXPONENT,
        maxAbsoluteApotomeSlope = DEFAULT_MAX_ABSOLUTE_APOTOME_SLOPE,
        maxN2D3P9 = Infinity // DEFAULT_MAX_N2D3P9,
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
