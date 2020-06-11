const {computeIsPositionBetweenPositions} = require("./isPositionBetweenPositions")
const {computeBoundedCommaPositions} = require("../data/boundedCommaPositions")
const {computeEvents} = require("./events")
const {computeImpossibleEvent} = require("./impossibleEvent")
const {computeIsHistoryImpossible} = require("./isHistoryImpossible")
const {computeHistoryPosition} = require("../utilities/historyPosition")
const {computeOverrideEvent} = require("./overrideEvent")
const {LEVELS} = require("../data/levels")

const computeExtendedHistories = (history, level, bound) => {
    const extendedHistories = []

    const position = computeHistoryPosition(history)

    if (computeIsHistoryImpossible(history)) {
        extendedHistories.push(history)
        return extendedHistories
    }

    const boundedCommaPositions = computeBoundedCommaPositions(bound.position, level)

    if (!computeIsPositionBetweenPositions(position, boundedCommaPositions)) {
        const impossibleEvent = computeImpossibleEvent(position, level, boundedCommaPositions)
        const impossibleToExtendHistory = history.concat(impossibleEvent)
        extendedHistories.push(impossibleToExtendHistory)

        return extendedHistories
    }

    const newEvents = [
        ...computeEvents(level, boundedCommaPositions, "EDA", position),
        ...computeEvents(level, boundedCommaPositions, "MEAN", position),
        ...computeEvents(level, boundedCommaPositions, "SIZE", position),
    ]

    newEvents.forEach(event => {
        const extendedHistory = history.concat(event)
        extendedHistories.push(extendedHistory)
    })

    if (level !== LEVELS[LEVELS.length - 1]) {
        const overrideEvent = computeOverrideEvent(level, bound)
        const extendedHistory = history.concat(overrideEvent)
        extendedHistories.push(extendedHistory)
    }

    return extendedHistories
}

module.exports = {
    computeExtendedHistories,
}
