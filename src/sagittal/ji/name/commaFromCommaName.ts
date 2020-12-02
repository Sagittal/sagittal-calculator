import {
    Comma,
    compute23FreeClass,
    computeRationalQuotientSmoothness,
    computeRationalScamonFromRationalMonzo,
    computeRationalScamonFromRationalQuotient,
    FIVE_SMOOTHNESS,
    increment,
    isUndefined,
    Max,
    Maybe,
    Min,
    Monzo,
    Scamon,
} from "../../../general"
import {computeN2D3P9} from "../badness"
import {computeNotatingCommas, computeRationalMonzoInZone} from "../find"
import {computeSizeCategoryExtrema} from "./sizeCategoryExtrema"
import {CommaNameQuotient, SizeCategory} from "./types"

const compute3LimitCommaInSizeCategory = (sizeCategory: SizeCategory): Comma => {
    let threeExponent = 0
    const [lowerBound, upperBound] = computeSizeCategoryExtrema(sizeCategory)

    while (true) {
        let rationalMonzoInZone: Maybe<Monzo<{rational: true}>> = computeRationalMonzoInZone(
            [0, threeExponent] as Monzo<{rational: true, rough: 3}>,
            [lowerBound.pitch as Scamon as Min<Scamon>, upperBound.pitch as Scamon as Max<Scamon>],
        )
        if (!isUndefined(rationalMonzoInZone)) {
            return computeRationalScamonFromRationalMonzo(rationalMonzoInZone) as Comma
        }

        rationalMonzoInZone = computeRationalMonzoInZone(
            [0, -threeExponent] as Monzo<{rational: true, rough: 3}>,
            [lowerBound.pitch as Scamon as Min<Scamon>, upperBound.pitch as Scamon as Max<Scamon>],
        )
        if (!isUndefined(rationalMonzoInZone)) {
            return computeRationalScamonFromRationalMonzo(rationalMonzoInZone) as Comma
        }

        threeExponent = increment(threeExponent)
    }
}

const computeCommaFromCommaNameQuotientAndSizeCategory = (
    {commaNameQuotient, sizeCategory}: {commaNameQuotient: CommaNameQuotient, sizeCategory: SizeCategory},
): Comma => {
    if (computeRationalQuotientSmoothness(commaNameQuotient) < FIVE_SMOOTHNESS) {
        return compute3LimitCommaInSizeCategory(sizeCategory)
    }

    const [lowerBound, upperBound] = computeSizeCategoryExtrema(sizeCategory)

    const commas = computeNotatingCommas(
        computeRationalScamonFromRationalQuotient(commaNameQuotient),
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
        throw new Error(`For whatever reason the number of commas notating the comma name quotient ${commaNameQuotient} within the bounds of its size category ${sizeCategory} was not 1. It was ${commas.length}. Perhaps you need to expand the search parameters, e.g. raise the max ATE, AAS, or 2,3-free sopfr.`)
    }

    return mostPopularComma
}

export {
    computeCommaFromCommaNameQuotientAndSizeCategory,
}
