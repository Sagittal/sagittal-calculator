const {computeStructuredHistories} = require("./structuredHistories")
const {analyzeHistory} = require("./history")
const {computeBestPossibleHistory} = require("./bestPossibleHistory")
const {TINA} = require("../data/intervals")
const rankAnalysis = require("./ranks")
const levelAnalysis = require("./levels")
const {computeInitialPosition} = require("../data/initialPosition")

const analyzeBound = (histories, bound, boundIndex) => {
    const initialPosition = computeInitialPosition(bound)
    const analyzedHistories = histories.map(history => analyzeHistory(history, bound, initialPosition))

    const possibleHistories = analyzedHistories.filter(analyzedHistory => analyzedHistory.possible)
    const possibleHistoryCount = possibleHistories.length
    const bestPossibleHistory = computeBestPossibleHistory(possibleHistories)
    const bestRank = bestPossibleHistory.rank
    const initialPositionTinaDifference = (bound.position - initialPosition) / TINA

    rankAnalysis.updateRankAnalysis(bestRank, boundIndex)
    levelAnalysis.updateLevelAnalysis(bestPossibleHistory)

    const structuredHistories = computeStructuredHistories(analyzedHistories)

    return {
        initialPosition,
        possibleHistoryCount,
        bestPossibleHistory,
        bestRank,
        initialPositionTinaDifference,
        structuredHistories,
    }
}

module.exports = {
    analyzeBound,
}
