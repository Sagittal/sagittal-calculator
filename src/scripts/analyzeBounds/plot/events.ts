import { EVENT_TYPE_SNAPPABLE_POSITIONS } from "../snappablePositions"
import { EventType, HistoricalEvent, SnappablePosition } from "../types"
import { Level } from "../../../notations/ji/types"
import { Cents } from "../../../utilities/types"

const computeEvents = (level: Level, [lesserBoundedSymbolPosition, greaterBoundedSymbolPosition]: [Cents, Cents], type: EventType) => {
    const events: HistoricalEvent[] = []

    const snappablePositions = EVENT_TYPE_SNAPPABLE_POSITIONS[ type ][ level ]

    snappablePositions.forEach((snappablePosition: SnappablePosition) => {
        if (
            snappablePosition.position > lesserBoundedSymbolPosition &&
            (snappablePosition.position < greaterBoundedSymbolPosition || !greaterBoundedSymbolPosition)
        ) {
            events.push({
                level,
                type,
                name: snappablePosition.name,
                position: snappablePosition.position,
            })
        }
    })

    return events
}

export {
    computeEvents,
}
