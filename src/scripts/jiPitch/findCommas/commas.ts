import { abs, Comma, formatNumber, Monzo } from "../../../general"
import {
    computeCommasFrom23FreeMonzo,
    DEFAULT_MAX_AAS,
    DEFAULT_MAX_ATE,
    DEFAULT_MAX_CENTS,
    DEFAULT_MAX_N2D3P9,
    DEFAULT_MIN_CENTS,
    MAX_SIZE_CATEGORY_BOUND,
} from "../../../sagittal"
import { compute23FreeMonzosToCheck } from "./twoThreeFreeMonzosToCheck"
import { CommasOptions } from "./types"

const computeCommas = (options: CommasOptions): Comma[] => {
    const {
        minCents = DEFAULT_MIN_CENTS,
        maxCents = DEFAULT_MAX_CENTS,
        max23FreeSopfr,
        max23FreeCopfr,
        maxAte = DEFAULT_MAX_ATE,
        maxPrimeLimit,
        maxAas = DEFAULT_MAX_AAS,
        maxN2D3P9 = DEFAULT_MAX_N2D3P9,
    } = options

    if (minCents >= maxCents) {
        throw new Error(`Min cents is not less than max cents; range was ${formatNumber(minCents)} - ${formatNumber(maxCents)}.`)
    }

    if (abs(minCents) > MAX_SIZE_CATEGORY_BOUND || abs(maxCents) > MAX_SIZE_CATEGORY_BOUND) {
        throw new Error(`Cents range must be within comma size category bounds (±227.370¢); range was ${formatNumber(minCents)} - ${formatNumber(maxCents)}.`)
    }

    let commas: Comma[] = []

    const twoThreeFreeMonzosToCheck: Array<Monzo<{ rough: 5 }>> = compute23FreeMonzosToCheck({
        maxPrimeLimit,
        max23FreeSopfr,
        max23FreeCopfr,
    })

    twoThreeFreeMonzosToCheck.forEach((twoThreeFreeMonzoToCheck: Monzo<{ rough: 5 }>): void => {
        commas = commas.concat(
            computeCommasFrom23FreeMonzo(
                twoThreeFreeMonzoToCheck,
                {
                    minCents,
                    maxCents,
                    maxAas,
                    maxAte,
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
