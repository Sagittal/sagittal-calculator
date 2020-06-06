const {structureHistories} = require("./structureHistories")
const {analyzeHistory} = require("./analyzeHistory")
const {calculateMinimumInitialPositionTinaDistance} = require("./calculateMinimumInitialPositionTinaDistance")
const {calculateBestPossibleHistories} = require("./calculateBestPossibleHistories")
const {BOUNDED_COMMAS} = require("../data/boundedCommas")
const {rankBounds, rankSummary} = require("./rankSummary")
const {calculateInitialPosition} = require("../data/calculateInitialPosition")

const analyzeAndStructureHistories = (histories, {bound, comma}, datumIndex) => {
    const {position} = bound
    const {symbol: extremeLevelLesserNeighborCommaSymbol, mina} = comma

    const initialPosition = calculateInitialPosition(bound)

    const analyzedHistories = histories.map(history => analyzeHistory(history, bound, initialPosition))

    const possibleHistories = analyzedHistories.filter(analyzedHistory => analyzedHistory.possible).length
    const bestPossibleHistories = calculateBestPossibleHistories(analyzedHistories)
    const bestRank = bestPossibleHistories[0].rank
    const minimumInitialPositionTinaDistance = calculateMinimumInitialPositionTinaDistance(analyzedHistories)
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
            minimumInitialPositionTinaDistance,
            initialPosition,
            totalHistories,
            possibleHistories,
        },
        structuredHistories,
    }
}

module.exports = {
    analyzeAndStructureHistories,
}
