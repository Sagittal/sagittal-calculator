import { Count, formatIntegerDecimal, IntegerDecimal, Rank, RecordKey, Row } from "../../../../../general"
import { BoundType, JiNotationLevel } from "../../../../../sagittal"
import { jiNotationLevelsBestCumulativeHistoryRanks, jiNotationLevelsBestHistoryRanks } from "../../../globals"
import { FORMATTED_RANKS } from "../rankNames"

const computeJiNotationLevelAnalysisRows = (jiNotationLevel: JiNotationLevel): Array<Row<{ of: JiNotationLevel }>> => {
    const rows = [] as Array<Row<{ of: JiNotationLevel }>>

    const jiNotationLevelsBestHistoryRanksEntries = Object.entries(
        jiNotationLevelsBestHistoryRanks[ jiNotationLevel ],
    ) as unknown[] as Array<[RecordKey<IntegerDecimal & Rank<BoundType>>, Count<IntegerDecimal & Rank<BoundType>>]>

    jiNotationLevelsBestHistoryRanksEntries
        .forEach((
            [rank, bestHistoryRankCount]:
                [RecordKey<IntegerDecimal & Rank<BoundType>>, Count<IntegerDecimal & Rank<BoundType>>],
        ): void => {
            let formattedBestHistoryRankCount =
                formatIntegerDecimal(bestHistoryRankCount as Count<IntegerDecimal & Rank<BoundType>>, { align: true })

            const bestCumulativeHistoryRankCount = jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ][ rank ]
            let formattedBestCumulativeHistoryRankCount =
                formatIntegerDecimal(bestCumulativeHistoryRankCount, { align: true })

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
