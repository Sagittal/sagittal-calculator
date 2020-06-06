const {structureHistories} = require("./structureHistories")
const {analyzeHistory} = require("./analyzeHistory")
const {calculateMinimumError} = require("./calculateMinimumError")
const {calculateBestPossibleHistories} = require("./calculateBestPossibleHistories")
const {BOUNDED_COMMAS} = require("../data/boundedCommas")
const {rankBounds, rankSummary} = require("./rankSummary")

const analyzeAndStructureHistories = (histories, {bound, comma}, datumIndex) => {
    const {position} = bound
    const {symbol: extremeLevelLesserNeighborCommaSymbol, mina} = comma

    const analyzedHistories = histories.map(history => analyzeHistory(history, position))

    const possibleHistories = analyzedHistories.filter(analyzedHistory => analyzedHistory.possible).length
    const bestPossibleHistories = calculateBestPossibleHistories(analyzedHistories)
    const bestRank = bestPossibleHistories[0].rank
    const minimumError = calculateMinimumError(analyzedHistories)
    const totalHistories = analyzedHistories.length
    const structuredHistories = structureHistories(analyzedHistories)
    const boundedCommas = BOUNDED_COMMAS[position]

    rankSummary[bestRank] += 1
    rankBounds[bestRank].push(datumIndex)

    return {
        bound: {
            extremeLevelLesserNeighborCommaSymbol,
            position,
            boundedCommas,
            minaUpperBoundOf: mina,
        },
        bestPossibleHistories,
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
