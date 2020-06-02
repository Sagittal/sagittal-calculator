const {LEVEL_EDA_MIDPOINTS, LEVEL_SIZE_CATEGORY_BOUNDS, LEVEL_COMMA_MEANS} = require("../data/snappablePositions")

const EVENT_TYPE_SNAPPABLE_POSITIONS = {
    EDA: LEVEL_EDA_MIDPOINTS,
    SIZE: LEVEL_SIZE_CATEGORY_BOUNDS,
    MEAN: LEVEL_COMMA_MEANS,
}

const calculateExtendedHistories = (history, level, [lesserNeighborCommaPosition, greaterNeighborCommaPosition], eventType) => {
    const extendedHistories = []

    const snappablePositions = EVENT_TYPE_SNAPPABLE_POSITIONS[eventType][level]

    snappablePositions.forEach(snappablePosition => {
        const {position, name} = snappablePosition
        if (position > lesserNeighborCommaPosition && (position < greaterNeighborCommaPosition || !greaterNeighborCommaPosition)) {
            const extendedEvents = history.events.concat(`${level}_${eventType}_${name}_@${position.toPrecision(3)}`)
            const extendedHistory = {events: extendedEvents, position}

            extendedHistories.push(extendedHistory)
        }
    })

    return extendedHistories
}

module.exports = {
    calculateExtendedHistories,
}
