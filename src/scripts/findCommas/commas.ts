import { Comma, invertMonzo, Monzo } from "../../general"
import { computeCommasFromFiveSlicedMonzo } from "./commasFromFiveSlicedMonzo"
import { computeFiveSlicedMonzosToCheck } from "./fiveSlicedMonzosToCheck"
import { ComputeCommasOptions } from "./types"

const computeCommas = (options: ComputeCommasOptions) => {
    const {
        lowerBound,
        upperBound,
        maximumFiveRoughSopfr,
        maximumFiveRoughCopfr,
        maximumApotomeSlope,
        maximumPrimeLimit,
        maximumAbsoluteThreeExponent,
        maximumN2D3P9,
        fiveSlicedMonzo,
        sortKey,
    } = options

    let commas: Comma[] = []

    const fiveSlicedMonzosToCheck: Array<Monzo<5>> = fiveSlicedMonzo ?
        [fiveSlicedMonzo, invertMonzo(fiveSlicedMonzo)] :
        computeFiveSlicedMonzosToCheck({
            maximumPrimeLimit,
            maximumFiveRoughSopfr,
            maximumFiveRoughCopfr,
        })

    fiveSlicedMonzosToCheck.forEach(fiveSlicedMonzoToCheck => {
        commas = commas.concat(
            computeCommasFromFiveSlicedMonzo(
                fiveSlicedMonzoToCheck,
                {
                    lowerBound,
                    upperBound,
                    maximumApotomeSlope,
                    maximumAbsoluteThreeExponent,
                    maximumN2D3P9,
                },
            ),
        )
    })

    if (sortKey) {
        commas.sort((comma, nextComma) =>
            (comma[ sortKey ] as number) - (nextComma[ sortKey ] as number))
    }

    return commas
}

export {
    computeCommas,
}
