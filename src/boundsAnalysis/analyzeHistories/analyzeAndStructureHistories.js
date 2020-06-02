const {structureHistories} = require("./structureHistories")
const {analyzeHistory} = require("./analyzeHistory")
const {calculateMinimumError} = require("./calculateMinimumError")

const analyzeAndStructureHistories = (histories, {bound, comma}) => {
    const {position, levels} = bound
    const {symbol: extremeLevelLesserNeighborCommaSymbol, mina} = comma

    const analyzedHistories = histories.map(history => analyzeHistory(history, position))

    const possibleHistories = analyzedHistories.filter(analyzedHistory => analyzedHistory.possible).length
    const hasPossibleHistory = analyzedHistories.some(analyzedHistory => analyzedHistory.possible)
    const minimumError = calculateMinimumError(analyzedHistories)
    const totalHistories = analyzedHistories.length
    const structuredHistories = structureHistories(analyzedHistories)

    return {
        bound: {
            extremeLevelLesserNeighborCommaSymbol,
            position,
            levels,
            minaUpperBoundOf: mina,
        },
        analysis: {
            hasPossibleHistory,
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
