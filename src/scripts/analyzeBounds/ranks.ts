import { Count, Id, Rank } from "../../general"
import { Bound } from "../../sagittal"
import { AnalyzedEvent, EventType } from "./types"

const RANKS: Record<EventType, Rank<AnalyzedEvent>> = {
    [ EventType.INA ]: 0 as Rank<AnalyzedEvent>,
    [ EventType.MEAN ]: 1 as Rank<AnalyzedEvent>,
    [ EventType.SIZE ]: 2 as Rank<AnalyzedEvent>,
}

const rankCounts: Array<Count<Rank<AnalyzedEvent>>> = [
    0 as Count<Rank<AnalyzedEvent>>, 0 as Count<Rank<AnalyzedEvent>>, 0 as Count<Rank<AnalyzedEvent>>,
]

const rankBoundIndices: Array<Id<Bound>>[] = [
    [], [], [],
]

const updateRankAnalysis = (bestRank: Rank<AnalyzedEvent>, boundId: Id<Bound>) => {
    rankCounts[ bestRank ] = rankCounts[ bestRank ] + 1 as Count<Rank<AnalyzedEvent>>
    rankBoundIndices[ bestRank ].push(boundId)
}

export {
    RANKS,
    rankCounts,
    rankBoundIndices,
    updateRankAnalysis,
}
