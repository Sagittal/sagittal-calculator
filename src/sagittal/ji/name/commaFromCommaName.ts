import {
    Comma,
    computeRationalMonzoFromRationalQuotient,
    computeRationalScamonFromRationalMonzo,
    Max,
    Min,
    Scamon,
} from "../../../general"
import {computeNotatingCommas} from "../find"
import {computeSizeCategoryExtrema} from "./sizeCategoryExtrema"
import {CommaNameQuotient, SizeCategoryName} from "./types"

const computeCommaFromCommaNameQuotientAndSizeCategoryName = (
    parsedCommaName: {commaNameQuotient: CommaNameQuotient, sizeCategoryName: SizeCategoryName},
): Comma => {
    const {commaNameQuotient, sizeCategoryName} = parsedCommaName

    const [lowerBound, upperBound] = computeSizeCategoryExtrema(sizeCategoryName)

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

    // TODO: COMMA NAMES: BUG WITH DIRECTED NAMES
    //  Code crashes for `npm run analyze-ji-pitch 5C` because it gets both [-34 20 1⟩ & [-4 4 -1⟩
    //  I think the problem is that 5C shouldn't become 1/5C too... I mean, 1/5C doesn't become 5C...
    //  But to be safe, wait until the conversation is resolved on the forum about comma naming
    //  I think it may just be doing the expand to encompass the limits of the requested pitch,
    //  So if you found an example other than 5 for which it was the other way around it would fail the other way?
    //  Except wait isn’t that the very module which I took a note about failing to be able to have it
    //  Accommodate the settings requested when running the script?? (yes ^^)
    //  Okay, still waiting on the forum... it looks like 5C might not even be a thing, or should be the same

    if (commas.length !== 1) {
        throw new Error(`For whatever reason the number of commas notating the monzo ${two3FreeMonzo} within the bounds of its size category ${sizeCategoryName} was not 1. It was ${commas.length}. Perhaps you need to expand the search parameters, e.g. raise the max ATE, AAS, or 2,3-free sopfr.`)
    }

    return commas[0]
}

export {
    computeCommaFromCommaNameQuotientAndSizeCategoryName,
}
