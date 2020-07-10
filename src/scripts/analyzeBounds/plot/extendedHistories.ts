import {computeBoundedSymbolPositions} from "../../../notations/ji/boundedSymbolPositions"
import {computeEvents} from "./events"

const computeExtendedHistories = (history, level, bound) => {
    const extendedHistories = []

    const boundedSymbolPositions: any = computeBoundedSymbolPositions(bound.position, level)

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

export {
    computeExtendedHistories,
}
