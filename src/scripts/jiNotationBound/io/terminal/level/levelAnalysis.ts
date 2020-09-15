import { colorize, Io, Maybe } from "../../../../../general"
import { formatJiNotationLevel, JiNotationLevel } from "../../../../../sagittal"
import { JI_NOTATION_BOUND_COLORS } from "../boundColors"
import { FORMATTED_RANK_NAMES } from "../rankNames"

const formatJiNotationLevelAnalysis = (
    jiNotationLevel: JiNotationLevel,
    jiNotationLevelsBestHistoryRanks: { [ index: number ]: Maybe<number> },
    jiNotationLevelsBestCumulativeHistoryRanks: { [ index: number ]: number },
): Io => {
    const formattedJiNotationLevelAnalysis: Io[] =
        [`${formatJiNotationLevel(jiNotationLevel)}            \there\tcmltv` as Io]

    const jiNotationLevelsBestHistoryRanksEntries =
        Object.entries(jiNotationLevelsBestHistoryRanks) as unknown[] as Array<[number, number]>

    jiNotationLevelsBestHistoryRanksEntries.forEach(([rankIndex, bestHistoryRankCount]: [number, number]): void => {
        let formattedBestHistoryRankCount = bestHistoryRankCount.toString()
        while (formattedBestHistoryRankCount.length < 3) {
            formattedBestHistoryRankCount = " " + formattedBestHistoryRankCount
        }

        const bestCumulativeHistoryRankCount = jiNotationLevelsBestCumulativeHistoryRanks[ rankIndex ]
        let formattedBestCumulativeHistoryRankCount = bestCumulativeHistoryRankCount.toString()
        while (formattedBestCumulativeHistoryRankCount.length < 3) {
            formattedBestCumulativeHistoryRankCount = " " + formattedBestCumulativeHistoryRankCount
        }

        const jiNotationLevelRankRowText = `${FORMATTED_RANK_NAMES[ rankIndex ]}\t${formattedBestHistoryRankCount}\t${formattedBestCumulativeHistoryRankCount}` as Io
        const color = JI_NOTATION_BOUND_COLORS[ rankIndex ]
        formattedJiNotationLevelAnalysis.push(colorize(jiNotationLevelRankRowText, color))
    })

    return formattedJiNotationLevelAnalysis.join("\n") as Io
}

export {
    formatJiNotationLevelAnalysis,
}
