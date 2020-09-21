import { Count, formatInteger, Integer, Rank, RecordKey, Row } from "../../../../../general"
import { BoundType, JiNotationLevel } from "../../../../../sagittal"
import { jiNotationLevelsBestCumulativeHistoryRanks, jiNotationLevelsBestHistoryRanks } from "../../../globals"
import { FORMATTED_RANKS } from "../rankNames"

const computeJiNotationLevelAnalysisRows = (jiNotationLevel: JiNotationLevel): Array<Row<{ of: JiNotationLevel }>> => {
    const rows = [] as Array<Row<{ of: JiNotationLevel }>>

    const jiNotationLevelsBestHistoryRanksEntries = Object.entries(
        jiNotationLevelsBestHistoryRanks[ jiNotationLevel ],
    ) as unknown[] as Array<[RecordKey<Integer & Rank<BoundType>>, Count<Integer & Rank<BoundType>>]>

    jiNotationLevelsBestHistoryRanksEntries
        .forEach((
            [rank, bestHistoryRankCount]:
                [RecordKey<Integer & Rank<BoundType>>, Count<Integer & Rank<BoundType>>],
        ): void => {
            let formattedBestHistoryRankCount =
                formatInteger(bestHistoryRankCount as Count<Integer & Rank<BoundType>>)

            const bestCumulativeHistoryRankCount = jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ][ rank ]
            let formattedBestCumulativeHistoryRankCount = formatInteger(bestCumulativeHistoryRankCount)

            const jiNotationLevelRankRow = [
                FORMATTED_RANKS[ rank ],
                formattedBestHistoryRankCount,
                formattedBestCumulativeHistoryRankCount,
            ] as Row as Row<{ of: JiNotationLevel }>

            rows.push(jiNotationLevelRankRow)
        })

    return rows
}

export {
    computeJiNotationLevelAnalysisRows,
}
