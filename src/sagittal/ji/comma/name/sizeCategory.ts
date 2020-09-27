import { Comma, formatPitch, isUndefined, numIsHigher } from "../../../../general"
import { SIZE_CATEGORIES } from "./sizeCategories"
import { SIZE_CATEGORY_BOUNDS } from "./sizeCategoryBounds"
import { SizeCategoryAbbreviation, SizeCategoryBound, SizeCategoryName, SizeCategoryOptions } from "./types"

const computeSizeCategory: {
    (comma: Comma, { abbreviated }: { abbreviated: true }): SizeCategoryAbbreviation,
    (comma: Comma, { abbreviated }: { abbreviated: false }): SizeCategoryName,
    (comma: Comma, {}: {}): SizeCategoryName | SizeCategoryAbbreviation,
    (comma: Comma): SizeCategoryName | SizeCategoryAbbreviation,
} = (comma: Comma, { abbreviated = true }: SizeCategoryOptions = {}): any => {
    let sizeCategory = SIZE_CATEGORIES[ 0 ]

    SIZE_CATEGORY_BOUNDS.forEach((sizeCategoryBound: SizeCategoryBound, index: number): void => {
        if (numIsHigher(comma, sizeCategoryBound)) {
            sizeCategory = SIZE_CATEGORIES[ index + 1 ]
        }
    })

    if (isUndefined(sizeCategory)) {
        throw new Error(`${formatPitch(comma, { align: false })} is beyond the maximum size category's bounds.`)
    }

    return abbreviated ?
        sizeCategory.abbreviation :
        sizeCategory.name
}

export {
    computeSizeCategory,
}
