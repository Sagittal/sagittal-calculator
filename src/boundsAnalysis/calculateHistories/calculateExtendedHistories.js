const {isPositionBetweenPositions} = require("../utilities/isPositionBetweenPositions")
const {calculateBoundedCommaPositions} = require("../data/calculateBoundedCommaPositions")
const {calculateEvents} = require("./calculateEvents")
const {calculateImpossibleEvent} = require("./calculateImpossibleEvent")
const {isHistoryImpossible} = require("../utilities/isHistoryImpossible")
const {calculateHistoryPosition} = require("../utilities/calculateHistoryPosition")

const calculateExtendedHistories = (history, level, actualBoundPosition) => {
    const extendedHistories = []

    const position = calculateHistoryPosition(history)

    if (isHistoryImpossible(history)) {
        extendedHistories.push(history)
        return extendedHistories
    }

    const boundedCommaPosition = calculateBoundedCommaPositions(actualBoundPosition, level)

    if (!isPositionBetweenPositions(position, boundedCommaPosition)) {
        const impossibleEvent = calculateImpossibleEvent(position, level, boundedCommaPosition)
        const impossibleToExtendHistory = history.concat(impossibleEvent)
        extendedHistories.push(impossibleToExtendHistory)

        return extendedHistories
    }

    const newEvents = [
        ...calculateEvents(level, boundedCommaPosition, "EDA", position),
        ...calculateEvents(level, boundedCommaPosition, "MEAN", position),
        ...calculateEvents(level, boundedCommaPosition, "SIZE", position),
    ]

    newEvents.forEach(event => {
        const extendedHistory = history.concat(event)
        extendedHistories.push(extendedHistory)
    })

    return extendedHistories
}

module.exports = {
    calculateExtendedHistories,
}
