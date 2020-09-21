import { Comma, Formatted, isUndefined, Maybe, Name, parseRatio, TwoThreeFreeClass } from "../../../../general"
import { SIZE_CATEGORIES } from "./sizeCategories"
import { CommaNameRatio, ParsedCommaName, SizeCategoryName } from "./types"

const parseCommaName = (commaName: Name<Comma>): ParsedCommaName => {
    const twoThreeFreeClassPartOfCommaName = commaName.replace(/[a-zA-Z+\-]/g, "") as Formatted<TwoThreeFreeClass>
    const sizeCategoryPartOfCommaName = commaName.replace(twoThreeFreeClassPartOfCommaName, "").replace(/-/, "")

    const commaNameRatio: CommaNameRatio = 
        parseRatio(twoThreeFreeClassPartOfCommaName as Formatted as Formatted<CommaNameRatio<{ unreduced: true }>>)

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
        throw new Error(`No size category found for comma name ${commaName}.`)
    }

    return { commaNameRatio, sizeCategoryName }
}

export {
    parseCommaName,
}
