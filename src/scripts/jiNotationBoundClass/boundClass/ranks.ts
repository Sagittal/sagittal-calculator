import {Decimal, Id, increment, Rank} from "../../../general"
import {BoundClass, BoundType} from "../../../sagittal"
import {rankBoundClassIndices, rankCounts} from "../globals"

const updateRankAnalysis = (
    bestRank: Decimal<{integer: true}> & Rank<BoundType>,
    boundClassId: Id<BoundClass>,
): void => {
    rankCounts[bestRank] = increment(rankCounts[bestRank])
    rankBoundClassIndices[bestRank].push(boundClassId)
}

export {
    updateRankAnalysis,
}
