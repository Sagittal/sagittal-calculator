const {LEVELS} = require("../data/levels")
const {computeBinaryScoreRepresentationIndex, BINARY_SCORE_REPRESENTATION_CARDINALITY} = require("./binaryScoreRepresentationCardinality")

const computeScore = analyzedHistories => {
    const binaryScoreRepresentation = [...Array(BINARY_SCORE_REPRESENTATION_CARDINALITY).keys()].map(_ => 0)

    analyzedHistories.forEach(analyzedHistory => {
        const binaryScoreRepresentationIndex = computeBinaryScoreRepresentationIndex(
            analyzedHistory.rank,
            LEVELS.indexOf(analyzedHistory.level)
        )

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
