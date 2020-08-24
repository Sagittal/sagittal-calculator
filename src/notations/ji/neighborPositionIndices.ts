import { Cents, Index } from "../../general"

const computeNeighborPositionIndices = (position: Cents, sortedTargetPositions: Cents[]): [Index<Cents>, Index<Cents>] => {
    let index = 0 as Index<Cents>
    let target = sortedTargetPositions[ index ]
    while (target < position) {
        index = index + 1 as Index<Cents>
        target = sortedTargetPositions[ index ]
    }

    return [
        index - 1 as Index<Cents>,
        index,
    ]
}

export {
    computeNeighborPositionIndices,
}
