const {TINA} = require("../data/intervals")
const {round} = require("../utilities/round")

const ACCURACY_THRESHOLD = 6

const analyzeHistory = (history, bound, initialPosition) => {
    const positionError = history.position - bound.position
    const possible = round(positionError, ACCURACY_THRESHOLD) === 0

    let tinaError = positionError / TINA
    if (Math.abs(tinaError) < Math.pow(10, -ACCURACY_THRESHOLD)) tinaError = 0

    const initialPositionDistance = history.position - initialPosition
    const initialPositionTinaDifference = initialPositionDistance / TINA

    return {
        ...history,
        possible,
        tinaError,
        initialPositionTinaDifference,
    }
}

module.exports = {
    analyzeHistory,
}
