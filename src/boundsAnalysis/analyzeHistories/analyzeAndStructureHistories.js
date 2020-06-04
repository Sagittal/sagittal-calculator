const {structureHistories} = require("./structureHistories")
const {analyzeHistory} = require("./analyzeHistory")
const {calculateMinimumError} = require("./calculateMinimumError")
const {calculateHasPossibleNonoverriddenHistory} = require("./calculateHasPossibleNonoverriddenHistory")
const {calculateBoundedCommas} = require("../utilities/calculateBoundedCommas")

const analyzeAndStructureHistories = (histories, {bound, comma}) => {
    const {position} = bound
    const {symbol: extremeLevelLesserNeighborCommaSymbol, mina} = comma

    const analyzedHistories = histories.map(history => analyzeHistory(history, position))

    const possibleHistories = analyzedHistories.filter(analyzedHistory => analyzedHistory.possible).length
    const hasPossibleNonoverriddenHistory = calculateHasPossibleNonoverriddenHistory(analyzedHistories)
    const minimumError = calculateMinimumError(analyzedHistories)
    const totalHistories = analyzedHistories.length
    const structuredHistories = structureHistories(analyzedHistories)
    const boundedCommas = calculateBoundedCommas(bound)

    return {
        bound: {
            extremeLevelLesserNeighborCommaSymbol,
            position,
            boundedCommas,
            minaUpperBoundOf: mina,
        },
        analysis: {
            hasPossibleNonoverriddenHistory,
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