const {RANKS} = require("../data/ranks")
const {computeBoundedCommaPositions} = require("../data/boundedCommaPositions")
const {computeEvents} = require("../plot/events")
const {computeIsWithinHalfLevelEda} = require("./isWithinHalfLevelEda")

const computeLevelRank = (event, index, history) => {
    const {type, level, position} = event

    // Note: this whole bit is theoretical; these events do get calculated but none make any difference
    // in terms of the structured histories or the best possible history.
    if (type === "EDA") {
        const boundedCommaPositions = computeBoundedCommaPositions(position, level)
        const events = computeEvents(level, boundedCommaPositions, "EDA", position)
        if (events.length > 1) {
            const previousEvent = history[index - 1]
            if (!computeIsWithinHalfLevelEda(level, position, previousEvent.position)) {
                return RANKS["NOT_NEAREST_EDA"]
            }
        }
    }

    return RANKS[type]
}

module.exports = {
    computeLevelRank,
}
