import { Monzo, sort } from "../../general"
import { AnalyzedRationalPitch, computeCommasFromFiveSlicedMonzo } from "../../sagittal"
import { computeFiveSlicedMonzosToCheck } from "./fiveSlicedMonzosToCheck"
import { CommasOptions } from "./types"

const computeCommas = (options: CommasOptions): AnalyzedRationalPitch[] => {
    const {
        minCents,
        maxCents,
        max23FreeSopfr,
        max23FreeCopfr,
        maxAbsoluteApotomeSlope,
        maxPrimeLimit,
        maxAbsoluteThreeExponent,
        maxN2D3P9,
        sortKey,
        commaNameOptions,
    } = options

    let commas: AnalyzedRationalPitch[] = []

    const fiveSlicedMonzosToCheck: Array<Monzo<{ slice: 5 }>> = computeFiveSlicedMonzosToCheck({
        maxPrimeLimit,
        max23FreeSopfr,
        max23FreeCopfr,
    })

    fiveSlicedMonzosToCheck.forEach(fiveSlicedMonzoToCheck => {
        commas = commas.concat(
            computeCommasFromFiveSlicedMonzo(
                fiveSlicedMonzoToCheck,
                {
                    minCents,
                    maxCents,
                    maxAbsoluteApotomeSlope,
                    maxAbsoluteThreeExponent,
                    maxN2D3P9,
                    commaNameOptions,
                },
            ),
        )
    })

    if (sortKey) {
        sort(commas, { by: sortKey })
    }

    return commas
}

export {
    computeCommas,
}
