import { Id, increment, IntegerDecimal, Rank } from "../../../general"
import { BoundType, JiNotationBound } from "../../../sagittal"
import { rankBoundIndices, rankCounts } from "../globals"

const updateRankAnalysis = (
    bestRank: IntegerDecimal & Rank<BoundType>,
    jiNotationBoundId: Id<JiNotationBound>,
): void => {
    rankCounts[ bestRank ] = increment(rankCounts[ bestRank ])
    rankBoundIndices[ bestRank ].push(jiNotationBoundId)
}

export {
    updateRankAnalysis,
}
