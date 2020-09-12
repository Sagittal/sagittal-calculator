import { Cents, isUndefined } from "../../../general"
import { SIZE_CATEGORIES } from "./sizeCategories"
import { SIZE_CATEGORY_BOUNDS } from "./sizeCategoryBounds"
import { SizeCategoryOptions } from "./types"

// TODO: this should take a pitch, not cents
const computeSizeCategory = (cents: Cents, { abbreviated = true }: SizeCategoryOptions = {}) => {
    let sizeCategory = SIZE_CATEGORIES[ 0 ]

    SIZE_CATEGORY_BOUNDS.forEach((sizeCategoryBound, index) => {
        if (cents > sizeCategoryBound.cents) {
            sizeCategory = SIZE_CATEGORIES[ index + 1 ]
        }
    })

    if (isUndefined(sizeCategory)) {
        throw new Error(`${cents}¢ is beyond the maximum size category's bounds.`)
    }

    return abbreviated ? sizeCategory.abbreviation : sizeCategory.name
}

export {
    computeSizeCategory,
}
