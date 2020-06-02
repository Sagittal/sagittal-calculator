const {TINA} = require("../data/intervals")
const {round} = require("../utilities/round")

const ACCURACY_THRESHOLD = 6

const analyzeHistory = (history, actualBoundPosition) => {
    const positionError = history.position - actualBoundPosition
    const possible = round(positionError, ACCURACY_THRESHOLD) === 0
    const tinaError = round(positionError / TINA, ACCURACY_THRESHOLD)

    return {
        ...history,
        possible,
        tinaError,
    }
}

module.exports = {
    analyzeHistory,
}
