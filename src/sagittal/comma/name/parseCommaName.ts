import { ANY_COMMA_NAME_CHARS, Formatted, isUndefined, Maybe, Name, parseRatio, Ratio } from "../../../general"
import { AnalyzedRationalPitch } from "../../types"
import { SIZE_CATEGORIES } from "./sizeCategories"
import { SizeCategoryName } from "./types"

const parseCommaName = (
    commaName: Name<AnalyzedRationalPitch>,
): { ratio: Ratio, sizeCategoryName: SizeCategoryName } => {
    const ratioPartOfCommaName = commaName.replace(ANY_COMMA_NAME_CHARS, "") as Formatted<Ratio>
    const sizeCategoryPartOfCommaName = commaName.replace(ratioPartOfCommaName, "")

    const ratio = parseRatio(ratioPartOfCommaName)

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

    return { ratio, sizeCategoryName: maybeSizeCategoryName }
}

export {
    parseCommaName,
}
