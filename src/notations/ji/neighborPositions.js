const {computeNeighborPositionIndices} = require("./neighborPositionIndices")

const computeNeighborPositions = (position, targetPositions) => {
    const [lesserNeighborPositionIndex, greaterNeighborPositionIndex] = computeNeighborPositionIndices(position, targetPositions)

    return [
        targetPositions[lesserNeighborPositionIndex],
        targetPositions[greaterNeighborPositionIndex],
    ]
}

module.exports = {
    computeNeighborPositions,
}
