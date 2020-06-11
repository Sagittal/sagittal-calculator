const {computeIsWithinHalfLevelEda} = require("../plot/isWithinHalfLevelEda")
const {computeLevelRank} = require("./levelRank")
const {computeIsCloseTo} = require("../utilities/isCloseTo")
const {RANKS} = require("../data/ranks")

const analyzeEvents = (history, actualBoundPosition) => {
    return history.map((event, index) => {
        const {level, type, position} = event
        const exact = computeIsCloseTo(position, actualBoundPosition)

        if (index === 0) {
            return {
                ...event,
                rank: RANKS[event.type],
                exact,
            }
        }

        const previousEvent = history[index - 1]
        const withinHalfLevelEda = computeIsWithinHalfLevelEda(level, position, previousEvent.position)

        const rank = computeLevelRank(type, withinHalfLevelEda)

        return {
            ...event,
            rank,
            exact,
        }
    })
}

module.exports = {
    analyzeEvents,
}
