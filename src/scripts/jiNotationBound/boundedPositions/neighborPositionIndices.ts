import { Cents, increment, Index, subtract } from "../../../general"

const computeNeighborPositionIndices = (    // TODO: this should be in decimal, for consistency & performance
    position: Cents,
    sortedTargetPositions: Cents[],
): [Index<Cents>, Index<Cents>] => {
    let index = 0 as Index<Cents>
    let target = sortedTargetPositions[ index ]
    while (target < position) {
        index = increment(index)
        target = sortedTargetPositions[ index ]
    }

    return [
        subtract(index, 1 as Index<Cents>),
        index,
    ]
}

export {
    computeNeighborPositionIndices,
}
