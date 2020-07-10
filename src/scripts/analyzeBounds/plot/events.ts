import {EVENT_TYPE_SNAPPABLE_POSITIONS} from "../snappablePositions"

const computeEvents = (level, [lesserBoundedSymbolPosition, greaterBoundedSymbolPosition], type) => {
    const events = []

    const snappablePositions = EVENT_TYPE_SNAPPABLE_POSITIONS[type][level]

    snappablePositions.forEach(snappablePosition => {
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
