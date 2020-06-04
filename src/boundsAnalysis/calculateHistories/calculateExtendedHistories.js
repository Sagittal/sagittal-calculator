const {isPositionBetweenPositions} = require("../utilities/isPositionBetweenPositions")
const {calculateNeighborCommaPositions} = require("../utilities/calculateNeighborCommaPositions")
const {calculateEvents} = require("./calculateEvents")
const {extendHistory} = require("./extendHistory")
const {calculateImpossibleEvent} = require("./calculateImpossibleEvent")
const {isHistoryImpossible} = require("../utilities/isHistoryImpossible")

const calculateExtendedHistories = (history, level, actualBoundPosition) => {
    const extendedHistories = []

    const {events, position} = history

    if (isHistoryImpossible(events)) {
        extendedHistories.push(history)
        return extendedHistories
    }

    const neighborCommaPositions = calculateNeighborCommaPositions(actualBoundPosition, level)

    if (!isPositionBetweenPositions(position, neighborCommaPositions)) {
        const impossibleEvent = calculateImpossibleEvent(position, level, neighborCommaPositions)
        const impossibleToExtendHistory = extendHistory(history, impossibleEvent)
        extendedHistories.push(impossibleToExtendHistory)
        return extendedHistories
    }

    const newEvents = [
        ...calculateEvents(level, neighborCommaPositions, "EDA"),
        ...calculateEvents(level, neighborCommaPositions, "MEAN"),
        ...calculateEvents(level, neighborCommaPositions, "SIZE"),
    ]

    newEvents.forEach(event => {
        const extendedHistory = extendHistory(history, event)
        extendedHistories.push(extendedHistory)
    })

    return extendedHistories
}

module.exports = {
    calculateExtendedHistories,
}
