import { Count, increment, Integer, Rank } from "../../../general"
import { jiNotationLevelsBestCumulativeHistoryRanks, jiNotationLevelsBestHistoryRanks } from "../globals"
import { EventType } from "../histories"
import { EventAnalysis, HistoryAnalysis } from "../history"

const updateJiNotationLevelAnalysis = (bestPossibleHistory: HistoryAnalysis): void => {
    let cumulativeRank = 0
    bestPossibleHistory.eventAnalyses.forEach((eventAnalysis: EventAnalysis): void => {
        const { jiNotationLevel, rank } = eventAnalysis

        if (rank > cumulativeRank) {
            cumulativeRank = rank
        }

        if (!jiNotationLevelsBestHistoryRanks[ jiNotationLevel ]) {
            jiNotationLevelsBestHistoryRanks[ jiNotationLevel ] = {}
        }
        if (!jiNotationLevelsBestHistoryRanks[ jiNotationLevel ][ rank ]) {
            jiNotationLevelsBestHistoryRanks[ jiNotationLevel ][ rank ] =
                0 as Count<Integer & Rank<EventType>>
        }
        jiNotationLevelsBestHistoryRanks[ jiNotationLevel ][ rank ] = increment(
            jiNotationLevelsBestHistoryRanks[ jiNotationLevel ][ rank ] as Count<Integer & Rank<EventType>>,
        )

        if (!jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ]) {
            jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ] = {}
        }
        if (!jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ][ cumulativeRank ]) {
            jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ][ cumulativeRank ] =
                0 as Count<Integer & Rank<EventType>>
        }
        jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ][ cumulativeRank ] =
            increment(jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ][ cumulativeRank ])
    })
}

export {
    updateJiNotationLevelAnalysis,
}
