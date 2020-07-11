import { computeNeighborPositionIndices } from "./neighborPositionIndices"
import { Cents } from "../../utilities/types"

const computeNeighborPositions = (position: Cents, targetPositions: Cents[]): [Cents, Cents] => {
    const [lesserNeighborPositionIndex, greaterNeighborPositionIndex] = computeNeighborPositionIndices(position, targetPositions)

    return [
        targetPositions[ lesserNeighborPositionIndex ],
        targetPositions[ greaterNeighborPositionIndex ],
    ]
}

export {
    computeNeighborPositions,
}
