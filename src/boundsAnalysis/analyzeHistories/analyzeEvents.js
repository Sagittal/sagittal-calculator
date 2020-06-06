const {calculateWithinHalfLevelEda} = require("../calculateHistories/calculateWithinHalfLevelEda")
const {calculateLevelRank} = require("./calculateLevelRank")
const {RANKS} = require("../data/ranks")

const analyzeEvents = history => {
    return history.map((event, index) => {
        if (index === 0) {
            return {
                ...event,
                rank: RANKS[event.type],
            }
        }

        const previousEvent = history[index - 1]
        const {level, type, position} = event
        const withinHalfLevelEda = calculateWithinHalfLevelEda(level, position, previousEvent.position)

        const rank = calculateLevelRank(type, withinHalfLevelEda)

        return {
            ...event,
            rank,
        }
    })
}

module.exports = {
    analyzeEvents,
}
