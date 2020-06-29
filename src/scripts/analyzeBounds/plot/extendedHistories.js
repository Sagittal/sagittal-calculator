const {computeBoundedSymbolPositions} = require("../../../notations/ji/boundedSymbolPositions")
const {computeEvents} = require("./events")

const computeExtendedHistories = (history, level, bound) => {
    const extendedHistories = []

    const boundedSymbolPositions = computeBoundedSymbolPositions(bound.position, level)

    const newEvents = [
        ...computeEvents(level, boundedSymbolPositions, "INA"),
        ...computeEvents(level, boundedSymbolPositions, "MEAN"),
        ...computeEvents(level, boundedSymbolPositions, "SIZE"),
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
