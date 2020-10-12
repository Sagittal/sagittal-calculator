import {
    Comma,
    computeRationalMonzoFromRationalQuotient,
    computeRationalScamonFromRationalMonzo,
    Max,
    Min,
    Scamon,
} from "../../../../general"
import { computeNotatingCommas } from "../find"
import { computeSizeCategoryExtrema } from "./sizeCategoryExtrema"
import { CommaNameQuotient, SizeCategoryName } from "./types"

const computeCommaFromCommaNameQuotientAndSizeCategoryName = (
    parsedCommaName: { commaNameQuotient: CommaNameQuotient, sizeCategoryName: SizeCategoryName },
): Comma => {
    const { commaNameQuotient, sizeCategoryName } = parsedCommaName

    const [lowerBound, upperBound] = computeSizeCategoryExtrema(sizeCategoryName)

    const two3FreeMonzo = computeRationalMonzoFromRationalQuotient(commaNameQuotient)
    const commas = computeNotatingCommas(
        computeRationalScamonFromRationalMonzo(two3FreeMonzo),
        {
            lowerBound: lowerBound.pitch as Scamon as Min<Scamon>,
            upperBound: upperBound.pitch as Scamon as Max<Scamon>,
        },
    )

    if (commas.length !== 1) {
        throw new Error(`For whatever reason the number of commas notating the monzo ${(two3FreeMonzo)} in the range of that size category ${sizeCategoryName} was not 1. It was ${commas.length}.`)
    }

    return commas[ 0 ]
}

export {
    computeCommaFromCommaNameQuotientAndSizeCategoryName,
}
