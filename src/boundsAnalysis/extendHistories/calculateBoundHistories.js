const {extendHistories} = require("./extendHistories")

const calculateBoundHistories = bound => {
    const {position, levels} = bound

    const initialHistory = {events: [], position}
    let histories = [initialHistory]
    levels.forEach(level => {
        histories = extendHistories(histories, level, position)
    })

    return histories
}

module.exports = {
    calculateBoundHistories,
}
