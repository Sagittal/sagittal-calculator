import { Count, increment, Integer, Maybe, Rank } from "../../../general"
import { JiNotationLevel } from "../../../sagittal"
import { EventAnalysis, HistoryAnalysis } from "../history"

const jiNotationLevelsBestHistoryRanks:
    Record<JiNotationLevel, Record<number, Maybe<Count<Integer & Rank<EventAnalysis>>>>> =
    {} as Record<JiNotationLevel, Record<number, Maybe<Count<Integer & Rank<EventAnalysis>>>>>
const jiNotationLevelsBestCumulativeHistoryRanks:
    Record<JiNotationLevel, Record<number, Count<Integer & Rank<EventAnalysis>>>> =
    {} as Record<JiNotationLevel, Record<number, Count<Integer & Rank<EventAnalysis>>>>

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
            jiNotationLevelsBestHistoryRanks[ jiNotationLevel ][ rank ] =
                0 as Count<Integer & Rank<EventAnalysis>>
        }
        jiNotationLevelsBestHistoryRanks[ jiNotationLevel ][ rank ] = increment(
            jiNotationLevelsBestHistoryRanks[ jiNotationLevel ][ rank ] as Count<Integer & Rank<EventAnalysis>>
        )

        if (!jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ]) {
            jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ] = []
        }
        if (!jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ][ cumulativeRank ]) {
            jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ][ cumulativeRank ] =
                0 as Count<Integer & Rank<EventAnalysis>>
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
