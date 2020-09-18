import { Id, increment, Integer, Rank } from "../../../general"
import { JiNotationBound } from "../../../sagittal"
import { rankBoundIndices, rankCounts } from "../globals"
import { EventType } from "../histories"

const updateRankAnalysis = (bestRank: Integer & Rank<EventType>, jiNotationBoundId: Id<JiNotationBound>): void => {
    rankCounts[ bestRank ] = increment(rankCounts[ bestRank ])
    rankBoundIndices[ bestRank ].push(jiNotationBoundId)
}

export {
    updateRankAnalysis,
}
