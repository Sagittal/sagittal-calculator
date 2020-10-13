import { Decimal, Id, increment, Rank } from "../../../general"
import { BoundType, JiNotationBoundClass } from "../../../sagittal"
import { rankBoundClassIndices, rankCounts } from "../globals"

const updateRankAnalysis = (
    bestRank: Decimal<{ integer: true }> & Rank<BoundType>,
    jiNotationBoundClassId: Id<JiNotationBoundClass>,
): void => {
    rankCounts[ bestRank ] = increment(rankCounts[ bestRank ])
    rankBoundClassIndices[ bestRank ].push(jiNotationBoundClassId)
}

export {
    updateRankAnalysis,
}
