const {computeConsolidatedHistories} = require("./consolidatedHistories")
const {analyzeHistory} = require("./history")
const {computeBestPossibleHistory} = require("./bestPossibleHistory")
const {TINA} = require("../data/intervals")
const rankAnalysis = require("./ranks")
const levelAnalysis = require("./levels")
const {computeInitialPosition} = require("../data/initialPosition")
// const {INA_SIZES} = require("../data/intervals")

const analyzeBound = (histories, bound, boundIndex) => {
    const initialPosition = computeInitialPosition(bound)
    const analyzedHistories = histories.map(history => analyzeHistory(history, bound, initialPosition))

    const possibleHistories = analyzedHistories.filter(analyzedHistory => analyzedHistory.possible)
    const possibleHistoryCount = possibleHistories.length
    const bestPossibleHistory = computeBestPossibleHistory(possibleHistories)
    const bestRank = bestPossibleHistory.rank

    const initialPositionTinaDifference = (bound.position - initialPosition) / TINA

    // TODO: deal with > half-ina issues
    // bestPossibleHistory.events.forEach((event, index) => {
    //     if (index === 0) return
    //     const previousEvent = bestPossibleHistory.events[index - 1]
    //     const positionChange = event.position - previousEvent.position
    //     const inaChange = positionChange / INA_SIZES[event.level]
    //     console.log(Math.abs(inaChange).toPrecision(5), event.level)
    // })

    rankAnalysis.updateRankAnalysis(bestRank, boundIndex)
    levelAnalysis.updateLevelAnalysis(bestPossibleHistory)

    const consolidatedHistories = computeConsolidatedHistories(analyzedHistories, bestPossibleHistory)

    return {
        initialPosition,
        possibleHistoryCount,
        bestPossibleHistory,
        bestRank,
        initialPositionTinaDifference,
        consolidatedHistories,
    }
}

module.exports = {
    analyzeBound,
}
