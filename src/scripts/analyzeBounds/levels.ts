import { AnalyzedHistory } from "./types"
import { Level } from "../../notations/ji/types"

const levelsBestHistoryRanks: { [key in Level]: { [index: number]: number | undefined }} = {} as { [key in Level]: { [index: number]: number | undefined }}
const levelsBestCumulativeHistoryRanks: { [key in Level]: { [index: number]: number }} = {} as { [key in Level]: { [index: number]: number }}

const updateLevelAnalysis = (bestPossibleHistory: AnalyzedHistory) => {
    let cumulativeRank = 0
    bestPossibleHistory.events.forEach(event => {
        const { level, rank } = event

        if (rank > cumulativeRank) {
            cumulativeRank = rank
        }

        if (!levelsBestHistoryRanks[ level ]) levelsBestHistoryRanks[ level ] = []
        if (!levelsBestHistoryRanks[ level ][ rank ]) levelsBestHistoryRanks[ level ][ rank ] = 0
        levelsBestHistoryRanks[ level ][ rank ] = (levelsBestHistoryRanks[ level ][ rank ] as number) + 1

        if (!levelsBestCumulativeHistoryRanks[ level ]) levelsBestCumulativeHistoryRanks[ level ] = []
        if (!levelsBestCumulativeHistoryRanks[ level ][ cumulativeRank ]) levelsBestCumulativeHistoryRanks[ level ][ cumulativeRank ] = 0
        levelsBestCumulativeHistoryRanks[ level ][ cumulativeRank ] = levelsBestCumulativeHistoryRanks[ level ][ cumulativeRank ] + 1
    })
}

export {
    levelsBestHistoryRanks,
    levelsBestCumulativeHistoryRanks,
    updateLevelAnalysis,
}
