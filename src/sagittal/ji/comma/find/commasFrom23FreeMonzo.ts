import {
    abs,
    Comma, computeNumFromMonzo,
    computePlusOrMinusRange,
    Exponent,
    IntegerDecimal,
    isUndefined,
    Maybe,
    Prime,
    RationalMonzo,
    shallowClone,
    THREE_PRIME_INDEX,
    TWO_PRIME_INDEX,
} from "../../../../general"
import { analyzeComma } from "../analyzeComma"
import { CommaAnalysis } from "../types"
import {
    DEFAULT_LOWER_BOUND,
    DEFAULT_MAX_AAS,
    DEFAULT_MAX_ATE,
    DEFAULT_MAX_N2D3P9,
    DEFAULT_UPPER_BOUND,
} from "./constants"
import { computeRationalMonzoInZone } from "./monzoInZone"
import { CommasFrom23FreeMonzoOptions } from "./types"

const compute2FreeRationalMonzo = (
    twoThreeFreeRationalMonzo: RationalMonzo<{ rough: 5 }>,
    threeExponent: IntegerDecimal & Exponent<3 & Prime>,
): RationalMonzo<{ rough: 3 }> => {
    const twoFreeRationalMonzo: RationalMonzo<{ rough: 3 }> =
        shallowClone(twoThreeFreeRationalMonzo) as RationalMonzo as RationalMonzo<{ rough: 3 }>
    twoFreeRationalMonzo[ THREE_PRIME_INDEX ] = threeExponent

    if (isUndefined(twoFreeRationalMonzo[ TWO_PRIME_INDEX ])) {
        twoFreeRationalMonzo[ TWO_PRIME_INDEX ] = 0 as IntegerDecimal & Exponent<Prime>
    }

    return twoFreeRationalMonzo
}

// TODO: twoThree -> two3
const computeCommasFrom23FreeRationalMonzo = (
    twoThreeFreeRationalMonzo: RationalMonzo<{ rough: 5 }>,
    options?: CommasFrom23FreeMonzoOptions,
): Comma[] => {
    const {
        lowerBound = DEFAULT_LOWER_BOUND,
        upperBound = DEFAULT_UPPER_BOUND,
        maxAte = DEFAULT_MAX_ATE,
        maxAas = DEFAULT_MAX_AAS,
        maxN2D3P9 = DEFAULT_MAX_N2D3P9,
    } = options || {}

    const commas: Comma[] = []

    computePlusOrMinusRange(maxAte).forEach((threeExponent: IntegerDecimal & Exponent<3 & Prime>): void => {
        const twoFreeRationalMonzo = compute2FreeRationalMonzo(twoThreeFreeRationalMonzo, threeExponent)
        const rationalMonzoInZone: Maybe<RationalMonzo> = 
            computeRationalMonzoInZone(twoFreeRationalMonzo, [lowerBound, upperBound])

        if (rationalMonzoInZone) {
            const comma = computeNumFromMonzo(rationalMonzoInZone) as Comma

            const commaAnalysis: CommaAnalysis = analyzeComma(comma)
            if (
                abs(commaAnalysis.apotomeSlope) > maxAas ||
                commaAnalysis.twoThreeFreeClassAnalysis.n2d3p9 > maxN2D3P9
            ) {
                return
            }

            commas.push(comma)
        }
    })

    return commas
}

export {
    computeCommasFrom23FreeRationalMonzo,
}
