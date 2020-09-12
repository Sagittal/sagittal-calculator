import { Comma, Formatted, isUndefined, Maybe, Name, parseRatio, Ratio, TwoThreeFreeClass } from "../../../general"
import { SIZE_CATEGORIES } from "./sizeCategories"
import { CommaNameRatio, SizeCategoryName } from "./types"

const parseCommaName = (
    commaName: Name<Comma>,
): { commaNameRatio: CommaNameRatio, sizeCategoryName: SizeCategoryName } => {
    const twoThreeFreeClassPartOfCommaName = commaName.replace(/[a-zA-Z+\-]/g, "") as Formatted<TwoThreeFreeClass>
    const sizeCategoryPartOfCommaName = commaName.replace(twoThreeFreeClassPartOfCommaName, "").replace(/-/, "")

    const commaNameRatio = parseRatio(twoThreeFreeClassPartOfCommaName as Formatted as Formatted<CommaNameRatio>)

    let maybeSizeCategoryName: Maybe<SizeCategoryName> = undefined

    for (const sizeCategory of SIZE_CATEGORIES) {
        if (
            sizeCategoryPartOfCommaName === sizeCategory.name ||
            sizeCategoryPartOfCommaName === sizeCategory.abbreviation
        ) {
            maybeSizeCategoryName = sizeCategory.name
        }
    }

    if (isUndefined(maybeSizeCategoryName)) {
        throw new Error(`No size category found for comma name ${commaName}.`)
    }

    return { commaNameRatio, sizeCategoryName: maybeSizeCategoryName }
}

export {
    parseCommaName,
}
