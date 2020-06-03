const {calculateExtendedHistories} = require("./calculateExtendedHistories")
const {isHistoryImpossible} = require("../utilities/isHistoryImpossible")
const {calculateBoundPreviousLevel} = require("../utilities/calculateBoundPreviousLevel")

const calculateLevelHistories = (histories, level, bound) => {
    const {position: actualBoundPosition} = bound

    let levelHistories = []

    histories.forEach(history => {
        const extendedHistories = calculateExtendedHistories(history, level, actualBoundPosition)
        levelHistories = levelHistories.concat(extendedHistories)
    })

    if (levelHistories.every(({events}) => isHistoryImpossible(events))) {
        const previousLevel = calculateBoundPreviousLevel(bound, level)
        const overriddenHistory = {
            position: actualBoundPosition,
            overridden: true,
            events: [
                {
                    level: previousLevel,
                    type: "override",
                    name: "override",
                    position: actualBoundPosition,
                },
            ],
        }
        const extendedHistories = calculateExtendedHistories(overriddenHistory, level, actualBoundPosition)
        levelHistories = levelHistories.concat(extendedHistories)
    }

    return levelHistories
}

module.exports = {
    calculateLevelHistories,
}
