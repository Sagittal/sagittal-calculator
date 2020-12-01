import {
    Comma,
    compute23FreeClass,
    computeRationalMonzoFromRationalQuotient,
    computeRationalScamonFromRationalMonzo,
    isUndefined,
    Max,
    Min,
    Scamon,
} from "../../../general"
import {computeN2D3P9} from "../badness"
import {computeNotatingCommas} from "../find"
import {computeSizeCategoryExtrema} from "./sizeCategoryExtrema"
import {CommaNameQuotient, SizeCategory} from "./types"

const computeCommaFromCommaNameQuotientAndSizeCategory = (
    parsedCommaName: {commaNameQuotient: CommaNameQuotient, sizeCategory: SizeCategory},
): Comma => {
    const {commaNameQuotient, sizeCategory} = parsedCommaName

    const [lowerBound, upperBound] = computeSizeCategoryExtrema(sizeCategory)

    const two3FreeMonzo = computeRationalMonzoFromRationalQuotient(commaNameQuotient)
    const commas = computeNotatingCommas(
        computeRationalScamonFromRationalMonzo(two3FreeMonzo),
        {
            // It would be cool if we could use the search options the user provides here, but it creates a
            // Chicken-and-egg problem since we need to use this method itself as part of parsing said options!
            // No real choice but to go with the defaults here, unless we majorly refactor
            lowerBound: lowerBound.pitch as Scamon as Min<Scamon>,
            upperBound: upperBound.pitch as Scamon as Max<Scamon>,
        },
    )

    let mostPopularComma = undefined
    let bestPopularity = Infinity
    commas.forEach((comma: Comma): void => {
        const popularity = computeN2D3P9(compute23FreeClass(comma))
        if (popularity < bestPopularity) {
            bestPopularity = popularity
            mostPopularComma = comma
        }
    })

    if (isUndefined(mostPopularComma)) {
        throw new Error(`For whatever reason the number of commas notating the monzo ${two3FreeMonzo} within the bounds of its size category ${sizeCategory} was not 1. It was ${commas.length}. Perhaps you need to expand the search parameters, e.g. raise the max ATE, AAS, or 2,3-free sopfr.`)
    }

    return mostPopularComma
}

export {
    computeCommaFromCommaNameQuotientAndSizeCategory,
}
