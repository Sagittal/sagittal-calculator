const {LEVELS} = require("../data/levels")

const computeReversedLevelIndex = levelIndex => LEVELS.length - 1 - levelIndex

module.exports = {
    computeReversedLevelIndex,
}
