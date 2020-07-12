import { EventRank, EventType } from "./types"
import { BoundId } from "../../notations/ji/types"
import { Count, EnumHash } from "../../utilities/types"

const RANKS: EnumHash<EventType, EventRank> = {
    [ EventType.INA ]: 0 as EventRank,
    [ EventType.MEAN ]: 1 as EventRank,
    [ EventType.SIZE ]: 2 as EventRank,
}

const rankCounts: Count[] = [
    0 as Count, 0 as Count, 0 as Count,
]

const rankBoundIndices: BoundId[][] = [
    [], [], [],
]

const updateRankAnalysis = (bestRank: EventRank, boundId: BoundId) => {
    rankCounts[ bestRank ] = rankCounts[ bestRank ] + 1 as Count
    rankBoundIndices[ bestRank ].push(boundId)
}

export {
    RANKS,
    rankCounts,
    rankBoundIndices,
    updateRankAnalysis,
}
