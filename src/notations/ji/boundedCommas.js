const {computeBoundedCommaPositions} = require("./boundedCommaPositions")
const {computePositionComma} = require("./positionComma")
const {computeInaDistance} = require("./inaDistance")
const {BOUNDS} = require("./bounds")

const computeBoundedCommas = bound => {
    const {position, levels, id} = bound

    return levels.reduce(
        (levels, level) => {
            const levelBoundedCommas = computeBoundedCommaPositions(position, level).map(position => computePositionComma(position))
            const levelBoundedCommasWithDistance = levelBoundedCommas.map(comma => {
                if (comma) {
                    const distance = Math.abs(position - comma.position)

                    return {
                        ...comma,
                        distance,
                        inaDistance: computeInaDistance(distance, level),
                    }
                }
            })

            return {
                ...levels,
                [level]: levelBoundedCommasWithDistance,
            }
        },
        {
            id,
        },
    )
}

const BOUNDED_COMMAS = BOUNDS.map(computeBoundedCommas)

module.exports = {
    computeBoundedCommas,
    BOUNDED_COMMAS,
}
