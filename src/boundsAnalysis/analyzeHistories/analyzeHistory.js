const {TINA} = require("../data/intervals")
const {round} = require("../utilities/round")

const ACCURACY_THRESHOLD = 6

const analyzeHistory = (history, bound, initialPosition) => {
    const positionError = history.position - bound.position
    const possible = round(positionError, ACCURACY_THRESHOLD) === 0
    const tinaError = round(positionError / TINA, ACCURACY_THRESHOLD)

    const initialPositionDistance = history.position - initialPosition
    const initialPositionTinaDistance = round(initialPositionDistance / TINA, ACCURACY_THRESHOLD)

    return {
        ...history,
        possible,
        tinaError,
        initialPositionTinaDistance,
    }
}

module.exports = {
    analyzeHistory,
}
