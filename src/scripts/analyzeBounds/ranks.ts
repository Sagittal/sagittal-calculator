import { Count, Id, Integer, Rank } from "../../general"
import { Bound } from "../../sagittal"
import { AnalyzedEvent, EventType } from "./types"

const RANKS: Record<EventType, Rank<AnalyzedEvent, Integer>> = {
    [ EventType.INA ]: 0 as Rank<AnalyzedEvent, Integer>,
    [ EventType.MEAN ]: 1 as Rank<AnalyzedEvent, Integer>,
    [ EventType.SIZE ]: 2 as Rank<AnalyzedEvent, Integer>,
}

const rankCounts: Array<Count<Rank<AnalyzedEvent>>> = [
    0 as Count<Rank<AnalyzedEvent>>, 0 as Count<Rank<AnalyzedEvent>>, 0 as Count<Rank<AnalyzedEvent>>,
]

const rankBoundIndices: Array<Id<Bound>>[] = [
    [], [], [],
]

const updateRankAnalysis = (bestRank: Rank<AnalyzedEvent, Integer>, boundId: Id<Bound>) => {
    rankCounts[ bestRank ] = rankCounts[ bestRank ] + 1 as Count<Rank<AnalyzedEvent>>
    rankBoundIndices[ bestRank ].push(boundId)
}

export {
    RANKS,
    rankCounts,
    rankBoundIndices,
    updateRankAnalysis,
}
