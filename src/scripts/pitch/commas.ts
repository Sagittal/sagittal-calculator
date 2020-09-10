import { Monzo } from "../../general"
import { Comma, computeCommasFromTwoThreeFreeMonzo } from "../../sagittal"
import { compute23FreeMonzosToCheck } from "./fiveSlicedMonzosToCheck"
import { CommasOptions } from "./types"

const computeCommas = (options: CommasOptions): Comma[] => {
    const {
        minCents,
        maxCents,
        max23FreeSopfr,
        max23FreeCopfr,
        maxAbsoluteApotomeSlope,
        maxPrimeLimit,
        maxAbsoluteThreeExponent,
        maxN2D3P9,
    } = options

    // TODO: for names of these things to make sense, you'll probably want to throw errors if min < 0 or max > 0 cents

    let commas: Comma[] = []

    const fiveSlicedMonzosToCheck: Array<Monzo<{ rough: 5 }>> = compute23FreeMonzosToCheck({
        maxPrimeLimit,
        max23FreeSopfr,
        max23FreeCopfr,
    })

    fiveSlicedMonzosToCheck.forEach(fiveSlicedMonzoToCheck => {
        commas = commas.concat(
            computeCommasFromTwoThreeFreeMonzo(
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

    return commas
}

export {
    computeCommas,
}
