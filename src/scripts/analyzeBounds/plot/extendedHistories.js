const {computeBoundedSymbolPositions} = require("../../../notations/ji/boundedSymbolPositions")
const {computeEvents} = require("./events")

const computeExtendedHistories = (history, level, bound) => {
    const extendedHistories = []

    const boundedCommaPositions = computeBoundedSymbolPositions(bound.position, level)

    const newEvents = [
        ...computeEvents(level, boundedCommaPositions, "INA"),
        ...computeEvents(level, boundedCommaPositions, "MEAN"),
        ...computeEvents(level, boundedCommaPositions, "SIZE"),
    ]

    newEvents.forEach(event => {
        const extendedHistory = history.concat(event)
        extendedHistories.push(extendedHistory)
    })

    return extendedHistories
}

module.exports = {
    computeExtendedHistories,
}
