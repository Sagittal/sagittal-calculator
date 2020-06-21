const {computeSizeCategoryBounds} = require("../../boundsAnalysis/data/sizeCategoryBounds")
const {SIZE_CATEGORIES} = require("../../boundsAnalysis/data/sizeCategories")

const computeSizeCategory = (cents, {abbreviated = true} = {}) => {
    let sizeCategory = SIZE_CATEGORIES[0]

    computeSizeCategoryBounds().forEach((sizeCategoryBound, index) => {
        if (cents > sizeCategoryBound.position) {
            sizeCategory = SIZE_CATEGORIES[index + 1]
        }
    })

    return abbreviated ? sizeCategory.abbreviation : sizeCategory.name
}

module.exports = {
    computeSizeCategory,
}
