import { Cents, Index } from "../../utilities/types"

const computeNeighborPositionIndices = (position: Cents, targetPositions: Cents[]): [Index, Index] => {
    let index = 0 as Index
    let target = targetPositions[ index ]
    while (target < position) {
        index++
        target = targetPositions[ index ]
    }

    return [
        index - 1 as Index,
        index,
    ]
}


export {
    computeNeighborPositionIndices,
}
