const {LEVELS} = require("../../../notations/ji/levels")

const extractLevelRanks = analyzedHistory => {
    return LEVELS.map(level => {
        const levelEvent = analyzedHistory.events.find(event => event.level === level)

        return levelEvent ? levelEvent.rank : " "
    })
}

module.exports = {
    extractLevelRanks,
}
