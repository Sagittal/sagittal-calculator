import { computeFiveSlicedMonzosToCheck } from "./fiveSlicedMonzosToCheck"
import { computeCommasFromFiveSlicedMonzo } from "./commasFromFiveSlicedMonzo"
import { invertMonzo } from "../../utilities/comma/invertMonzo"
import { ComputeCommasOptions } from "./types"
import { Comma } from "../../utilities/comma/types"

const computeCommas = (options: ComputeCommasOptions) => {
    const {
        lowerBound,
        upperBound,
        maximumFiveRoughSopfr,
        maximumFiveRoughCopfr,
        maximumApotomeSlope,
        maximumPrimeLimit,
        maximumAbsoluteThreeExponent,
        fiveSlicedMonzo,
        sortKey,
    } = options

    let commas: Comma[] = []

    const fiveSlicedMonzosToCheck = fiveSlicedMonzo ? [fiveSlicedMonzo, invertMonzo(fiveSlicedMonzo)] : computeFiveSlicedMonzosToCheck({
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
                },
            ),
        )
    })

    if (sortKey) {
        commas.sort((comma, nextComma) => {
            return (comma[ sortKey ] as number) - (nextComma[ sortKey ] as number)
        })
    }

    return commas
}

export {
    computeCommas,
}
