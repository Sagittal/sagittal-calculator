import { IO, Maybe } from "../../../../general"
import { Level } from "../../../../notations"
import { BOUND_COLORS } from "./boundColors"
import { formatLevel } from "./level"
import { FORMATTED_RANK_NAMES } from "./rank"

const formatLevelAnalysis = (
    level: Level,
    levelsBestHistoryRanks: { [ index: number ]: Maybe<number> },
    levelsBestCumulativeHistoryRanks: { [ index: number ]: number },
): IO => {
    const formattedLevelAnalysis: IO[] = [`${formatLevel(level)}            \there\tcmltv` as IO]

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

        formattedLevelAnalysis.push(`${FORMATTED_RANK_NAMES[ rankIndex ]}\t${formattedBestHistoryRankCount}\t${formattedBestCumulativeHistoryRankCount}`[ BOUND_COLORS[ rankIndex ] ] as IO)
    })

    return formattedLevelAnalysis.join("\n") as IO
}

export {
    formatLevelAnalysis,
}
