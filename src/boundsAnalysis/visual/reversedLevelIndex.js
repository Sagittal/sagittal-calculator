const {LEVELS} = require("../data/levels")

const ZERO_INDEX_OFFSET = 1

const computeReversedLevelIndex = levelIndex => LEVELS.length - ZERO_INDEX_OFFSET - levelIndex

module.exports = {
    computeReversedLevelIndex,
}
