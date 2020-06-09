const {computeExtendedLevelHistories} = require("./extendedLevelHistories")
const {computeInitialHistory} = require("./initialHistory")

const computeHistories = bound => {
    const {levels} = bound

    const initialHistory = computeInitialHistory(bound)

    let histories = [initialHistory]
    levels.forEach(level => {
        histories = computeExtendedLevelHistories(histories, level, bound)
    })

    return histories
}

module.exports = {
    computeHistories,
}
