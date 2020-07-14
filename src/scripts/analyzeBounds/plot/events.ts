import { Cents, Position } from "../../../general"
import { Level } from "../../../notations"
import { EventType, HistoricalEvent } from "../types"
import { EVENT_TYPE_SNAPPABLE_POSITIONS } from "./snappablePositions"

const computeEvents = (level: Level, [lesserBoundedSymbolPosition, greaterBoundedSymbolPosition]: [Cents | undefined, Cents | undefined], type: EventType) => {
    const events: HistoricalEvent[] = []

    const snappablePositions = EVENT_TYPE_SNAPPABLE_POSITIONS[ type ][ level ]

    snappablePositions.forEach((snappablePosition: Position) => {
        if (
            (!lesserBoundedSymbolPosition || snappablePosition.cents > lesserBoundedSymbolPosition) &&
            (!greaterBoundedSymbolPosition || snappablePosition.cents < greaterBoundedSymbolPosition)
        ) {
            events.push({
                level,
                type,
                name: snappablePosition.name,
                cents: snappablePosition.cents,
            })
        }
    })

    return events
}

export {
    computeEvents,
}
