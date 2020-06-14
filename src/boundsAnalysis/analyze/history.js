const {TINA} = require("../data/intervals")
const {computeIsCloseTo} = require("../utilities/isCloseTo")
const {computeHistoryPosition} = require("./historyPosition")
const {computeRank} = require("./rank")
const {computeExact} = require("./exact")
const {analyzeEvents} = require("./events")
const {computeScore} = require("./score")
const {computeDistance} = require("./distance")

const analyzeHistory = (history, bound, initialPosition) => {
    const position = computeHistoryPosition(history)

    const analyzedEvents = analyzeEvents(history, bound.position)
    const rank = computeRank(analyzedEvents)
    const score = computeScore(analyzedEvents)
    const exact = computeExact(analyzedEvents)
    const distance = computeDistance(analyzedEvents)

    const positionError = position - bound.position
    const possible = computeIsCloseTo(positionError, 0)

    let tinaError = positionError / TINA
    if (computeIsCloseTo(tinaError, 0)) tinaError = 0

    const initialPositionDistance = position - initialPosition
    const initialPositionTinaDifference = initialPositionDistance / TINA

    return {
        events: analyzedEvents,
        position,
        rank,
        score,
        distance,
        exact,
        possible,
        tinaError,
        initialPositionTinaDifference,
    }
}

module.exports = {
    analyzeHistory,
}
