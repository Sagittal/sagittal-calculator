const {RANKS} = require("../data/ranks")
const {computeIsCloseTo} = require("../utilities/isCloseTo")

const analyzeEvents = (history, actualBoundPosition) => {
    return history.map((event, index) => {
        const {position, type} = event
        const exact = computeIsCloseTo(position, actualBoundPosition)
        const rank = RANKS[type]
        const distance = Math.abs(index === 0 ? 0 : history[index - 1].position - event.position) // TODO: extract

        return {
            ...event,
            rank,
            exact,
            distance,
        }
    })
}

module.exports = {
    analyzeEvents,
}
