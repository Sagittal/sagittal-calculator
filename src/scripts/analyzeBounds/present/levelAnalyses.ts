import { Level, LEVELS } from "../../../notations"
import { levelsBestCumulativeHistoryRanks, levelsBestHistoryRanks } from "../levels"
import { presentLevelAnalysis } from "./levelAnalysis"

const presentLevelAnalyses = () => {
    const presentedLevelAnalysis: string[] = []

    LEVELS.slice().reverse().forEach(level => {
        if (level === Level.INSANE) { return }

        const levelBestHistoryRanks: { [ index: number ]: number | undefined } = levelsBestHistoryRanks[ level ]
        const levelBestCumulativeHistoryRanks: { [ index: number ]: number } = levelsBestCumulativeHistoryRanks[ level ]

        presentedLevelAnalysis.push(presentLevelAnalysis(level, levelBestHistoryRanks, levelBestCumulativeHistoryRanks))
    })

    return "\n\n   ---   Level Analyses   ---   \n\n\n" + presentedLevelAnalysis.join("\n\n")
}

export {
    presentLevelAnalyses,
}
