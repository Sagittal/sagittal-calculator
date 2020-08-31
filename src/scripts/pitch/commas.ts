import { Integer, Monzo, sort } from "../../general"
import { AnalyzedRationalPitch } from "../../sagittal"
import { computeCommasFromFiveSlicedMonzo } from "./commasFromFiveSlicedMonzo"
import { computeFiveSlicedMonzosToCheck } from "./fiveSlicedMonzosToCheck"
import { ComputeCommasOptions } from "./types"

const computeCommas = (options: ComputeCommasOptions): AnalyzedRationalPitch[] => {
    const {
        minCents,
        maxCents,
        maxFiveRoughSopfr,
        maxFiveRoughCopfr,
        maxAbsoluteApotomeSlope,
        maxPrimeLimit,
        maxAbsoluteThreeExponent,
        maxN2D3P9,
        sortKey,
    } = options

    let commas: AnalyzedRationalPitch[] = []

    const fiveSlicedMonzosToCheck: Array<Monzo<Integer, 5>> = computeFiveSlicedMonzosToCheck({
        maxPrimeLimit,
        maxFiveRoughSopfr,
        maxFiveRoughCopfr,
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
