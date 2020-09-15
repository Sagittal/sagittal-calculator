import { CentsPosition, Name, Pitch } from "../../../general"
import { JiNotationLevel } from "../../../sagittal"
import { BoundedSymbolClassPositions } from "../boundedPositions"
import { EVENT_TYPE_SNAPPABLE_POSITIONS } from "./snappablePositions"
import { EventType, HistoricalEvent } from "./types"

const computeEvents = (
    jiNotationLevel: JiNotationLevel,
    [lesserBoundedSymbolPosition, greaterBoundedSymbolPosition]: BoundedSymbolClassPositions,
    type: EventType,
): HistoricalEvent[] => {
    const events: HistoricalEvent[] = []

    const snappablePositions = EVENT_TYPE_SNAPPABLE_POSITIONS[ type ][ jiNotationLevel ]

    snappablePositions.forEach((snappablePosition: CentsPosition): void => {
        if (
            (!lesserBoundedSymbolPosition || snappablePosition.cents > lesserBoundedSymbolPosition) &&
            (!greaterBoundedSymbolPosition || snappablePosition.cents < greaterBoundedSymbolPosition)
        ) {
            events.push({
                jiNotationLevel,
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
