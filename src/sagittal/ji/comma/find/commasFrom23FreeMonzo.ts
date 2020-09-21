import {
    abs,
    Comma,
    computePlusOrMinusRange,
    Exponent,
    Integer,
    isUndefined,
    Maybe,
    Monzo,
    Prime,
    shallowClone,
    THREE_PRIME_INDEX,
    TWO_PRIME_INDEX,
} from "../../../../general"
import { analyzeComma } from "../analyzeComma"
import { CommaAnalysis } from "../types"
import {
    DEFAULT_MAX_AAS,
    DEFAULT_MAX_ATE,
    DEFAULT_MAX_CENTS,
    DEFAULT_MAX_N2D3P9,
    DEFAULT_MIN_CENTS,
} from "./constants"
import { computeMonzoInZone } from "./monzoInZone"
import { CommasFrom23FreeMonzoOptions } from "./types"

const computeTwoFreeMonzo = (
    twoThreeFreeMonzo: Monzo<{ rough: 5 }>,
    threeExponent: Integer & Exponent<3 & Prime>,
): Monzo<{ rough: 3 }> => {
    const twoFreeMonzo: Monzo<{ rough: 3 }> = shallowClone(twoThreeFreeMonzo) as Monzo as Monzo<{ rough: 3 }>
    twoFreeMonzo[ THREE_PRIME_INDEX ] = threeExponent

    if (isUndefined(twoFreeMonzo[ TWO_PRIME_INDEX ])) {
        twoFreeMonzo[ TWO_PRIME_INDEX ] = 0 as Integer & Exponent<Prime>
    }

    return twoFreeMonzo
}

const computeCommasFrom23FreeMonzo = (
    twoThreeFreeMonzo: Monzo<{ rough: 5 }>,
    options?: CommasFrom23FreeMonzoOptions,
): Comma[] => {
    const {
        minCents = DEFAULT_MIN_CENTS,
        maxCents = DEFAULT_MAX_CENTS,
        maxAte = DEFAULT_MAX_ATE,
        maxAas = DEFAULT_MAX_AAS,
        maxN2D3P9 = DEFAULT_MAX_N2D3P9,
    } = options || {}

    const commas: Comma[] = []

    computePlusOrMinusRange(maxAte).forEach((threeExponent: Integer & Exponent<3 & Prime>): void => {
        const twoFreeMonzo = computeTwoFreeMonzo(twoThreeFreeMonzo, threeExponent)
        const monzo: Maybe<Monzo> = computeMonzoInZone(twoFreeMonzo, [minCents, maxCents])

        if (monzo) {
            const comma = { monzo } as Comma

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
    computeCommasFrom23FreeMonzo,
}
