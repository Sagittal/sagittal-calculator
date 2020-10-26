import {Decimal, increment, Rank} from "../../../general"
import {BoundClassId, BoundType} from "../../../sagittal"
import {rankBoundClassIndices, rankCounts} from "../globals"

const updateRankAnalysis = (
    bestRank: Decimal<{integer: true}> & Rank<BoundType>,
    boundClassId: BoundClassId,
): void => {
    rankCounts[bestRank] = increment(rankCounts[bestRank])
    rankBoundClassIndices[bestRank].push(boundClassId)
}

export {
    updateRankAnalysis,
}
