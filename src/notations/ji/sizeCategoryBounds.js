const {SIZE_CATEGORY_BOUNDS} = require("../sizeCategoryBounds")

const computeSizeCategoryBounds = () => SIZE_CATEGORY_BOUNDS.slice(0, 7)

module.exports = {
    computeSizeCategoryBounds,
}
