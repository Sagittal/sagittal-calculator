const {LEVELS_EDA_MIDPOINTS, LEVELS_SIZE_CATEGORY_BOUNDS, LEVELS_COMMA_MEANS} = require("../data/snappablePositions")

const EVENT_TYPE_SNAPPABLE_POSITIONS = {
    EDA: LEVELS_EDA_MIDPOINTS,
    SIZE: LEVELS_SIZE_CATEGORY_BOUNDS,
    MEAN: LEVELS_COMMA_MEANS,
}

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
