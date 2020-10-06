import { Decimal, Id, increment, Rank } from "../../../general"
import { BoundType, JiNotationBound } from "../../../sagittal"
import { rankBoundIndices, rankCounts } from "../globals"

const updateRankAnalysis = (
    bestRank: Decimal<{ integer: true }> & Rank<BoundType>,
    jiNotationBoundId: Id<JiNotationBound>,
): void => {
    rankCounts[ bestRank ] = increment(rankCounts[ bestRank ])
    rankBoundIndices[ bestRank ].push(jiNotationBoundId)
}

export {
    updateRankAnalysis,
}
