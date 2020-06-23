const {RANKS} = require("./ranks")
const {LEVELS} = require("../../notations/ji/levels")

const BINARY_SCORE_REPRESENTATION_CARDINALITY = Object.keys(RANKS).length * LEVELS.length // 15

const computeBinaryScoreRepresentationIndex = (rank, levelIndex) => {
    return rank * LEVELS.length + (LEVELS.length - 1 - levelIndex)
}

module.exports = {
    BINARY_SCORE_REPRESENTATION_CARDINALITY,
    computeBinaryScoreRepresentationIndex,
}
