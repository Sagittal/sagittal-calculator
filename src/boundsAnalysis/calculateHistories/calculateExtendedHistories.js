const {isPositionBetweenPositions} = require("../utilities/isPositionBetweenPositions")
const {calculateNeighborCommaPositions} = require("../data/calculateNeighborCommaPositions")
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

    const neighborCommaPositions = calculateNeighborCommaPositions(actualBoundPosition, level)

    if (!isPositionBetweenPositions(position, neighborCommaPositions)) {
        const impossibleEvent = calculateImpossibleEvent(position, level, neighborCommaPositions)
        const impossibleToExtendHistory = history.concat(impossibleEvent)
        extendedHistories.push(impossibleToExtendHistory)

        return extendedHistories
    }

    const newEvents = [
        ...calculateEvents(level, neighborCommaPositions, "EDA", position),
        ...calculateEvents(level, neighborCommaPositions, "MEAN", position),
        ...calculateEvents(level, neighborCommaPositions, "SIZE", position),
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
