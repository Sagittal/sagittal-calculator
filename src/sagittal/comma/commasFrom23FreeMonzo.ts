import {
    abs,
    computeMonzoInZone,
    computePlusOrMinusRange,
    Exponent,
    Integer,
    isUndefined,
    Monzo,
    Prime,
    shallowClone,
} from "../../general"
import { AnalyzedComma, Comma } from "../types"
import { analyzeComma } from "./analyzeComma"
import {
    DEFAULT_MAX_ABSOLUTE_3_EXPONENT,
    DEFAULT_MAX_ABSOLUTE_APOTOME_SLOPE,
    DEFAULT_MAX_CENTS,
    DEFAULT_MAX_N2D3P9,
    DEFAULT_MIN_CENTS,
} from "./constants"
import { CommasFrom23FreeMonzoOptions } from "./types"

// TODO: rename file and similar files too

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

    computePlusOrMinusRange(maxAbsolute3Exponent).forEach(three => {
        const twoFreeMonzo: Monzo<{ rough: 3 }> = shallowClone(twoThreeFreeMonzo) as Monzo as Monzo<{ rough: 3 }>
        twoFreeMonzo[ 1 ] = three
        if (isUndefined(twoFreeMonzo[ 0 ])) twoFreeMonzo[ 0 ] = 0 as Integer & Exponent<Prime> // TODO: horrible

        const monzo: Monzo<{ comma: true }> =
            computeMonzoInZone(twoFreeMonzo, [minCents, maxCents]) as Monzo<{ comma: true }>
        const comma = { monzo }

        if (monzo) {
            const analyzedComma: AnalyzedComma = analyzeComma(comma)

            if (abs(analyzedComma.apotomeSlope) > maxAbsoluteApotomeSlope) {
                return
            }

            if (analyzedComma.n2d3p9 > maxN2D3P9) {
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
