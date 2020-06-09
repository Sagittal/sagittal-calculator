const {TINA} = require("../data/intervals")
const {round} = require("../utilities/round")
const {computeHistoryPosition} = require("../utilities/historyPosition")
const {computeRank} = require("./rank")
const {analyzeEvents} = require("./events")
const {computeScore} = require("./score")

const ACCURACY_THRESHOLD = 6

const analyzeHistory = (history, bound, initialPosition) => {
    const position = computeHistoryPosition(history)

    const analyzedEvents = analyzeEvents(history)
    const rank = computeRank(analyzedEvents)
    const score = computeScore(analyzedEvents)

    const positionError = position - bound.position
    const possible = round(positionError, ACCURACY_THRESHOLD) === 0

    let tinaError = positionError / TINA
    if (Math.abs(tinaError) < Math.pow(10, -ACCURACY_THRESHOLD)) tinaError = 0

    const initialPositionDistance = position - initialPosition
    const initialPositionTinaDifference = initialPositionDistance / TINA

    return {
        events: analyzedEvents,
        position,
        rank,
        score,
        possible,
        tinaError,
        initialPositionTinaDifference,
    }
}

module.exports = {
    analyzeHistory,
}
