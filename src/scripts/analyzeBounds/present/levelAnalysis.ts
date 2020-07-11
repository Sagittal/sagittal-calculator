import { FORMATTED_RANK_NAMES } from "./rank"
import { presentLevel } from "./level"
import { COLORS } from "./colors"
import { Level } from "../../../notations/ji/types"

const presentLevelAnalysis = (level: Level, levelsBestHistoryRanks: { [ index: number ]: number | undefined }, levelsBestCumulativeHistoryRanks: { [ index: number ]: number }) => {
    const presentedLevelAnalysis: string[] = [ `${presentLevel(level)}            \there\tcmltv` ]

    const levelsBestHistoryRanksEntries = Object.entries(levelsBestHistoryRanks) as unknown as Array<[number, number]>

    levelsBestHistoryRanksEntries.forEach(([ rankIndex, bestHistoryRankCount ]) => {
        let presentedBestHistoryRankCount = bestHistoryRankCount.toString()
        while (presentedBestHistoryRankCount.length < 3) {
            presentedBestHistoryRankCount = " " + presentedBestHistoryRankCount
        }

        const bestCumulativeHistoryRankCount = levelsBestCumulativeHistoryRanks[ rankIndex ]
        let presentedBestCumulativeHistoryRankCount = bestCumulativeHistoryRankCount.toString()
        while (presentedBestCumulativeHistoryRankCount.length < 3) {
            presentedBestCumulativeHistoryRankCount = " " + presentedBestCumulativeHistoryRankCount
        }

        presentedLevelAnalysis.push(`${FORMATTED_RANK_NAMES[ rankIndex ]}\t${presentedBestHistoryRankCount}\t${presentedBestCumulativeHistoryRankCount}`[ COLORS[ rankIndex ] ])
    })

    return presentedLevelAnalysis.join("\n")
}

export {
    presentLevelAnalysis,
}
