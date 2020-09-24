import { computeLowestTermsRatio, Io, isUndefined, Maybe, parseRatio } from "../../../../general"
import { SIZE_CATEGORIES } from "./sizeCategories"
import { CommaNameRatio, ParsedCommaName, SizeCategoryName } from "./types"

const parseCommaName = (commaNameIo: Io): ParsedCommaName => {
    const twoThreeFreeClassPartOfCommaName = commaNameIo
        .replace(/[a-zA-Z+\-]/g, "") as Io
    const sizeCategoryPartOfCommaName = commaNameIo
        .replace(twoThreeFreeClassPartOfCommaName, "")
        .replace(/-/, "") as Io

    const commaNameRatio: CommaNameRatio = computeLowestTermsRatio(parseRatio(twoThreeFreeClassPartOfCommaName))

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
