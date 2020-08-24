import { Cents } from "../../general"
import { computeNeighborPositionIndices } from "./neighborPositionIndices"
import { NeighborPositions } from "./types"

const computeNeighborPositions = (position: Cents, targetPositions: Cents[]): NeighborPositions => {
    const [lesserNeighborPositionIndex, greaterNeighborPositionIndex] = computeNeighborPositionIndices(position, targetPositions)

    return [
        targetPositions[ lesserNeighborPositionIndex ],
        targetPositions[ greaterNeighborPositionIndex ],
    ]
}

export {
    computeNeighborPositions,
}
