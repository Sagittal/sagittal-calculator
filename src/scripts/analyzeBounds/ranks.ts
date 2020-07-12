import { EventRank, EventType } from "./types"
import { Count, EnumHash, Id } from "../../utilities/types"
import { Bound } from "../../notations/ji/types"

const RANKS: EnumHash<EventType, EventRank> = {
    [ EventType.INA ]: 0 as EventRank,
    [ EventType.MEAN ]: 1 as EventRank,
    [ EventType.SIZE ]: 2 as EventRank,
}

const rankCounts: Count<EventRank>[] = [
    0 as Count<EventRank>, 0 as Count<EventRank>, 0 as Count<EventRank>,
]

const rankBoundIndices: Id<Bound>[][] = [
    [], [], [],
]

const updateRankAnalysis = (bestRank: EventRank, boundId: Id<Bound>) => {
    rankCounts[ bestRank ] = rankCounts[ bestRank ] + 1 as Count<EventRank>
    rankBoundIndices[ bestRank ].push(boundId)
}

export {
    RANKS,
    rankCounts,
    rankBoundIndices,
    updateRankAnalysis,
}
