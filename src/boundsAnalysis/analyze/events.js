const {computeLevelRank} = require("./levelRank")
const {computeIsCloseTo} = require("../utilities/isCloseTo")

const analyzeEvents = (history, actualBoundPosition) => {
    return history.map((event, index) => {
        const exact = computeIsCloseTo(event.position, actualBoundPosition)
        const rank = computeLevelRank(event, index, history)

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
