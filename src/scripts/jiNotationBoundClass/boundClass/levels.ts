import {Count, Decimal, increment, Rank} from "@sagittal/general"
import {BoundType} from "@sagittal/system"
import {jiNotationLevelsBestCumulativeHistoryRanks, jiNotationLevelsBestHistoryRanks} from "../globals"
import {BoundEventAnalysis, BoundHistoryAnalysis} from "../history"

const updateJiNotationLevelAnalysis = (bestPossibleBoundHistoryAnalysis: BoundHistoryAnalysis): void => {
    let cumulativeRank = 0
    bestPossibleBoundHistoryAnalysis.boundEventAnalyses
        .forEach((boundEventAnalysis: BoundEventAnalysis): void => {
            const {jiNotationLevel, rank} = boundEventAnalysis

            if (rank > cumulativeRank) {
                cumulativeRank = rank
            }

            if (!jiNotationLevelsBestHistoryRanks[jiNotationLevel]) {
                jiNotationLevelsBestHistoryRanks[jiNotationLevel] = {}
            }
            if (!jiNotationLevelsBestHistoryRanks[jiNotationLevel][rank]) {
                jiNotationLevelsBestHistoryRanks[jiNotationLevel][rank] =
                    0 as Count<Decimal<{integer: true}> & Rank<BoundType>>
            }
            jiNotationLevelsBestHistoryRanks[jiNotationLevel][rank] = increment(
                jiNotationLevelsBestHistoryRanks[jiNotationLevel][rank] as
                    Count<Decimal<{integer: true}> & Rank<BoundType>>,
            )

            if (!jiNotationLevelsBestCumulativeHistoryRanks[jiNotationLevel]) {
                jiNotationLevelsBestCumulativeHistoryRanks[jiNotationLevel] = {}
            }
            if (!jiNotationLevelsBestCumulativeHistoryRanks[jiNotationLevel][cumulativeRank]) {
                jiNotationLevelsBestCumulativeHistoryRanks[jiNotationLevel][cumulativeRank] =
                    0 as Count<Decimal<{integer: true}> & Rank<BoundType>>
            }
            jiNotationLevelsBestCumulativeHistoryRanks[jiNotationLevel][cumulativeRank] =
                increment(jiNotationLevelsBestCumulativeHistoryRanks[jiNotationLevel][cumulativeRank])
        })
}

export {
    updateJiNotationLevelAnalysis,
}
