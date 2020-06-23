const {computeInaMidpoints} = require("../../notations/ji/inaMidpoints")
const {computeLevelCommaMeans} = require("../../notations/ji/levelCommaMeans")
const {computeSizeCategoryBounds} = require("../../notations/ji/sizeCategoryBounds")
const {LEVELS} = require("../../notations/ji/levels")

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
