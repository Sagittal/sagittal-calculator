const {computeConsolidatedHistories} = require("./consolidatedHistories")
const {analyzeHistory} = require("./history")
const {computeBestPossibleHistory} = require("./bestPossibleHistory")
const {TINA} = require("../data/intervals")
const rankAnalysis = require("./ranks")
const levelAnalysis = require("./levels")
const {computeInitialPosition} = require("../data/initialPosition")

const analyzeBound = (histories, bound) => {
    const initialPosition = computeInitialPosition(bound)
    const analyzedHistories = histories.map(history => analyzeHistory(history, bound, initialPosition))

    const possibleHistories = analyzedHistories.filter(analyzedHistory => analyzedHistory.possible)
    const possibleHistoryCount = possibleHistories.length
    const bestPossibleHistory = computeBestPossibleHistory(possibleHistories)
    const bestRank = bestPossibleHistory.rank
    const bestPossibleHistoryDistance = bestPossibleHistory.distance

    const initialPositionTinaDifference = (bound.position - initialPosition) / TINA

    rankAnalysis.updateRankAnalysis(bestRank, bound.id)
    levelAnalysis.updateLevelAnalysis(bestPossibleHistory)

    const consolidatedHistories = computeConsolidatedHistories(analyzedHistories, bestPossibleHistory)

    return {
        initialPosition,
        possibleHistoryCount,
        bestPossibleHistory,
        bestRank,
        bestPossibleHistoryDistance,
        initialPositionTinaDifference,
        consolidatedHistories,
    }
}

module.exports = {
    analyzeBound,
}
