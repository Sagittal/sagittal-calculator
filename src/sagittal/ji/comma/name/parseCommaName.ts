import { computeLowestTermsRationalRatio, Io, isUndefined, Maybe, parseRatio, RationalRatio } from "../../../../general"
import { SIZE_CATEGORIES } from "./sizeCategories"
import { CommaNameRatio, ParsedCommaName, SizeCategoryName } from "./types"

const parseCommaName = (commaNameIo: Io): ParsedCommaName => {
    const twoThreeFreePartOfCommaName = commaNameIo // *not* a 2,3-free class, becuase it's not necessarily super!!!
        .replace(/[a-zA-Z+\-]/g, "") as Io
    const sizeCategoryPartOfCommaName = commaNameIo
        .replace(twoThreeFreePartOfCommaName, "")
        .replace(/-/, "") as Io

    const commaNameRatio: CommaNameRatio = computeLowestTermsRationalRatio(
        parseRatio(twoThreeFreePartOfCommaName) as RationalRatio<{ rough: 5 }>,
    ) as RationalRatio<{ rough: 5 }> as CommaNameRatio

    let sizeCategoryName: Maybe<SizeCategoryName> = undefined

    for (const sizeCategory of SIZE_CATEGORIES) {
        if (
            sizeCategoryPartOfCommaName === sizeCategory.name ||
            sizeCategoryPartOfCommaName === sizeCategory.abbreviation
        ) {
            sizeCategoryName = sizeCategory.name
        }
    }

    if (isUndefined(sizeCategoryName)) {
        throw new Error(`No size category found for comma name ${commaNameIo}.`)
    }

    return { commaNameRatio, sizeCategoryName }
}

export {
    parseCommaName,
}
