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
} from "../../../general"
import { analyzeComma } from "../analyzeComma"
import { CommaAnalysis } from "../types"
import {
    DEFAULT_MAX_ABSOLUTE_3_EXPONENT,
    DEFAULT_MAX_ABSOLUTE_APOTOME_SLOPE,
    DEFAULT_MAX_CENTS,
    DEFAULT_MAX_N2D3P9,
    DEFAULT_MIN_CENTS,
} from "./constants"
import { computeMonzoInZone } from "./monzoInZone"
import { CommasFrom23FreeMonzoOptions } from "./types"

const computeTwoFreeMonzo = (
    twoThreeFreeMonzo: Monzo<{ rough: 5 }>,
    threeExponent: 3 & Integer & Exponent<Prime>,
): Monzo<{ rough: 3 }> => {
    const twoFreeMonzo: Monzo<{ rough: 3 }> = shallowClone(twoThreeFreeMonzo) as Monzo as Monzo<{ rough: 3 }>
    twoFreeMonzo[ 1 ] = threeExponent

    if (isUndefined(twoFreeMonzo[ 0 ])) {
        twoFreeMonzo[ 0 ] = 0 as Integer & Exponent<Prime>
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
        maxAbsolute3Exponent = DEFAULT_MAX_ABSOLUTE_3_EXPONENT,
        maxAbsoluteApotomeSlope = DEFAULT_MAX_ABSOLUTE_APOTOME_SLOPE,
        maxN2D3P9 = DEFAULT_MAX_N2D3P9,
    } = options || {}

    const commas: Comma[] = []

    computePlusOrMinusRange(maxAbsolute3Exponent).forEach((threeExponent: 3 & Integer & Exponent<Prime>): void => {
        const twoFreeMonzo = computeTwoFreeMonzo(twoThreeFreeMonzo, threeExponent)
        const monzo: Maybe<Monzo> = computeMonzoInZone(twoFreeMonzo, [minCents, maxCents])

        if (monzo) {
            const comma = { monzo } as Comma

            const commaAnalysis: CommaAnalysis = analyzeComma(comma)
            if (abs(commaAnalysis.apotomeSlope) > maxAbsoluteApotomeSlope || commaAnalysis.n2d3p9 > maxN2D3P9) {
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
