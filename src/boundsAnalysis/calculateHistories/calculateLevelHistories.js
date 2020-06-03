const {calculateExtendedHistories} = require('./calculateExtendedHistories')

const calculateLevelHistories = (histories, level, actualBoundPosition) => {
    let levelHistories = []

    histories.forEach(history => {
        const extendedHistories = calculateExtendedHistories(history, level, actualBoundPosition)
        levelHistories = levelHistories.concat(extendedHistories)
    })

    return levelHistories
}

module.exports = {
    calculateLevelHistories,
}
