import { Comma, computeCentsFromPitch, isUndefined } from "../../../general"
import { SIZE_CATEGORIES } from "./sizeCategories"
import { SIZE_CATEGORY_BOUNDS } from "./sizeCategoryBounds"
import { SizeCategoryAbbreviation, SizeCategoryName, SizeCategoryOptions } from "./types"

const computeSizeCategory: {
    (comma: Comma, { abbreviated }: { abbreviated: true }): SizeCategoryAbbreviation,
    (comma: Comma, { abbreviated }: { abbreviated: false }): SizeCategoryName,
    (comma: Comma, {}: {}): SizeCategoryName | SizeCategoryAbbreviation,
    (comma: Comma): SizeCategoryName | SizeCategoryAbbreviation,
} = (comma: Comma, { abbreviated = true }: SizeCategoryOptions = {}): any => {
    const cents = computeCentsFromPitch(comma)

    let sizeCategory = SIZE_CATEGORIES[ 0 ]

    SIZE_CATEGORY_BOUNDS.forEach((sizeCategoryBound, index) => {
        if (cents > sizeCategoryBound.cents) {
            sizeCategory = SIZE_CATEGORIES[ index + 1 ]
        }
    })

    if (isUndefined(sizeCategory)) {
        throw new Error(`${cents}¢ is beyond the maximum size category's bounds.`)
    }

    return abbreviated ?
        sizeCategory.abbreviation :
        sizeCategory.name
}

export {
    computeSizeCategory,
}
