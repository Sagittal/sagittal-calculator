import { computeIrrationalDecimalFromPitch, NumericProperties, Pitch } from "../../../general"
import { computeNeighborPositionIndices } from "./neighborPositionIndices"
import { NeighborPositions } from "./types"

const computeNeighborPositions = <T extends NumericProperties>(
    position: Pitch,
    targetPositions: Array<Pitch<T>>,
): NeighborPositions => {
    const [lesserNeighborPositionIndex, greaterNeighborPositionIndex] = computeNeighborPositionIndices(
        computeIrrationalDecimalFromPitch(position),
        targetPositions.map(computeIrrationalDecimalFromPitch),
    )

    return [
        targetPositions[ lesserNeighborPositionIndex ],
        targetPositions[ greaterNeighborPositionIndex ],
    ]
}

export {
    computeNeighborPositions,
}
