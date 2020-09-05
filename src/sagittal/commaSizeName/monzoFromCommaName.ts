import {
    Abs,
    ANY_COMMA_NAME_CHARS,
    Cents,
    computeMonzoFromRatio, Exponent,
    Extrema,
    Formatted, Integer,
    isUndefined, Max,
    Maybe,
    Monzo,
    Name,
    parseRatio, Prime,
    Ratio,
} from "../../general"
import { computeNotatingCommas } from "../commaEvaluation"
import { AnalyzedRationalPitch } from "../types"
import { SizeCategory } from "./types"

// TODO: okay, I guess it's cool that I got this working so quickly, but obviously this file is a mess
//  first of all, it imports from one script to another (lint-ignored above)
//  - it feels like we need an enum for size category names and abbreviations now
//  - we don't handle > L ...
//  - we probably need to consider inclusive/exclusive extrema, for the unison discontinuity yadda yadda
//  - and we should rework the data structure for size categories so we don't duplicate stuff here like this

// const getSizeCategory = (sizeCategoryName: Name<SizeCategory>): SizeCategory => {
//     const maybeSizeCategory: Maybe<SizeCategory> = SIZE_CATEGORIES.find(sizeCategory => {
//         return sizeCategory.name === sizeCategoryName || sizeCategory.abbreviation === sizeCategoryName
//     })
//
//     if (isUndefined(maybeSizeCategory)) {
//         throw new Error(`No size category found with name ${sizeCategoryName}.`)
//     }
//
//     return maybeSizeCategory
// }

const extractRatioAndSizeCategoryNameFromCommaName = (
    commaName: Name<AnalyzedRationalPitch>,
): { ratio: Ratio, sizeCategoryName: Name<SizeCategory> } => {
    const ratioPartOfCommaName = commaName.replace(ANY_COMMA_NAME_CHARS, "") as Formatted<Ratio>
    const ratio = parseRatio(ratioPartOfCommaName)

    let maybeSizeCategoryName: Maybe<Name<SizeCategory>> = undefined
    if (commaName.match(/u/) || commaName.match(/unison/)) {
        maybeSizeCategoryName = "unison" as Name<SizeCategory>
    } else if (commaName.match(/n/) || commaName.match(/schismina/)) {
        maybeSizeCategoryName = "schismina" as Name<SizeCategory>
    } else if (commaName.match(/s/) || commaName.match(/schisma/)) {
        maybeSizeCategoryName = "schisma" as Name<SizeCategory>
    } else if (commaName.match(/k/) || commaName.match(/kleisma/)) {
        maybeSizeCategoryName = "kleisma" as Name<SizeCategory>
    } else if (commaName.match(/C/) || commaName.match(/Comma/)) {
        maybeSizeCategoryName = "Comma" as Name<SizeCategory>
    } else if (commaName.match(/S/) || commaName.match(/Small-Diesis/)) {
        maybeSizeCategoryName = "Small-Diesis" as Name<SizeCategory>
    } else if (commaName.match(/M/) || commaName.match(/Medium-Diesis/)) {
        maybeSizeCategoryName = "Medium-Diesis" as Name<SizeCategory>
    } else if (commaName.match(/L/) || commaName.match(/Large-Diesis/)) {
        maybeSizeCategoryName = "Large-Diesis" as Name<SizeCategory>
    }
    if (isUndefined(maybeSizeCategoryName)) {
        throw new Error(`No size category found for comma name ${commaName}.`)
    }

    return { ratio, sizeCategoryName: maybeSizeCategoryName }
}

const computeSizeCategoryExtrema = (sizeCategoryName: Name<SizeCategory>): Extrema<Cents> => {
    switch (sizeCategoryName) {
        case "unison":
            return [0, 0] as Extrema<Cents>
        case "schismina":
            return [0.00000000000001, 1.80752293276652] as Extrema<Cents>
        case "schisma":
            return [1.80752293276652, 4.49991346125848] as Extrema<Cents>
        case "kleisma":
            return [4.49991346125848, 11.7300051923244] as Extrema<Cents>
        case "Comma":
            return [11.7300051923244, 33.3824926442071] as Extrema<Cents>
        case "Small-Diesis":
            return [33.3824926442071, 45.1124978365313] as Extrema<Cents>
        case "Medium-Diesis":
            return [45.1124978365313, 56.8425030288559] as Extrema<Cents>
        case "Large-Diesis":
            return [56.8425030288559, 68.5725082211804] as Extrema<Cents>
        default:
            return [0, 0] as Extrema<Cents>
    }
}

const computeMonzoFromCommaName = (name: Name<AnalyzedRationalPitch>): Monzo => {
    const { ratio, sizeCategoryName } = extractRatioAndSizeCategoryNameFromCommaName(name)

    const monzo = computeMonzoFromRatio(ratio)
    const [minCents, maxCents] = computeSizeCategoryExtrema(sizeCategoryName)

    const commas = computeNotatingCommas(monzo, { minCents, maxCents })

    if (commas.length !== 1) {
        throw new Error(`For whatever reason the number of commas notating the monzo ${monzo} in the range of that size category ${sizeCategoryName} was not 1. It was ${commas.length}.`)
    }

    return commas[ 0 ].monzo
}

export {
    computeMonzoFromCommaName,
}
