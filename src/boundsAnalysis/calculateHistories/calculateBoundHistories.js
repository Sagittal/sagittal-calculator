const {calculateLevelHistories} = require("./calculateLevelHistories")
const {calculateInitialPosition} = require("../data/calculateInitialPosition")

const calculateBoundHistories = bound => {
    const {levels} = bound

    const initialPosition = calculateInitialPosition(bound)

    const initialHistory = {
        events: [],
        position: initialPosition,
        rank: 0,
    }
    let histories = [initialHistory]
    levels.forEach(level => {
        histories = calculateLevelHistories(histories, level, bound)
    })

    return histories
}

module.exports = {
    calculateBoundHistories,
}
