import {computeNeighborPositionIndices} from "./neighborPositionIndices"

const computeNeighborPositions = (position, targetPositions): any => {
    const [lesserNeighborPositionIndex, greaterNeighborPositionIndex] = computeNeighborPositionIndices(position, targetPositions)

    return [
        targetPositions[lesserNeighborPositionIndex],
        targetPositions[greaterNeighborPositionIndex],
    ]
}

export {
    computeNeighborPositions,
}
