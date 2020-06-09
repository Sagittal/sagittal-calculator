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

const LEVEL_EDA_MIDPOINTS = computeSnappablePositions(computeEdaMidpoints)
const LEVEL_COMMA_MEANS = computeSnappablePositions(computeLevelCommaMeans)
const LEVEL_SIZE_CATEGORY_BOUNDS = computeSnappablePositions(computeSizeCategoryBounds)

module.exports = {
    LEVEL_EDA_MIDPOINTS,
    LEVEL_COMMA_MEANS,
    LEVEL_SIZE_CATEGORY_BOUNDS,
}
