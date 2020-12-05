import {areScamonsEqual, Comma, computeSuperScamon, formatPitch, isScamonGreater, Monzo} from "@sagittal/general"
import {
    computeCommasFrom23FreeRationalMonzo,
    DEFAULT_LOWER_BOUND,
    DEFAULT_MAX_AAS,
    DEFAULT_MAX_ATE,
    DEFAULT_MAX_N2D3P9,
    DEFAULT_UPPER_BOUND,
    DEFAULT_ZONE,
    MAX_N2D3P9_FOR_WHICH_POSSIBLE_NUMERATORS_ARE_KNOWN,
    MAX_SIZE_CATEGORY_BOUND,
} from "@sagittal/system"
import {compute23FreeRationalMonzosToCheckFromKnownLowN2D3P9Numerators} from "./knownNumerators"
import {compute23FreeRationalMonzosToCheck} from "./two3FreeMonzosToCheck"
import {FindCommasOptions} from "./types"

const findCommas = (options: Partial<FindCommasOptions>): Comma[] => {
    const {
        zone = DEFAULT_ZONE,
        max23FreeSopfr,
        max23FreeCopfr,
        maxAte = DEFAULT_MAX_ATE,
        maxPrimeLimit,
        maxAas = DEFAULT_MAX_AAS,
        maxN2D3P9 = DEFAULT_MAX_N2D3P9,
    } = options

    const {extrema: [lowerBound = DEFAULT_LOWER_BOUND, upperBound = DEFAULT_UPPER_BOUND]} = zone

    if (isScamonGreater(lowerBound, upperBound) || areScamonsEqual(lowerBound, upperBound)) {
        throw new Error(`Lower bound is not less than upper bound; range was ${formatPitch(lowerBound)} - ${formatPitch(upperBound)}.`)
    }

    if (
        isScamonGreater(computeSuperScamon(upperBound), MAX_SIZE_CATEGORY_BOUND.pitch) ||
        isScamonGreater(computeSuperScamon(lowerBound), MAX_SIZE_CATEGORY_BOUND.pitch)
    ) {
        throw new Error(`Search range must be within comma size category bounds (±227.370¢); range was ${formatPitch(lowerBound)} - ${formatPitch(upperBound)}.`)
    }

    let commas: Comma[] = []

    const two3FreeRationalMonzosToCheck = maxN2D3P9 > MAX_N2D3P9_FOR_WHICH_POSSIBLE_NUMERATORS_ARE_KNOWN ?
        compute23FreeRationalMonzosToCheck({
            maxPrimeLimit,
            max23FreeSopfr,
            max23FreeCopfr,
            maxN2D3P9,
        }) :
        compute23FreeRationalMonzosToCheckFromKnownLowN2D3P9Numerators({
            maxPrimeLimit,
            max23FreeSopfr,
            max23FreeCopfr,
            maxN2D3P9,
        })

    two3FreeRationalMonzosToCheck.forEach((two3FreeRationalMonzoToCheck: Monzo<{rational: true, rough: 5}>): void => {
        commas = commas.concat(
            computeCommasFrom23FreeRationalMonzo(
                two3FreeRationalMonzoToCheck,
                {
                    zone,
                    maxAas,
                    maxAte,
                    maxN2D3P9,
                    maxPrimeLimit,
                },
            ),
        )
    })

    return commas
}

export {
    findCommas,
}
