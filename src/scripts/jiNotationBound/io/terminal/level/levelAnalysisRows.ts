import { Count, formatInteger, Integer, Maybe, Rank, Row } from "../../../../../general"
import { JiNotationLevel } from "../../../../../sagittal"
import { EventAnalysis } from "../../../history"
import { FORMATTED_RANK_NAMES } from "../rankNames"

const computeLevelAnalysisRows = (
    jiNotationLevelsBestHistoryRanks: Record<number, Maybe<Count<Integer & Rank<EventAnalysis>>>>,
    jiNotationLevelsBestCumulativeHistoryRanks: Record<number, Count<Integer & Rank<EventAnalysis>>>,
): Array<Row<{ of: JiNotationLevel }>> => {
    const rows = [] as Array<Row<{ of: JiNotationLevel }>>

    const jiNotationLevelsBestHistoryRanksEntries =
        Object.entries(jiNotationLevelsBestHistoryRanks) as unknown[] as Array<[number, Integer & Rank<EventAnalysis>]>

    jiNotationLevelsBestHistoryRanksEntries
        .forEach(([rankIndex, bestHistoryRankCount]: [number, Integer & Rank<EventAnalysis>]): void => {
            let formattedBestHistoryRankCount = formatInteger(bestHistoryRankCount)

            const bestCumulativeHistoryRankCount = jiNotationLevelsBestCumulativeHistoryRanks[ rankIndex ]
            let formattedBestCumulativeHistoryRankCount = formatInteger(bestCumulativeHistoryRankCount)

            const jiNotationLevelRankRow = [
                FORMATTED_RANK_NAMES[ rankIndex ],
                formattedBestHistoryRankCount,
                formattedBestCumulativeHistoryRankCount,
            ] as Row<{ of: JiNotationLevel }>

            rows.push(jiNotationLevelRankRow)
        })

    return rows
}

export {
    computeLevelAnalysisRows,
}
