import {LEVELS} from "../../../notations/ji/levels"
import {levelsBestHistoryRanks, levelsBestCumulativeHistoryRanks} from "../levels"
import {presentLevelAnalysis} from "./levelAnalysis"

const presentLevelAnalyses = () => {
    const presentedLevelAnalysis = []

    LEVELS.slice().reverse().forEach(level => {
        if (level === "INSANE") return

        const levelBestHistoryRanks = levelsBestHistoryRanks[level]
        const levelBestCumulativeHistoryRanks = levelsBestCumulativeHistoryRanks[level]

        presentedLevelAnalysis.push(presentLevelAnalysis(level, levelBestHistoryRanks, levelBestCumulativeHistoryRanks))
    })

    return "\n\n   ---   Level Analyses   ---   \n\n\n" + presentedLevelAnalysis.join("\n\n")
}

export {
    presentLevelAnalyses,
}
