const {isPositionOutsideActualBoundNeighborCommaRange} = require("../utilities/isPositionOutsideActualBoundNeighborCommaRange")
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

    if (isPositionOutsideActualBoundNeighborCommaRange(position, actualBoundPosition, level)) {
        extendedHistories.push(extendHistory(history, calculateImpossibleEvent(position, level)))
        return extendedHistories
    }

    const neighborCommaPositions = calculateNeighborCommaPositions(position, level)

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
