import {
    BLANK,
    computeLowestTermsRationalQuotient,
    Io,
    isUndefined,
    Maybe,
    parseQuotient,
    Quotient,
} from "@sagittal/general"
import {SIZE_CATEGORY_ABBREVIATIONS, SIZE_CATEGORY_NAMES, SIZE_CATEGORY_NAME_ALTERNATIVES} from "./sizeCategories"
import {CommaNameQuotient, ParsedCommaName, SizeCategory, SizeCategoryName} from "./types"

const parseCommaName = (commaNameIo: Io): ParsedCommaName => {
    const quotientPartOfCommaName = commaNameIo // *not* a 2,3-free class, because it's not necessarily super!!!
        .replace(/[a-zA-Z+\-]/g, BLANK) as Io
    const sizeCategoryPartOfCommaName = commaNameIo
        .replace(quotientPartOfCommaName, BLANK)
        .replace(/-/, BLANK) as Io

    const commaNameQuotient: CommaNameQuotient = computeLowestTermsRationalQuotient(
        parseQuotient(quotientPartOfCommaName) as Quotient<{rational: true, rough: 3}>,
    ) as Quotient<{rational: true, rough: 3}> as CommaNameQuotient

    let sizeCategory: Maybe<SizeCategory> = undefined

    for (const sizeCategoryValue of Object.values(SizeCategory)) {
        if (
            sizeCategoryPartOfCommaName.toUpperCase() === SIZE_CATEGORY_NAMES[sizeCategoryValue].toUpperCase()
            || sizeCategoryPartOfCommaName === SIZE_CATEGORY_ABBREVIATIONS[sizeCategoryValue]
            || SIZE_CATEGORY_NAME_ALTERNATIVES[sizeCategoryValue]
                .includes(sizeCategoryPartOfCommaName as SizeCategoryName)
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
