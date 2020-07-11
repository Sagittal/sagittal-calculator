import { AnalyzedHistory, EventRank } from "./types"
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

        if (!levelsBestHistoryRanks[ level ]) levelsBestHistoryRanks[ level ] = [] // todo: also type guard
        // @ts-ignore
        if (!levelsBestHistoryRanks[ level ][ rank ]) levelsBestHistoryRanks[ level ][ rank ] = 0
        // @ts-ignore
        levelsBestHistoryRanks[ level ][ rank ] += 1

        if (!levelsBestCumulativeHistoryRanks[ level ]) levelsBestCumulativeHistoryRanks[ level ] = []
        // @ts-ignore
        if (!levelsBestCumulativeHistoryRanks[ level ][ cumulativeRank ]) levelsBestCumulativeHistoryRanks[ level ][ cumulativeRank ] = 0
        // @ts-ignore
        levelsBestCumulativeHistoryRanks[ level ][ cumulativeRank ] += 1
    })
}

export {
    levelsBestHistoryRanks,
    levelsBestCumulativeHistoryRanks,
    updateLevelAnalysis,
}
