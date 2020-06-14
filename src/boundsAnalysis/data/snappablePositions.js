const {computeInaMidpoints} = require("./inaMidpoints")
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

const INA_MIDPOINTS = computeSnappablePositions(computeInaMidpoints)
const LEVELS_COMMA_MEANS = computeSnappablePositions(computeLevelCommaMeans)
const LEVELS_SIZE_CATEGORY_BOUNDS = computeSnappablePositions(computeSizeCategoryBounds)

const EVENT_TYPE_SNAPPABLE_POSITIONS = {
    INA: INA_MIDPOINTS,
    SIZE: LEVELS_SIZE_CATEGORY_BOUNDS,
    MEAN: LEVELS_COMMA_MEANS,
}

module.exports = {
    INA_MIDPOINTS,
    LEVELS_COMMA_MEANS,
    LEVELS_SIZE_CATEGORY_BOUNDS,
    EVENT_TYPE_SNAPPABLE_POSITIONS,
}
