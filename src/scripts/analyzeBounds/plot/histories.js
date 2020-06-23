const {computeExtendedLevelHistories} = require("./extendedLevelHistories")

const computeHistories = bound => {
    const {levels} = bound

    let histories = [[]]
    levels.forEach(level => {
        histories = computeExtendedLevelHistories(histories, level, bound)
    })

    return histories
}

module.exports = {
    computeHistories,
}
