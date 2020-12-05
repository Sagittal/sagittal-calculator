import {increment, Index, subtract} from "@sagittal/general"

const computeNeighborPositionIndices = (position: number, sortedTargetPositions: number[]): [Index, Index] => {
    let index = 0 as Index
    let target = sortedTargetPositions[index]
    while (target < position) {
        index = increment(index)
        target = sortedTargetPositions[index]
    }

    return [
        subtract(index, 1 as Index),
        index,
    ]
}

export {
    computeNeighborPositionIndices,
}
