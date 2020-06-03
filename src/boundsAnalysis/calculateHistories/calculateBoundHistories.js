const {calculateLevelHistories} = require("./calculateLevelHistories")

const calculateBoundHistories = bound => {
    const {position, levels} = bound

    const initialHistory = {events: [], position}
    let histories = [initialHistory]
    levels.forEach(level => {
        histories = calculateLevelHistories(histories, level, bound)
    })

    return histories
}

module.exports = {
    calculateBoundHistories,
}
