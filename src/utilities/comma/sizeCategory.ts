import {SIZE_CATEGORIES} from "../../notations/sizeCategories"
import {SIZE_CATEGORY_BOUNDS} from "../../notations/sizeCategoryBounds"

const computeSizeCategory = (cents, {abbreviated = true} = {}) => {
    let sizeCategory = SIZE_CATEGORIES[0]

    SIZE_CATEGORY_BOUNDS.forEach((sizeCategoryBound, index) => {
        if (cents > sizeCategoryBound.position) {
            sizeCategory = SIZE_CATEGORIES[index + 1]
        }
    })

    return abbreviated ? sizeCategory.abbreviation : sizeCategory.name
}

export {
    computeSizeCategory,
}
