import { Comma, invertMonzo, Monzo, sort } from "../../general"
import { computeCommasFromFiveSlicedMonzo } from "./commasFromFiveSlicedMonzo"
import { computeFiveSlicedMonzosToCheck } from "./fiveSlicedMonzosToCheck"
import { ComputeCommasOptions } from "./types"

const computeCommas = (options: ComputeCommasOptions) => {
    const {
        lowerBound,
        upperBound,
        maxFiveRoughSopfr,
        maxFiveRoughCopfr,
        maxApotomeSlope,
        maxPrimeLimit,
        maxAbsoluteThreeExponent,
        maxN2D3P9,
        fiveSlicedMonzo,
        sortKey,
    } = options

    let commas: Comma[] = []

    const fiveSlicedMonzosToCheck: Array<Monzo<5>> = fiveSlicedMonzo ?
        [fiveSlicedMonzo, invertMonzo(fiveSlicedMonzo)] :
        computeFiveSlicedMonzosToCheck({
            maxPrimeLimit,
            maxFiveRoughSopfr,
            maxFiveRoughCopfr,
        })

    fiveSlicedMonzosToCheck.forEach(fiveSlicedMonzoToCheck => {
        commas = commas.concat(
            computeCommasFromFiveSlicedMonzo(
                fiveSlicedMonzoToCheck,
                {
                    lowerBound,
                    upperBound,
                    maxApotomeSlope,
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
