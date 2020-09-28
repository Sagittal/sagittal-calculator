import { Comma, computeNumFromMonzo, computeRationalMonzoFromRationalQuotient } from "../../../../general"
import { computeNotatingCommas } from "../find"
import { computeSizeCategoryExtrema } from "./sizeCategoryExtrema"
import { CommaNameQuotient, SizeCategoryName } from "./types"

const computeCommaFromCommaNameQuotientAndSizeCategoryName = (
    parsedCommaName: { commaNameQuotient: CommaNameQuotient, sizeCategoryName: SizeCategoryName },
): Comma => {
    const { commaNameQuotient, sizeCategoryName } = parsedCommaName

    const [lowerBound, upperBound] = computeSizeCategoryExtrema(sizeCategoryName)

    const two3FreeMonzo = computeRationalMonzoFromRationalQuotient(commaNameQuotient)
    const commas = computeNotatingCommas(computeNumFromMonzo(two3FreeMonzo), { lowerBound, upperBound })

    if (commas.length !== 1) {
        throw new Error(`For whatever reason the number of commas exactly notating the monzo ${(two3FreeMonzo)} in the range of that size category ${sizeCategoryName} was not 1. It was ${commas.length}.`)
    }

    return commas[ 0 ]
}

export {
    computeCommaFromCommaNameQuotientAndSizeCategoryName,
}
