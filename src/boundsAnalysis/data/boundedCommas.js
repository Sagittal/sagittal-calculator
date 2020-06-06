const {calculateNeighborCommaPositions} = require("./calculateNeighborCommaPositions")
const {calculateCommaFromPosition} = require("./calculateCommaFromPosition")
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
    (boundedCommas, {bound}, datumIndex) =>
        ({...boundedCommas, [datumIndex]: calculateBoundedCommas(bound)}),
    {},
)

module.exports = {
    calculateBoundedCommas,
    BOUNDED_COMMAS,
}
