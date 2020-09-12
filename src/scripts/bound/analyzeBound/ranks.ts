import { Count, Id, Integer, Rank } from "../../../general"
import { Bound } from "../../../sagittal"
import { AnalyzedEvent } from "../analyzedHistory"
import { EventType } from "../histories"

const RANKS: Record<EventType, Integer & Rank<AnalyzedEvent>> = {
    [ EventType.INA ]: 0 as Integer & Rank<AnalyzedEvent>,
    [ EventType.MEAN ]: 1 as Integer & Rank<AnalyzedEvent>,
    [ EventType.SIZE ]: 2 as Integer & Rank<AnalyzedEvent>,
}

const rankCounts: Array<Count<Rank<AnalyzedEvent>>> = [
    0 as Count<Rank<AnalyzedEvent>>, 0 as Count<Rank<AnalyzedEvent>>, 0 as Count<Rank<AnalyzedEvent>>,
]

const rankBoundIndices: Array<Id<Bound>>[] = [
    [], [], [],
]

const updateRankAnalysis = (bestRank: Integer & Rank<AnalyzedEvent>, boundId: Id<Bound>) => {
    rankCounts[ bestRank ] = rankCounts[ bestRank ] + 1 as Count<Rank<AnalyzedEvent>>
    rankBoundIndices[ bestRank ].push(boundId)
}

export {
    RANKS,
    rankCounts,
    rankBoundIndices,
    updateRankAnalysis,
}
