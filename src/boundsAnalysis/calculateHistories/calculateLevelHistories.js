const {calculateExtendedHistories} = require("./calculateExtendedHistories")
const {isHistoryImpossible} = require("../utilities/isHistoryImpossible")
const {calculateOverriddenHistory} = require("./calculateOverriddenHistory")

const calculateLevelHistories = (histories, level, bound) => {
    const {position: actualBoundPosition} = bound

    let levelHistories = []

    histories.forEach(history => {
        const extendedHistories = calculateExtendedHistories(history, level, actualBoundPosition)
        levelHistories = levelHistories.concat(extendedHistories)
    })

    if (levelHistories.every(({events}) => isHistoryImpossible(events))) {
        const overriddenHistory = calculateOverriddenHistory(bound, level)
        const extendedHistories = calculateExtendedHistories(overriddenHistory, level, actualBoundPosition)
        levelHistories = levelHistories.concat(extendedHistories)
    }

    return levelHistories
}

module.exports = {
    calculateLevelHistories,
}
