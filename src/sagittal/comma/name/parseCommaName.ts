import { Formatted, isUndefined, Maybe, Name, parseRatio, Ratio } from "../../../general"
import { AnalyzedRationalPitch } from "../../types"
import { SIZE_CATEGORIES } from "./sizeCategories"
import { SizeCategoryName } from "./types"

const parseCommaName = (
    commaName: Name<AnalyzedRationalPitch>,
): { fiveRoughRatio: Ratio, sizeCategoryName: SizeCategoryName } => {
    const ratioPartOfCommaName = commaName.replace(/[a-zA-Z+\-]/g, "") as Formatted<Ratio>
    const sizeCategoryPartOfCommaName = commaName.replace(ratioPartOfCommaName, "").replace(/-/, "")

    const fiveRoughRatio = parseRatio(ratioPartOfCommaName)

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

    return { fiveRoughRatio, sizeCategoryName: maybeSizeCategoryName }
}

export {
    parseCommaName,
}
