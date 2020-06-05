const {LEVEL_EDA_MIDPOINTS, LEVEL_SIZE_CATEGORY_BOUNDS, LEVEL_COMMA_MEANS} = require("../data/snappablePositions")
const {calculateRank} = require("./calculateRank")
const {calculateWithinHalfLevelEda} = require("./calculateWithinHalfLevelEda")

const EVENT_TYPE_SNAPPABLE_POSITIONS = {
    EDA: LEVEL_EDA_MIDPOINTS,
    SIZE: LEVEL_SIZE_CATEGORY_BOUNDS,
    MEAN: LEVEL_COMMA_MEANS,
}

const calculateEvents = (level, [lesserNeighborCommaPosition, greaterNeighborCommaPosition], type, position) => {
    const events = []

    const snappablePositions = EVENT_TYPE_SNAPPABLE_POSITIONS[type][level]

    snappablePositions.forEach(snappablePosition => {
        if (
            snappablePosition.position > lesserNeighborCommaPosition &&
            (snappablePosition.position < greaterNeighborCommaPosition || !greaterNeighborCommaPosition)
        ) {
            const withinHalfLevelEda = calculateWithinHalfLevelEda(level, snappablePosition.position, position)

            const rank = calculateRank(type, withinHalfLevelEda)

            events.push({
                level,
                type,
                name: snappablePosition.name,
                position: snappablePosition.position,
                rank,
            })
        }
    })

    return events
}

module.exports = {
    calculateEvents,
}
