import { Count, Decimal, increment, Rank } from "../../../general"
import { BoundType } from "../../../sagittal"
import { jiNotationLevelsBestCumulativeHistoryRanks, jiNotationLevelsBestHistoryRanks } from "../globals"
import { BoundClassEventAnalysis, BoundClassHistoryAnalysis } from "../history"

const updateJiNotationLevelAnalysis = (bestPossibleBoundClassHistoryAnalysis: BoundClassHistoryAnalysis): void => {
    let cumulativeRank = 0
    bestPossibleBoundClassHistoryAnalysis.boundClassEventAnalyses
        .forEach((boundClassEventAnalysis: BoundClassEventAnalysis): void => {
            const { jiNotationLevel, rank } = boundClassEventAnalysis

            if (rank > cumulativeRank) {
                cumulativeRank = rank
            }

            if (!jiNotationLevelsBestHistoryRanks[ jiNotationLevel ]) {
                jiNotationLevelsBestHistoryRanks[ jiNotationLevel ] = {}
            }
            if (!jiNotationLevelsBestHistoryRanks[ jiNotationLevel ][ rank ]) {
                jiNotationLevelsBestHistoryRanks[ jiNotationLevel ][ rank ] =
                    0 as Count<Decimal<{ integer: true }> & Rank<BoundType>>
            }
            jiNotationLevelsBestHistoryRanks[ jiNotationLevel ][ rank ] = increment(
                jiNotationLevelsBestHistoryRanks[ jiNotationLevel ][ rank ] as
                    Count<Decimal<{ integer: true }> & Rank<BoundType>>,
            )

            if (!jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ]) {
                jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ] = {}
            }
            if (!jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ][ cumulativeRank ]) {
                jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ][ cumulativeRank ] =
                    0 as Count<Decimal<{ integer: true }> & Rank<BoundType>>
            }
            jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ][ cumulativeRank ] =
                increment(jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ][ cumulativeRank ])
        })
}

export {
    updateJiNotationLevelAnalysis,
}
