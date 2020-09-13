import { Count, Id, Integer, Rank } from "../../../general"
import { Bound } from "../../../sagittal"
import { EventAnalysis } from "../analyzeHistory"
import { EventType } from "../histories"

const RANKS: Record<EventType, Integer & Rank<EventAnalysis>> = {
    [ EventType.INA ]: 0 as Integer & Rank<EventAnalysis>,
    [ EventType.MEAN ]: 1 as Integer & Rank<EventAnalysis>,
    [ EventType.SIZE ]: 2 as Integer & Rank<EventAnalysis>,
}

const rankCounts: Array<Count<Rank<EventAnalysis>>> = [
    0 as Count<Rank<EventAnalysis>>, 0 as Count<Rank<EventAnalysis>>, 0 as Count<Rank<EventAnalysis>>,
]

const rankBoundIndices: Array<Id<Bound>>[] = [
    [], [], [],
]

const updateRankAnalysis = (bestRank: Integer & Rank<EventAnalysis>, boundId: Id<Bound>) => {
    rankCounts[ bestRank ] = rankCounts[ bestRank ] + 1 as Count<Rank<EventAnalysis>>
    rankBoundIndices[ bestRank ].push(boundId)
}

export {
    RANKS,
    rankCounts,
    rankBoundIndices,
    updateRankAnalysis,
}
