import { increment, Maybe } from "../../../general"
import { JiNotationLevel } from "../../../sagittal"
import { EventAnalysis, HistoryAnalysis } from "../history"

const jiNotationLevelsBestHistoryRanks: Record<JiNotationLevel, { [ index: number ]: Maybe<number> }> =
    {} as Record<JiNotationLevel, { [ index: number ]: Maybe<number> }>
const jiNotationLevelsBestCumulativeHistoryRanks: Record<JiNotationLevel, { [ index: number ]: number }> =
    {} as Record<JiNotationLevel, { [ index: number ]: number }>

const updateJiNotationLevelAnalysis = (bestPossibleHistory: HistoryAnalysis): void => {
    let cumulativeRank = 0
    bestPossibleHistory.eventAnalyses.forEach((eventAnalysis: EventAnalysis): void => {
        const { jiNotationLevel, rank } = eventAnalysis

        if (rank > cumulativeRank) {
            cumulativeRank = rank
        }

        if (!jiNotationLevelsBestHistoryRanks[ jiNotationLevel ]) {
            jiNotationLevelsBestHistoryRanks[ jiNotationLevel ] = []
        }
        if (!jiNotationLevelsBestHistoryRanks[ jiNotationLevel ][ rank ]) {
            jiNotationLevelsBestHistoryRanks[ jiNotationLevel ][ rank ] = 0
        }
        jiNotationLevelsBestHistoryRanks[ jiNotationLevel ][ rank ] =
            increment(jiNotationLevelsBestHistoryRanks[ jiNotationLevel ][ rank ] as number)

        if (!jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ]) {
            jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ] = []
        }
        if (!jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ][ cumulativeRank ]) {
            jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ][ cumulativeRank ] = 0
        }
        jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ][ cumulativeRank ] =
            increment(jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ][ cumulativeRank ])
    })
}

export {
    jiNotationLevelsBestHistoryRanks,
    jiNotationLevelsBestCumulativeHistoryRanks,
    updateJiNotationLevelAnalysis,
}
