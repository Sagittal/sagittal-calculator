const {structureHistories} = require("./structureHistories")
const {analyzeHistory} = require("./analyzeHistory")
const {calculateBestPossibleHistory} = require("./calculateBestPossibleHistories")
const {BOUNDED_COMMAS} = require("../data/boundedCommas")
const {TINA} = require("../data/intervals")
const rankSummary = require("./rankSummary")
const levelSummary = require("./levelSummary")
const {calculateInitialPosition} = require("../data/calculateInitialPosition")

const analyzeAndStructureHistories = (histories, bound, boundIndex) => {
    const {position} = bound
    const boundedCommas = BOUNDED_COMMAS[boundIndex]
    const extremeBoundedCommas = boundedCommas["EXTREME"]
    const [lesserBoundedComma, greaterBoundedComma] = extremeBoundedCommas

    const initialPosition = calculateInitialPosition(bound)
    const analyzedHistories = histories.map(history => analyzeHistory(history, bound, initialPosition))

    const possibleHistories = analyzedHistories.filter(analyzedHistory => analyzedHistory.possible)
    const possibleHistoryCount = possibleHistories.length
    const bestPossibleHistory = calculateBestPossibleHistory(possibleHistories)
    const bestRank = bestPossibleHistory.rank
    const initialPositionTinaDifference = (position - initialPosition) / TINA

    rankSummary.updateRankSummary(bestRank, boundIndex)
    levelSummary.updateLevelSummary(bestPossibleHistory)

    const structuredHistories = structureHistories(analyzedHistories)

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
        },
        structuredHistories,
    }
}

module.exports = {
    analyzeAndStructureHistories,
}
