const {structureHistories} = require("./structureHistories")
const {analyzeHistory} = require("./analyzeHistory")
const {calculateBestPossibleHistories} = require("./calculateBestPossibleHistories")
const {BOUNDED_COMMAS} = require("../data/boundedCommas")
const {TINA} = require("../data/intervals")
const rankSummary = require("./rankSummary")
const {calculateInitialPosition} = require("../data/calculateInitialPosition")

const analyzeAndStructureHistories = (histories, {bound, comma}, datumIndex) => {
    const {symbol: extremeLevelLesserNeighborCommaSymbol, mina} = comma
    const {position} = bound
    const boundedCommas = BOUNDED_COMMAS[datumIndex]

    const initialPosition = calculateInitialPosition(bound)
    const analyzedHistories = histories.map(history => analyzeHistory(history, bound, initialPosition))
    const possibleHistories = analyzedHistories.filter(analyzedHistory => analyzedHistory.possible)
    const possibleHistoryCount = possibleHistories.length
    const bestPossibleHistories = calculateBestPossibleHistories(possibleHistories)
    const bestRank = bestPossibleHistories[0].rank
    const initialPositionTinaDifference = (position - initialPosition) / TINA

    rankSummary.updateRankSummary(bestRank, datumIndex)

    const structuredHistories = structureHistories(analyzedHistories)

    return {
        bound: {
            extremeLevelLesserNeighborCommaSymbol,
            position,
            boundedCommas,
            minaUpperBoundOf: mina,
        },
        analysis: {
            initialPosition,
            possibleHistoryCount,
            bestPossibleHistories,
            bestRank,
            initialPositionTinaDifference,
        },
        structuredHistories,
    }
}

module.exports = {
    analyzeAndStructureHistories,
}
