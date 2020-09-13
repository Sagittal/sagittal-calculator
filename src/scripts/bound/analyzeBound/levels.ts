import { Maybe } from "../../../general"
import { Level } from "../../../sagittal"
import { EventAnalysis, HistoryAnalysis } from "../analyzeHistory"

const levelsBestHistoryRanks: Record<Level, { [ index: number ]: Maybe<number> }> =
    {} as Record<Level, { [ index: number ]: Maybe<number> }>
const levelsBestCumulativeHistoryRanks: Record<Level, { [ index: number ]: number }> =
    {} as Record<Level, { [ index: number ]: number }>

const updateLevelAnalysis = (bestPossibleHistory: HistoryAnalysis): void => {
    let cumulativeRank = 0
    bestPossibleHistory.events.forEach((eventAnalysis: EventAnalysis): void => {
        const { level, rank } = eventAnalysis

        if (rank > cumulativeRank) {
            cumulativeRank = rank
        }

        if (!levelsBestHistoryRanks[ level ]) {
            levelsBestHistoryRanks[ level ] = []
        }
        if (!levelsBestHistoryRanks[ level ][ rank ]) {
            levelsBestHistoryRanks[ level ][ rank ] = 0
        }
        levelsBestHistoryRanks[ level ][ rank ] = (levelsBestHistoryRanks[ level ][ rank ] as number) + 1

        if (!levelsBestCumulativeHistoryRanks[ level ]) {
            levelsBestCumulativeHistoryRanks[ level ] = []
        }
        if (!levelsBestCumulativeHistoryRanks[ level ][ cumulativeRank ]) {
            levelsBestCumulativeHistoryRanks[ level ][ cumulativeRank ] = 0
        }
        levelsBestCumulativeHistoryRanks[ level ][ cumulativeRank ] =
            levelsBestCumulativeHistoryRanks[ level ][ cumulativeRank ] + 1
    })
}

export {
    levelsBestHistoryRanks,
    levelsBestCumulativeHistoryRanks,
    updateLevelAnalysis,
}
