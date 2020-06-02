const {isPositionOutsideActualBoundNeighborCommaRange} = require("../utilities/isPositionOutsideActualBoundNeighborCommaRange")
const {calculateNeighborCommaPositions} = require("../utilities/calculateNeighborCommaPositions")
const {calculateExtendedHistories} = require("./calculateExtendedHistories")
const {calculateImpossibleExtendedHistory} = require("./calculateImpossibleExtendedHistory")
const {isHistoryImpossible} = require("../utilities/isHistoryImpossible")

const extendHistories = (histories, level, actualBoundPosition) => {
    const extendedHistories = []

    histories.forEach(history => {
        const {events, position} = history

        if (isHistoryImpossible(events)) {
            extendedHistories.push(history)
            return
        }

        if (isPositionOutsideActualBoundNeighborCommaRange(position, actualBoundPosition, level)) {
            extendedHistories.push(calculateImpossibleExtendedHistory(history, level))
            return
        }

        const neighborCommaPositions = calculateNeighborCommaPositions(position, level)

        calculateExtendedHistories(history, level, neighborCommaPositions, "EDA").forEach(cgmHistory => {
            extendedHistories.push(cgmHistory)
        })

        calculateExtendedHistories(history, level, neighborCommaPositions, "MEAN").forEach(edamHistory => {
            extendedHistories.push(edamHistory)
        })

        calculateExtendedHistories(history, level, neighborCommaPositions, "SIZE").forEach(scbHistory => {
            extendedHistories.push(scbHistory)
        })
    })

    return extendedHistories
}

module.exports = {
    extendHistories,
}
