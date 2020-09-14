import { abs, Comma, formatNumber, Monzo } from "../../general"
import {
    computeCommasFrom23FreeMonzo,
    DEFAULT_MAX_ABS_3_EXPONENT,
    DEFAULT_MAX_ABS_APOTOME_SLOPE,
    DEFAULT_MAX_CENTS,
    DEFAULT_MAX_N2D3P9,
    DEFAULT_MIN_CENTS,
    MAX_SIZE_CATEGORY_BOUND,
} from "../../sagittal"
import { compute23FreeMonzosToCheck } from "./twoThreeFreeMonzosToCheck"
import { CommasOptions } from "./types"

const computeCommas = (options: CommasOptions): Comma[] => {
    const {
        minCents = DEFAULT_MIN_CENTS,
        maxCents = DEFAULT_MAX_CENTS,
        max23FreeSopfr,
        max23FreeCopfr,
        maxAbs3Exponent = DEFAULT_MAX_ABS_3_EXPONENT,
        maxPrimeLimit,
        maxAbsApotomeSlope = DEFAULT_MAX_ABS_APOTOME_SLOPE,
        maxN2D3P9 = DEFAULT_MAX_N2D3P9,
    } = options

    if (minCents >= maxCents) {
        throw new Error(`Min cents is not less than max cents; range was ${formatNumber(minCents)} - ${formatNumber(maxCents)}.`)
    }

    if (abs(minCents) > MAX_SIZE_CATEGORY_BOUND || abs(maxCents) > MAX_SIZE_CATEGORY_BOUND) {
        throw new Error(`Cents range must be within comma size category bounds (±227.370¢); range was ${formatNumber(minCents)} - ${formatNumber(maxCents)}.`)
    }

    let commas: Comma[] = []

    const fiveSlicedMonzosToCheck: Array<Monzo<{ rough: 5 }>> = compute23FreeMonzosToCheck({
        maxPrimeLimit,
        max23FreeSopfr,
        max23FreeCopfr,
    })

    fiveSlicedMonzosToCheck.forEach((fiveSlicedMonzoToCheck: Monzo<{ rough: 5 }>): void => {
        commas = commas.concat(
            computeCommasFrom23FreeMonzo(
                fiveSlicedMonzoToCheck,
                {
                    minCents,
                    maxCents,
                    maxAbsApotomeSlope,
                    maxAbs3Exponent,
                    maxN2D3P9,
                },
            ),
        )
    })

    return commas
}

export {
    computeCommas,
}
