import { Level, LEVELS } from "../../../notations"
import { levelsBestCumulativeHistoryRanks, levelsBestHistoryRanks } from "../levels"
import { formatLevelAnalysis } from "./levelAnalysis"

const formatLevelAnalyses = (): string => {
    const formattedLevelAnalysis: string[] = []

    LEVELS.slice().reverse().forEach(level => {
        if (level === Level.INSANE) {
            return
        }

        const levelBestHistoryRanks: { [ index: number ]: number | undefined } = levelsBestHistoryRanks[ level ]
        const levelBestCumulativeHistoryRanks: { [ index: number ]: number } = levelsBestCumulativeHistoryRanks[ level ]

        formattedLevelAnalysis.push(formatLevelAnalysis(level, levelBestHistoryRanks, levelBestCumulativeHistoryRanks))
    })

    return "\n\n   ---   Level Analyses   ---   \n\n\n" + formattedLevelAnalysis.join("\n\n")
}

export {
    formatLevelAnalyses,
}
