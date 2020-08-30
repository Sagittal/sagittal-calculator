import { CentsPosition, Name, Pitch } from "../../../general"
import { Level } from "../../../sagittal"
import { BoundedSymbolPositions } from "../boundedPositions"
import { EVENT_TYPE_SNAPPABLE_POSITIONS } from "./snappablePositions"
import { EventType, HistoricalEvent } from "./types"

const computeEvents = (
    level: Level,
    [lesserBoundedSymbolPosition, greaterBoundedSymbolPosition]: BoundedSymbolPositions,
    type: EventType,
): HistoricalEvent[] => {
    const events: HistoricalEvent[] = []

    const snappablePositions = EVENT_TYPE_SNAPPABLE_POSITIONS[ type ][ level ]

    snappablePositions.forEach((snappablePosition: CentsPosition) => {
        if (
            (!lesserBoundedSymbolPosition || snappablePosition.cents > lesserBoundedSymbolPosition) &&
            (!greaterBoundedSymbolPosition || snappablePosition.cents < greaterBoundedSymbolPosition)
        ) {
            events.push({
                level,
                type,
                name: snappablePosition.name || "" as Name<Pitch>,
                cents: snappablePosition.cents,
            })
        }
    })

    return events
}

export {
    computeEvents,
}
