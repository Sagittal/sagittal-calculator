import { Count, Id } from "../../general"
import { Bound } from "../../notations"
import { EventRank, EventType } from "./types"

const RANKS: Record<EventType, EventRank> = {
    [ EventType.INA ]: 0 as EventRank,
    [ EventType.MEAN ]: 1 as EventRank,
    [ EventType.SIZE ]: 2 as EventRank,
}

const rankCounts: Array<Count<EventRank>> = [
    0 as Count<EventRank>, 0 as Count<EventRank>, 0 as Count<EventRank>,
]

const rankBoundIndices: Array<Id<Bound>>[] = [
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
