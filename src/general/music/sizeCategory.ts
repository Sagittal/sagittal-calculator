import { SIZE_CATEGORIES } from "./sizeCategories"
import { SIZE_CATEGORY_BOUNDS } from "./sizeCategoryBounds"
import { Cents, SizeCategoryOptions } from "./types"

const computeSizeCategory = (cents: Cents, { abbreviated = true }: SizeCategoryOptions = {}) => {
    let sizeCategory = SIZE_CATEGORIES[ 0 ]

    SIZE_CATEGORY_BOUNDS.forEach((sizeCategoryBound, index) => {
        if (cents > sizeCategoryBound.cents) {
            sizeCategory = SIZE_CATEGORIES[ index + 1 ]
        }
    })

    return abbreviated ? sizeCategory.abbreviation : sizeCategory.name
}

export {
    computeSizeCategory,
}
