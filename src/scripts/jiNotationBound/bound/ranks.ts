import { Count, Id, increment, Integer, Rank } from "../../../general"
import { JiNotationBound } from "../../../sagittal"
import { EventType } from "../histories"
import { EventAnalysis } from "../history"

const RANKS: Record<EventType, Integer & Rank<EventAnalysis>> = {
    [ EventType.INA ]: 0 as Integer & Rank<EventAnalysis>,
    [ EventType.MEAN ]: 1 as Integer & Rank<EventAnalysis>,
    [ EventType.SIZE ]: 2 as Integer & Rank<EventAnalysis>,
}

const rankCounts: Array<Count<Rank<EventAnalysis>>> = [
    0 as Count<Rank<EventAnalysis>>, 0 as Count<Rank<EventAnalysis>>, 0 as Count<Rank<EventAnalysis>>,
]

const rankBoundIndices: Array<Id<JiNotationBound>>[] = [
    [], [], [],
]

const updateRankAnalysis = (bestRank: Integer & Rank<EventAnalysis>, jiNotationBoundId: Id<JiNotationBound>): void => {
    rankCounts[ bestRank ] = increment(rankCounts[ bestRank ])
    rankBoundIndices[ bestRank ].push(jiNotationBoundId)
}

export {
    RANKS,
    rankCounts,
    rankBoundIndices,
    updateRankAnalysis,
}
