const {calculateNeighborCommaPositions} = require("../utilities/calculateNeighborCommaPositions")
const {calculateCommaFromPosition} = require("../utilities/calculateCommaFromPosition")

const calculateBoundedCommas = bound => {
    const {position, levels} = bound

    return levels.reduce(
        (levels, level) => {
            const levelBoundedCommas = calculateNeighborCommaPositions(position, level).map(position => calculateCommaFromPosition(position)).filter(comma => !!comma)
            const analyzedLevelBoundedCommas = levelBoundedCommas.map(comma => ({...comma, distance: Math.abs(position - comma.position)}))

            return {
                ...levels,
                [level]: analyzedLevelBoundedCommas,
            }
        },
        {},
    )
}

module.exports = {
    calculateBoundedCommas,
}
