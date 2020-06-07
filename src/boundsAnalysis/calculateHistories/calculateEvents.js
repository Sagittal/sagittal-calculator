const {LEVEL_EDA_MIDPOINTS, LEVEL_SIZE_CATEGORY_BOUNDS, LEVEL_COMMA_MEANS} = require("../data/snappablePositions")
const {calculateLevelRank} = require("../analyzeHistories/calculateLevelRank")
const {calculateWithinHalfLevelEda} = require("./calculateWithinHalfLevelEda")

const EVENT_TYPE_SNAPPABLE_POSITIONS = {
    EDA: LEVEL_EDA_MIDPOINTS,
    SIZE: LEVEL_SIZE_CATEGORY_BOUNDS,
    MEAN: LEVEL_COMMA_MEANS,
}

const calculateEvents = (level, [lesserBoundedCommaPosition, greaterBoundedCommaPosition], type, position) => {
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
    calculateEvents,
}
