const {LEVELS} = require("../data/levels")
const {LEVEL_HEIGHT, Y_SCALE, MARGIN} = require("./sizes")
const {computeReversedLevelIndex} = require("./reversedLevelIndex")

const computeLevelHeights = withinLevelHeight => {
    return LEVELS.reduce(
        (levelTops, level, levelIndex) => {
            return {
                ...levelTops,
                [level]: Y_SCALE * (MARGIN + (computeReversedLevelIndex(levelIndex) + withinLevelHeight) * LEVEL_HEIGHT),
            }
        },
        {},
    )
}

const LEVEL_TOPS = computeLevelHeights(0)

const LEVEL_CENTERS = computeLevelHeights(0.5)

const LEVEL_BOTTOMS = computeLevelHeights(1)

module.exports = {
    LEVEL_TOPS,
    LEVEL_CENTERS,
    LEVEL_BOTTOMS,
    computeLevelHeights,
}
