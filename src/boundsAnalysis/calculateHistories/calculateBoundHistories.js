const {calculateLevelHistories} = require("./calculateLevelHistories")

const calculateBoundHistories = bound => {
    const {position, levels} = bound // TODO: yeah almost certain this is wrong, starting it at the assumed final bound. it should really start at the comma mean

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
