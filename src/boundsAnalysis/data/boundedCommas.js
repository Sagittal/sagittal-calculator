const {calculateNeighborCommaPositions} = require("./calculateNeighborCommaPositions")
const {calculateCommaFromPosition} = require("./calculateCommaFromPosition")
const {BOUNDS} = require("./bounds")

const calculateBoundedCommas = bound => {
    const {position, levels} = bound

    return levels.reduce(
        (levels, level) => {
            const levelBoundedCommas = calculateNeighborCommaPositions(position, level).map(position => calculateCommaFromPosition(position)).filter(comma => !!comma)
            const levelBoundedCommasWithDistance = levelBoundedCommas.map(comma => ({
                ...comma,
                distance: Math.abs(position - comma.position),
            }))

            return {
                ...levels,
                [level]: levelBoundedCommasWithDistance,
            }
        },
        {},
    )
}

const BOUNDED_COMMAS = BOUNDS.reduce(
    (boundedCommas, bound, boundIndex) =>
        ({...boundedCommas, [boundIndex]: calculateBoundedCommas(bound)}),
    {},
)

module.exports = {
    calculateBoundedCommas,
    BOUNDED_COMMAS,
}
