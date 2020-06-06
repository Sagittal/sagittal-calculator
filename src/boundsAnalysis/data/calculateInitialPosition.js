const {MAXIMUM_POSITION} = require("./intervals")
const {calculateNeighborCommaPositions} = require("./calculateNeighborCommaPositions")

const calculateInitialPosition = (bound, level) => {
    const {position, levels} = bound
    const initialLevel = level || levels[0]
    const [lesserNeighborCommaPosition, greaterNeighborCommaPosition] = calculateNeighborCommaPositions(position, initialLevel)

    return greaterNeighborCommaPosition ? (lesserNeighborCommaPosition + greaterNeighborCommaPosition) / 2 : MAXIMUM_POSITION
}

module.exports = {
    calculateInitialPosition,
}
