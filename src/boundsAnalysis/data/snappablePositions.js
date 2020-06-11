const {computeEdaMidpoints} = require("./edaMidpoints")
const {computeLevelCommaMeans} = require("./levelCommaMeans")
const {computeSizeCategoryBounds} = require("./sizeCategoryBounds")
const {LEVELS} = require("./levels")

const computeSnappablePositions = (computeLevelSnappablePositions) => {
    return LEVELS.reduce(
        (snappablePositions, level) => {
            return {
                ...snappablePositions,
                [level]: computeLevelSnappablePositions(level),
            }
        },
        {},
    )
}

const LEVELS_EDA_MIDPOINTS = computeSnappablePositions(computeEdaMidpoints)
const LEVELS_COMMA_MEANS = computeSnappablePositions(computeLevelCommaMeans)
const LEVELS_SIZE_CATEGORY_BOUNDS = computeSnappablePositions(computeSizeCategoryBounds)

const EVENT_TYPE_SNAPPABLE_POSITIONS = {
    EDA: LEVELS_EDA_MIDPOINTS,
    SIZE: LEVELS_SIZE_CATEGORY_BOUNDS,
    MEAN: LEVELS_COMMA_MEANS,
}

module.exports = {
    LEVELS_EDA_MIDPOINTS,
    LEVELS_COMMA_MEANS,
    LEVELS_SIZE_CATEGORY_BOUNDS,
    EVENT_TYPE_SNAPPABLE_POSITIONS,
}
