import {
    BLANK,
    computeLowestTermsRationalQuotient,
    Io,
    isUndefined,
    Maybe,
    parseQuotient,
    Quotient,
} from "../../../general"
import {SIZE_CATEGORY_ABBREVIATIONS, SIZE_CATEGORY_NAMES} from "./sizeCategories"
import {CommaNameQuotient, ParsedCommaName, SizeCategory} from "./types"

const parseCommaName = (commaNameIo: Io): ParsedCommaName => {
    const two3FreePartOfCommaName = commaNameIo // *not* a 2,3-free class, because it's not necessarily super!!!
        .replace(/[a-zA-Z+\-]/g, BLANK) as Io
    const sizeCategoryPartOfCommaName = commaNameIo
        .replace(two3FreePartOfCommaName, BLANK)
        .replace(/-/, BLANK) as Io

    const commaNameQuotient: CommaNameQuotient = computeLowestTermsRationalQuotient(
        parseQuotient(two3FreePartOfCommaName) as Quotient<{rational: true, rough: 3}>,
    ) as Quotient<{rational: true, rough: 3}> as CommaNameQuotient

    let sizeCategory: Maybe<SizeCategory> = undefined

    for (const sizeCategoryValue of Object.values(SizeCategory)) {
        if (
            sizeCategoryPartOfCommaName === SIZE_CATEGORY_NAMES[sizeCategoryValue]
            || sizeCategoryPartOfCommaName === SIZE_CATEGORY_ABBREVIATIONS[sizeCategoryValue]
        ) {
            sizeCategory = sizeCategoryValue
        }
    }

    if (isUndefined(sizeCategory)) {
        throw new Error(`No size category found for comma name ${commaNameIo}.`)
    }

    return {commaNameQuotient, sizeCategory}
}

export {
    parseCommaName,
}
