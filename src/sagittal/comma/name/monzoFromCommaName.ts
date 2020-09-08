import { computeMonzoFromRatio, Monzo } from "../../../general"
import { computeNotatingCommas } from "../notatingCommas"
import { TwoThreeFreeClass } from "../types"
import { computeSizeCategoryExtrema } from "./sizeCategoryExtrema"
import { SizeCategoryName } from "./types"

const computeMonzoFromTwoThreeFreeRatioAndSizeCategoryName = (
    parsedCommaName: { twoThreeFreeClass: TwoThreeFreeClass, sizeCategoryName: SizeCategoryName },
): Monzo => {
    const { twoThreeFreeClass, sizeCategoryName } = parsedCommaName

    const twoThreeFreeMonzo = computeMonzoFromRatio(twoThreeFreeClass)
    const [minCents, maxCents] = computeSizeCategoryExtrema(sizeCategoryName)

    const commas = computeNotatingCommas(twoThreeFreeMonzo, { minCents, maxCents })

    if (commas.length !== 1) {
        throw new Error(`For whatever reason the number of commas notating the monzo ${twoThreeFreeMonzo} in the range of that size category ${sizeCategoryName} was not 1. It was ${commas.length}.`)
    }

    return commas[ 0 ].monzo
}

export {
    computeMonzoFromTwoThreeFreeRatioAndSizeCategoryName,
}
