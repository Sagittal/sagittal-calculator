import { Cents } from "../../utilities/types"

const computeNeighborPositionIndices = (position: Cents, targetPositions: Cents[]) => {
    let index = 0
    let target = targetPositions[ index ]
    while (target < position) {
        index++
        target = targetPositions[ index ]
    }

    return [
        index - 1,
        index,
    ]
}


export {
    computeNeighborPositionIndices,
}
