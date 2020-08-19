import { Cents, Index } from "../../general"

const computeNeighborPositionIndices = (position: Cents, sortedTargetPositions: Cents[]): [Index, Index] => {
    let index = 0 as Index
    let target = sortedTargetPositions[ index ]
    while (target < position) {
        index = index + 1 as Index
        target = sortedTargetPositions[ index ]
    }

    return [
        index - 1 as Index,
        index,
    ]
}

export {
    computeNeighborPositionIndices,
}
