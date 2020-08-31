import { colorize, Io, Maybe } from "../../../../../general"
import { formatLevel, Level } from "../../../../../sagittal"
import { BOUND_COLORS } from "../boundColors"
import { FORMATTED_RANK_NAMES } from "../rankNames"

const formatLevelAnalysis = (
    level: Level,
    levelsBestHistoryRanks: { [ index: number ]: Maybe<number> },
    levelsBestCumulativeHistoryRanks: { [ index: number ]: number },
): Io => {
    const formattedLevelAnalysis: Io[] = [`${formatLevel(level)}            \there\tcmltv` as Io]

    const levelsBestHistoryRanksEntries = Object.entries(levelsBestHistoryRanks) as unknown[] as Array<[number, number]>

    levelsBestHistoryRanksEntries.forEach(([rankIndex, bestHistoryRankCount]) => {
        let formattedBestHistoryRankCount = bestHistoryRankCount.toString()
        while (formattedBestHistoryRankCount.length < 3) {
            formattedBestHistoryRankCount = " " + formattedBestHistoryRankCount
        }

        const bestCumulativeHistoryRankCount = levelsBestCumulativeHistoryRanks[ rankIndex ]
        let formattedBestCumulativeHistoryRankCount = bestCumulativeHistoryRankCount.toString()
        while (formattedBestCumulativeHistoryRankCount.length < 3) {
            formattedBestCumulativeHistoryRankCount = " " + formattedBestCumulativeHistoryRankCount
        }

        const levelRankRowText = `${FORMATTED_RANK_NAMES[ rankIndex ]}\t${formattedBestHistoryRankCount}\t${formattedBestCumulativeHistoryRankCount}` as Io
        const color = BOUND_COLORS[ rankIndex ]
        formattedLevelAnalysis.push(colorize(levelRankRowText, color))
    })

    return formattedLevelAnalysis.join("\n") as Io
}

export {
    formatLevelAnalysis,
}
