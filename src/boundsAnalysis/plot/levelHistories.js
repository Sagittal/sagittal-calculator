const {computeExtendedHistories} = require("./extendedHistories")

const computeLevelHistories = (histories, level, bound) => {
    let levelHistories = []

    histories.forEach(history => {
        const extendedHistories = computeExtendedHistories(history, level, bound)
        levelHistories = levelHistories.concat(extendedHistories)
    })

    return levelHistories
}

module.exports = {
    computeLevelHistories,
}
