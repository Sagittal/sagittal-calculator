import {computeIrrationalDecimalFromScamon, NumericProperties, Scamon} from "@sagittal/general"
import {computeNeighborPositionIndices} from "./neighborPositionIndices"
import {NeighborPositions} from "./types"

const computeNeighborPositions = <T extends NumericProperties>(
    position: Scamon,
    targetPositions: Array<Scamon<T>>,
): NeighborPositions => {
    const [lesserNeighborPositionIndex, greaterNeighborPositionIndex] = computeNeighborPositionIndices(
        computeIrrationalDecimalFromScamon(position),
        targetPositions.map(computeIrrationalDecimalFromScamon),
    )

    return [
        targetPositions[lesserNeighborPositionIndex],
        targetPositions[greaterNeighborPositionIndex],
    ]
}

export {
    computeNeighborPositions,
}
