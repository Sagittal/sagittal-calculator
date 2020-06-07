const {LEVELS} = require("../data/levels")
const {RANKS} = require("../data/ranks")

const ZERO_INDEX_OFFSET = 1
const OFFSET_FOR_INITIAL_RANK = 1

const calculateScoreIndex = (rank, levelIndex) => {
    return (rank - OFFSET_FOR_INITIAL_RANK) * LEVELS.length + (LEVELS.length - ZERO_INDEX_OFFSET - levelIndex)
}

const calculateScore = analyzedHistories => {
    const scoreThing = [...Array((Object.keys(RANKS).length - OFFSET_FOR_INITIAL_RANK) * LEVELS.length).keys()].map(n => 0)

    analyzedHistories.forEach(analyzedHistory => {
        const scoreThingIndex = calculateScoreIndex(analyzedHistory.rank, LEVELS.indexOf(analyzedHistory.level))

        scoreThing[scoreThingIndex] += 1
    })

    return scoreThing.reduce((score, scoreThingElement, index) => {
        return score + scoreThingElement * Math.pow(2, index)
    }, 0)
}

module.exports = {
    calculateScore,
    calculateScoreIndex,
}
