const {LEVEL_EDA_MIDPOINTS, LEVEL_SIZE_CATEGORY_BOUNDS, LEVEL_COMMA_MEANS} = require("../data/snappablePositions")

const EVENT_TYPE_SNAPPABLE_POSITIONS = {
    EDA: LEVEL_EDA_MIDPOINTS,
    SIZE: LEVEL_SIZE_CATEGORY_BOUNDS,
    MEAN: LEVEL_COMMA_MEANS,
}

const calculateEvents = (level, [lesserNeighborCommaPosition, greaterNeighborCommaPosition], type) => {
    const events = []

    const snappablePositions = EVENT_TYPE_SNAPPABLE_POSITIONS[type][level]

    snappablePositions.forEach(snappablePosition => {
        const {position, name} = snappablePosition
        if (position > lesserNeighborCommaPosition && (position < greaterNeighborCommaPosition || !greaterNeighborCommaPosition)) {
            events.push({
                level,
                type,
                name,
                position,
            })
        }
    })

    return events
}

module.exports = {
    calculateEvents,
}
