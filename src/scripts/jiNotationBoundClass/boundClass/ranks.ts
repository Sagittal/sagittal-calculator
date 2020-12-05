import {Decimal, increment, Index, Rank} from "@sagittal/general"
import {BoundClass, BoundType} from "@sagittal/system"
import {rankBoundClassIndices, rankCounts} from "../globals"

const updateRankAnalysis = (
    bestRank: Decimal<{integer: true}> & Rank<BoundType>,
    boundClassIndex: Index<BoundClass>,
): void => {
    rankCounts[bestRank] = increment(rankCounts[bestRank])
    rankBoundClassIndices[bestRank].push(boundClassIndex)
}

export {
    updateRankAnalysis,
}
