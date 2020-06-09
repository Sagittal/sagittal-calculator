const {computeBoundedCommaPositions} = require("./boundedCommaPositions")
const {computePositionComma} = require("./positionComma")
const {BOUNDS} = require("./bounds")

const computeBoundedCommas = bound => {
    const {position, levels} = bound

    return levels.reduce(
        (levels, level) => {
            const levelBoundedCommas = computeBoundedCommaPositions(position, level).map(position => computePositionComma(position))
            const levelBoundedCommasWithDistance = levelBoundedCommas.map(comma => comma && ({
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

const BOUNDED_COMMAS = BOUNDS.map((bound, boundIndex) => computeBoundedCommas(bound))

module.exports = {
    computeBoundedCommas,
    BOUNDED_COMMAS,
}
