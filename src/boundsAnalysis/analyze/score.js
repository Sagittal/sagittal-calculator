const {LEVELS} = require("../data/levels")
const {RANKS} = require("../data/ranks")

const ZERO_INDEX_OFFSET = 1
const OFFSET_FOR_INITIAL_RANK = 1

const computeBinaryScoreRepresentationIndex = (rank, levelIndex) => {
    return (rank - OFFSET_FOR_INITIAL_RANK) * LEVELS.length + (LEVELS.length - ZERO_INDEX_OFFSET - levelIndex)
}

const computeScore = analyzedHistories => {
    const binaryScoreRepresentationCardinality = (Object.keys(RANKS).length - OFFSET_FOR_INITIAL_RANK) * LEVELS.length
    const binaryScoreRepresentation = [...Array(binaryScoreRepresentationCardinality).keys()].map(_ => 0)

    analyzedHistories.forEach(analyzedHistory => {
        const binaryScoreRepresentationIndex = computeBinaryScoreRepresentationIndex(analyzedHistory.rank, LEVELS.indexOf(analyzedHistory.level))

        binaryScoreRepresentation[binaryScoreRepresentationIndex] += 1
    })

    return binaryScoreRepresentation.reduce(
        (score, binaryScoreRepresentationTerm, index) => {
            return score + binaryScoreRepresentationTerm * Math.pow(2, index)
        },
        0,
    )
}

module.exports = {
    computeScore,
    computeBinaryScoreRepresentationIndex,
}
