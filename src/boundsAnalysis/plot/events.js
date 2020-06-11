const {EVENT_TYPE_SNAPPABLE_POSITIONS} = require("../data/snappablePositions")

const computeEvents = (level, [lesserBoundedCommaPosition, greaterBoundedCommaPosition], type) => {
    const events = []

    const snappablePositions = EVENT_TYPE_SNAPPABLE_POSITIONS[type][level]

    snappablePositions.forEach(snappablePosition => {
        if (
            snappablePosition.position > lesserBoundedCommaPosition &&
            (snappablePosition.position < greaterBoundedCommaPosition || !greaterBoundedCommaPosition)
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

module.exports = {
    computeEvents,
}
