import { Formatted, isUndefined, Maybe, Name, parseRatio, Ratio } from "../../../general"
import { Comma, TwoThreeFreeClass } from "../../types"
import { SIZE_CATEGORIES } from "./sizeCategories"
import { SizeCategoryName } from "./types"

// TODO: COMMA MONZO RATIO JI this would be a place where you could use parameterized Ratio with same params as Monzo
//  - note that this is yet another thing apart from TwoThreeFreeClassAsRatio...
//  - this ratio does not stipulate being super
//  - which is maybe an argument for it not being directed after all...
const parseCommaName = (commaName: Name<Comma>): { twoThreeFreeRatio: Ratio, sizeCategoryName: SizeCategoryName } => {
    const twoThreeFreeClassPartOfCommaName = commaName.replace(/[a-zA-Z+\-]/g, "") as Formatted<TwoThreeFreeClass>
    const sizeCategoryPartOfCommaName = commaName.replace(twoThreeFreeClassPartOfCommaName, "").replace(/-/, "")

    const twoThreeFreeRatio = parseRatio(twoThreeFreeClassPartOfCommaName as Formatted as Formatted<Ratio>)

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

    return { twoThreeFreeRatio, sizeCategoryName: maybeSizeCategoryName }
}

export {
    parseCommaName,
}
