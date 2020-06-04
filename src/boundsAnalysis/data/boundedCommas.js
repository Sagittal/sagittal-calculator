const {calculateNeighborCommaPositions} = require("../utilities/calculateNeighborCommaPositions")
const {calculateCommaFromPosition} = require("../utilities/calculateCommaFromPosition")
const {DATA} = require("./data")

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

const BOUNDED_COMMAS = DATA.reduce(
    (boundedCommas, {bound}) =>
        ({...boundedCommas, [bound.position]: calculateBoundedCommas(bound)}),
    {},
)

module.exports = {
    calculateBoundedCommas,
    BOUNDED_COMMAS,
}
