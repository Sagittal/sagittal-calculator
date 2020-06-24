const {LEVELS} = require("../../../notations/ji/levels")
const {presentNumber} = require("./number")
const {alignFormattedNumber} = require("./alignFormattedNumber")

const extractLevelInaDistances = analyzedHistory => {
    const events = analyzedHistory.events

    return LEVELS.slice(0, LEVELS.length - 1).map(level => {
        const previousEventIndex = events.findIndex(event => event.level === level)
        if (previousEventIndex === -1) return " "
        const levelEvent = events[previousEventIndex + 1]

        return alignFormattedNumber(presentNumber(levelEvent.inaDistance))
    })
}

module.exports = {
    extractLevelInaDistances,
}
