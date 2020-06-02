const {calculateEdaMidpoints} = require("./calculateEdaMidpoints")
const {calculateLevelCommaMeans} = require("./calculateLevelCommaMeans")
const {calculateSizeCategoryBounds} = require("./calculateSizeCategoryBounds")
const {LEVELS} = require("./levels")

const calculateSnappablePositions = (calculateLevelSnappablePositions) => {
    return LEVELS.reduce(
        (snappablePositions, level) => {
            return {
                ...snappablePositions,
                [level]: calculateLevelSnappablePositions(level),
            }
        },
        {},
    )
}

const LEVEL_EDA_MIDPOINTS = calculateSnappablePositions(calculateEdaMidpoints)
const LEVEL_COMMA_MEANS = calculateSnappablePositions(calculateLevelCommaMeans)
const LEVEL_SIZE_CATEGORY_BOUNDS = calculateSnappablePositions(calculateSizeCategoryBounds)

module.exports = {
    LEVEL_EDA_MIDPOINTS,
    LEVEL_COMMA_MEANS,
    LEVEL_SIZE_CATEGORY_BOUNDS,
}
