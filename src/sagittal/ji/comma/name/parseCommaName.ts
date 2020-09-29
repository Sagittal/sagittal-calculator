import {
    computeLowestTermsRationalQuotient,
    Io,
    isUndefined,
    Maybe,
    parseQuotient,
    RationalQuotient,
} from "../../../../general"
import { SIZE_CATEGORIES } from "./sizeCategories"
import { CommaNameQuotient, ParsedCommaName, SizeCategoryName } from "./types"

const parseCommaName = (commaNameIo: Io): ParsedCommaName => {
    const two3FreePartOfCommaName = commaNameIo // *not* a 2,3-free class, becuase it's not necessarily super!!!
        .replace(/[a-zA-Z+\-]/g, "") as Io
    const sizeCategoryPartOfCommaName = commaNameIo
        .replace(two3FreePartOfCommaName, "")
        .replace(/-/, "") as Io

    const commaNameQuotient: CommaNameQuotient = computeLowestTermsRationalQuotient(
        parseQuotient(two3FreePartOfCommaName) as RationalQuotient<{ rough: 5 }>,
    ) as RationalQuotient<{ rough: 5 }> as CommaNameQuotient

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

    return { commaNameQuotient, sizeCategoryName }
}

export {
    parseCommaName,
}
