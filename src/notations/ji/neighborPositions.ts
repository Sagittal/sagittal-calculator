import { Cents } from "../../general"
import { computeNeighborPositionIndices } from "./neighborPositionIndices"

const computeNeighborPositions = (position: Cents, targetPositions: Cents[]): [Cents | undefined, Cents | undefined] => {
    const [lesserNeighborPositionIndex, greaterNeighborPositionIndex] = computeNeighborPositionIndices(position, targetPositions)

    return [
        targetPositions[ lesserNeighborPositionIndex ],
        targetPositions[ greaterNeighborPositionIndex ],
    ]
}

export {
    computeNeighborPositions,
}
