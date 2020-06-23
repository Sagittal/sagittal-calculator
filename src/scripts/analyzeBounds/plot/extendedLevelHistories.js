const {computeExtendedHistories} = require("./extendedHistories")

const computeExtendedLevelHistories = (histories, level, bound) => {
    let extendedLevelHistories = []

    histories.forEach(history => {
        const extendedHistories = computeExtendedHistories(history, level, bound)
        extendedLevelHistories = extendedLevelHistories.concat(extendedHistories)
    })

    return extendedLevelHistories
}

module.exports = {
    computeExtendedLevelHistories,
}
