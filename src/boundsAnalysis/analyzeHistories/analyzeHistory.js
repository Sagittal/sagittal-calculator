const {TINA} = require("../data/intervals")
const {round} = require("../utilities/round")
const {calculateHistoryPosition} = require("../utilities/calculateHistoryPosition")
const {calculateRank} = require("./calculateRank")
const {analyzeEvents} = require("./analyzeEvents")

const ACCURACY_THRESHOLD = 6

const analyzeHistory = (history, bound, initialPosition) => {
    const position = calculateHistoryPosition(history)

    const analyzedEvents = analyzeEvents(history)
    const rank = calculateRank(analyzedEvents)

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
        possible,
        tinaError,
        initialPositionTinaDifference,
    }
}

module.exports = {
    analyzeHistory,
}
