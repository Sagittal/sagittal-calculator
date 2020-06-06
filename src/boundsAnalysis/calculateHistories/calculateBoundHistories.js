const {calculateLevelHistories} = require("./calculateLevelHistories")
const {calculateInitialHistory} = require("./calculateInitialHistory")

const calculateBoundHistories = bound => {
    const {levels} = bound

    const initialHistory = calculateInitialHistory(bound)

    let histories = [initialHistory]
    levels.forEach(level => {
        histories = calculateLevelHistories(histories, level, bound)
    })

    return histories
}

module.exports = {
    calculateBoundHistories,
}
