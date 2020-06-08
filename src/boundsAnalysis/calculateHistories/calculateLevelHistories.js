const {calculateExtendedHistories} = require("./calculateExtendedHistories")

const calculateLevelHistories = (histories, level, bound) => {
    let levelHistories = []

    histories.forEach(history => {
        const extendedHistories = calculateExtendedHistories(history, level, bound)
        levelHistories = levelHistories.concat(extendedHistories)
    })

    return levelHistories
}

module.exports = {
    calculateLevelHistories,
}
