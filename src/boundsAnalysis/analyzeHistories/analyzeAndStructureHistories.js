const {structureHistories} = require("./structureHistories")
const {analyzeHistory} = require("./analyzeHistory")
const {calculateMinimumError} = require("./calculateMinimumError")
const {calculateBestHistories} = require("./calculateBestHistories")
const {BOUNDED_COMMAS} = require("../data/boundedCommas")
const {rankSummary} = require("./rankSummary")

const analyzeAndStructureHistories = (histories, {bound, comma}) => {
    const {position} = bound
    const {symbol: extremeLevelLesserNeighborCommaSymbol, mina} = comma

    const analyzedHistories = histories.map(history => analyzeHistory(history, position))

    const possibleHistories = analyzedHistories.filter(analyzedHistory => analyzedHistory.possible).length
    const bestHistories = calculateBestHistories(analyzedHistories)
    const bestRank = bestHistories[0].rank
    const minimumError = calculateMinimumError(analyzedHistories)
    const totalHistories = analyzedHistories.length
    const structuredHistories = structureHistories(analyzedHistories)
    const boundedCommas = BOUNDED_COMMAS[position]

    rankSummary[bestRank] += 1

    return {
        bound: {
            extremeLevelLesserNeighborCommaSymbol,
            position,
            boundedCommas,
            minaUpperBoundOf: mina,
        },
        bestHistories,
        analysis: {
            bestRank,
            minimumError,
            totalHistories,
            possibleHistories,
        },
        structuredHistories,
    }
}

module.exports = {
    analyzeAndStructureHistories,
}
