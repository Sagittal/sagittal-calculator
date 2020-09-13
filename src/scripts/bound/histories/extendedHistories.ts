import { computeExtensionBase, ExtensionBaseType } from "../../../general"
import { Bound, Level } from "../../../sagittal"
import { BoundedSymbolPositions, computeBoundedJiSymbolPositions } from "../boundedPositions"
import { computeEvents } from "./events"
import { EventType, HistoricalEvent, History } from "./types"

const computeExtendedHistories = (history: History, level: Level, bound: Bound): History[] => {
    const extendedHistories: History[] = computeExtensionBase(ExtensionBaseType.ARRAY) as History[]

    const boundedSymbolPositions: BoundedSymbolPositions = computeBoundedJiSymbolPositions(bound.cents, level)

    const newEvents = [
        ...computeEvents(level, boundedSymbolPositions, EventType.INA),
        ...computeEvents(level, boundedSymbolPositions, EventType.MEAN),
        ...computeEvents(level, boundedSymbolPositions, EventType.SIZE),
    ]

    newEvents.forEach((event: HistoricalEvent): void => {
        const extendedHistory: History = history.concat(event)
        extendedHistories.push(extendedHistory)
    })

    return extendedHistories
}

export {
    computeExtendedHistories,
}
