import { computeExtensionBase, ExtensionBaseType } from "../../../general"
import { Bound, BoundedSymbolPositions, computeBoundedJiSymbolPositions, Level } from "../../../notations"
import { EventType, History } from "../types"
import { computeEvents } from "./events"

const computeExtendedHistories = (history: History, level: Level, bound: Bound) => {
    const extendedHistories: History[] = computeExtensionBase(ExtensionBaseType.ARRAY) as History[]

    const boundedSymbolPositions: BoundedSymbolPositions = computeBoundedJiSymbolPositions(bound.cents, level)

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
