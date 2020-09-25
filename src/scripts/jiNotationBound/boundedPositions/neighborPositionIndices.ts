import { Cents, increment, Index, subtract } from "../../../general"

const computeNeighborPositionIndices = (
    position: Cents,
    sortedTargetPositions: Cents[],
): [Index<Cents>, Index<Cents>] => {
    let index = 0 as Index<Cents>
    let target = sortedTargetPositions[ index ]
    while (target < position) {
        // TODO: maybe i need to have a helper for while loops which enables me to at a flip turn something on
        //  to have them report their condition if the suite is hanging so i can figure out which one is the offender
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
