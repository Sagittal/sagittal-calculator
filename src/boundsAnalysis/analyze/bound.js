const {computeStructuredHistories} = require("./structuredHistories")
const {analyzeHistory} = require("./history")
const {computeBestPossibleHistory} = require("./bestPossibleHistory")
const {BOUNDED_COMMAS} = require("../data/boundedCommas")
const {TINA} = require("../data/intervals")
const rankAnalysis = require("./ranks")
const levelAnalysis = require("./levels")
const {computeInitialPosition} = require("../data/initialPosition")

const analyzeBound = (histories, bound, boundIndex) => {
    const {position} = bound
    const boundedCommas = BOUNDED_COMMAS[boundIndex]
    const extremeBoundedCommas = boundedCommas["EXTREME"]
    const [lesserBoundedComma, greaterBoundedComma] = extremeBoundedCommas

    const initialPosition = computeInitialPosition(bound)
    const analyzedHistories = histories.map(history => analyzeHistory(history, bound, initialPosition))

    const possibleHistories = analyzedHistories.filter(analyzedHistory => analyzedHistory.possible)
    const possibleHistoryCount = possibleHistories.length
    const bestPossibleHistory = computeBestPossibleHistory(possibleHistories)
    const bestRank = bestPossibleHistory.rank
    const initialPositionTinaDifference = (position - initialPosition) / TINA

    rankAnalysis.updateRankAnalysis(bestRank, boundIndex)
    levelAnalysis.updateLevelAnalysis(bestPossibleHistory)

    const structuredHistories = computeStructuredHistories(analyzedHistories)

    return {
        bound: {
            extremeLevelLesserBoundedCommaSymbol: lesserBoundedComma ? lesserBoundedComma.symbol : "",
            extremeLevelGreaterBoundedCommaSymbol: greaterBoundedComma ? greaterBoundedComma.symbol : "",
            position,
            boundedCommas,
            lesserBoundedMina: lesserBoundedComma ? lesserBoundedComma.mina : "",
            greaterBoundedMina: greaterBoundedComma && greaterBoundedComma.mina,
        },
        analysis: {
            initialPosition,
            possibleHistoryCount,
            bestPossibleHistory,
            bestRank,
            initialPositionTinaDifference,
            structuredHistories,
        },
    }
}

module.exports = {
    analyzeBound,
}
