import { computeMonzoFromRatio, Monzo, Ratio } from "../../../general"
import { computeNotatingCommas } from "../notatingCommas"
import { computeSizeCategoryExtrema } from "./sizeCategoryExtrema"
import { SizeCategoryName } from "./types"

const computeMonzoFrom23FreeClassAndSizeCategoryName = (
    parsedCommaName: { twoThreeFreeRatio: Ratio, sizeCategoryName: SizeCategoryName },
): Monzo => {
    const { twoThreeFreeRatio, sizeCategoryName } = parsedCommaName

    const [minCents, maxCents] = computeSizeCategoryExtrema(sizeCategoryName)

    const twoThreeFreeMonzo = computeMonzoFromRatio(twoThreeFreeRatio)
    const commas = computeNotatingCommas({ monzo: twoThreeFreeMonzo }, { minCents, maxCents })

    if (commas.length !== 1) {
        throw new Error(`For whatever reason the number of commas notating the monzo ${(twoThreeFreeMonzo)} in the range of that size category ${sizeCategoryName} was not 1. It was ${commas.length}.`)
    }

    return commas[ 0 ].monzo
}

export {
    computeMonzoFrom23FreeClassAndSizeCategoryName,
}
