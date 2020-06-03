const {isPositionOutsideActualBoundNeighborCommaRange} = require("../utilities/isPositionOutsideActualBoundNeighborCommaRange")
const {calculateNeighborCommaPositions} = require("../utilities/calculateNeighborCommaPositions")
const {calculateEvents} = require("./calculateEvents")
const {extendHistory} = require("./extendHistory")
const {calculateImpossibleEvent} = require("./calculateImpossibleEvent")
const {isHistoryImpossible} = require("../utilities/isHistoryImpossible")

const calculateExtendedHistories = (history, level, actualBoundPosition) => {
    const extendedHistories = []

    const {events, position} = history

    if (isHistoryImpossible(events)) { // TODO: maybe,since we're alreayd dealing with isHistoryImpossible one layer up, we should just not go in here in the first place for impossible histories? also, its called isHIOSTRYimpossible but you pass in events
        extendedHistories.push(history)
        return extendedHistories
    }

    if (isPositionOutsideActualBoundNeighborCommaRange(position, actualBoundPosition, level)) {
        const impossibleEvent = calculateImpossibleEvent(position, level)
        const impossibleToExtendHistory = extendHistory(history, impossibleEvent)
        extendedHistories.push(impossibleToExtendHistory)
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
