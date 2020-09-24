import { computeMonzoFromRatio, Monzo } from "../../../../general"
import { computeNotatingCommas } from "../find"
import { computeSizeCategoryExtrema } from "./sizeCategoryExtrema"
import { CommaNameRatio, SizeCategoryName } from "./types"

const computeMonzoFrom23FreeClassAndSizeCategoryName = (
    parsedCommaName: { commaNameRatio: CommaNameRatio, sizeCategoryName: SizeCategoryName },
): Monzo => {
    const { commaNameRatio, sizeCategoryName } = parsedCommaName

    const [lowerBound, upperBound] = computeSizeCategoryExtrema(sizeCategoryName)

    const twoThreeFreeMonzo = computeMonzoFromRatio(commaNameRatio)
    const commas = computeNotatingCommas({ monzo: twoThreeFreeMonzo }, { lowerBound, upperBound })

    if (commas.length !== 1) {
        throw new Error(`For whatever reason the number of commas exactly notating the monzo ${(twoThreeFreeMonzo)} in the range of that size category ${sizeCategoryName} was not 1. It was ${commas.length}.`)
    }

    return commas[ 0 ].monzo!
}

export {
    computeMonzoFrom23FreeClassAndSizeCategoryName,
}
