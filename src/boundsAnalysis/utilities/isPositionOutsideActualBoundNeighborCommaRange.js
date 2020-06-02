const {calculateNeighborCommaPositions} = require("./calculateNeighborCommaPositions")

const isPositionOutsideActualBoundNeighborCommaRange = (position, actualBoundPosition, level) => {
    const [lesserNeighborCommaPosition, greaterNeighborCommaPosition] = calculateNeighborCommaPositions(actualBoundPosition, level)

    return position > greaterNeighborCommaPosition || position < lesserNeighborCommaPosition
}

module.exports = {
    isPositionOutsideActualBoundNeighborCommaRange,
}
