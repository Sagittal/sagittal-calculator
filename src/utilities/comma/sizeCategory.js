const {SIZE_CATEGORIES} = require("../../notations/sizeCategories")
const {SIZE_CATEGORY_BOUNDS} = require("../../notations/sizeCategoryBounds")

const computeSizeCategory = (cents, {abbreviated = true} = {}) => {
    let sizeCategory = SIZE_CATEGORIES[0]

    SIZE_CATEGORY_BOUNDS.forEach((sizeCategoryBound, index) => {
        if (cents > sizeCategoryBound.position) {
            sizeCategory = SIZE_CATEGORIES[index + 1]
        }
    })

    return abbreviated ? sizeCategory.abbreviation : sizeCategory.name
}

module.exports = {
    computeSizeCategory,
}
