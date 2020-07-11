import { EventType, EventRank } from "./types"
import { BoundId } from "../../notations/ji/types"

const RANKS: { [key in EventType]: EventRank } = {
    [ EventType.INA ]: 0 as EventRank,
    [ EventType.MEAN ]: 1 as EventRank,
    [ EventType.SIZE ]: 2 as EventRank,
}

const rankCounts: number[] = [
    0, 0, 0,
]

const rankBoundIndices: BoundId[][] = [
    [], [], [],
]

const updateRankAnalysis = (bestRank: EventRank, boundId: BoundId) => {
    rankCounts[ bestRank ] += 1
    rankBoundIndices[ bestRank ].push(boundId)
}

export {
    RANKS,
    rankCounts,
    rankBoundIndices,
    updateRankAnalysis,
}
