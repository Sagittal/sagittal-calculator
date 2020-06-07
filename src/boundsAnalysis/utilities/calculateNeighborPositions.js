const {calculateNeighborPositionIndices} = require("./calculateNeighborPositionIndices")

const calculateNeighborPositions = (position, targetPositions) => {
    const [lesserNeighborPositionIndex, greaterNeighborPositionIndex] = calculateNeighborPositionIndices(position, targetPositions)

    return [
        targetPositions[lesserNeighborPositionIndex],
        targetPositions[greaterNeighborPositionIndex],
    ]
}

module.exports = {
    calculateNeighborPositions,
}
