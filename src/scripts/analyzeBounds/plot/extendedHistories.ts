import { computeExtensionBase, ExtensionBaseType } from "../../../general"
import { Bound, BoundedSymbolPositions, computeBoundedSymbolPositions, Level } from "../../../notations"
import { EventType, History } from "../types"
import { computeEvents } from "./events"

const computeExtendedHistories = (history: History, level: Level, bound: Bound) => {
    const extendedHistories: History[] = computeExtensionBase(ExtensionBaseType.ARRAY) as History[]

    const boundedSymbolPositions: BoundedSymbolPositions = computeBoundedSymbolPositions(bound.cents, level)

    const newEvents = [
        ...computeEvents(level, boundedSymbolPositions, EventType.INA),
        ...computeEvents(level, boundedSymbolPositions, EventType.MEAN),
        ...computeEvents(level, boundedSymbolPositions, EventType.SIZE),
    ]

    newEvents.forEach(event => {
        const extendedHistory: History = history.concat(event)
        extendedHistories.push(extendedHistory)
    })

    return extendedHistories
}

export {
    computeExtendedHistories,
}
