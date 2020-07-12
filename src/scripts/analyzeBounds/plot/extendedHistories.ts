import { computeBoundedSymbolPositions } from "../../../notations/ji/boundedSymbolPositions"
import { computeEvents } from "./events"
import { EventType, History } from "../types"
import { Bound, Level } from "../../../notations/ji/types"
import { Cents } from "../../../utilities/types"

const computeExtendedHistories = (history: History, level: Level, bound: Bound) => {
    const extendedHistories: History[] = []

    const boundedSymbolPositions: [Cents | undefined, Cents | undefined] = computeBoundedSymbolPositions(bound.position, level)

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
