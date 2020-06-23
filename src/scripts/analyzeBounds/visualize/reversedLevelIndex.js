const {LEVELS} = require("../../../notations/ji/levels")

const computeReversedLevelIndex = levelIndex => LEVELS.length - 1 - levelIndex

module.exports = {
    computeReversedLevelIndex,
}
