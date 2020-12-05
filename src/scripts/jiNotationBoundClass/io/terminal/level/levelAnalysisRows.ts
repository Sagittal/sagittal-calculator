import {Count, Decimal, formatIntegerDecimal, Rank, RecordKey, Row} from "@sagittal/general"
import {BoundType, JiNotationLevelId} from "@sagittal/system"
import {jiNotationLevelsBestCumulativeHistoryRanks, jiNotationLevelsBestHistoryRanks} from "../../../globals"
import {FORMATTED_RANKS} from "../rankNames"

const computeJiNotationLevelAnalysisRows = (
    jiNotationLevel: JiNotationLevelId,
): Array<Row<{of: JiNotationLevelId}>> => {
    const rows = [] as Array<Row<{of: JiNotationLevelId}>>

    const jiNotationLevelsBestHistoryRanksEntries = Object.entries(
        jiNotationLevelsBestHistoryRanks[jiNotationLevel],
    ) as unknown[] as Array<[
        RecordKey<Decimal<{integer: true}> & Rank<BoundType>>,
        Count<Decimal<{integer: true}> & Rank<BoundType>>
    ]>

    jiNotationLevelsBestHistoryRanksEntries
        .forEach((
            [rank, bestHistoryRankCount]: [
                RecordKey<Decimal<{integer: true}> & Rank<BoundType>>,
                Count<Decimal<{integer: true}> & Rank<BoundType>>
            ],
        ): void => {
            let formattedBestHistoryRankCount = formatIntegerDecimal(
                bestHistoryRankCount as Count<Decimal<{integer: true}> & Rank<BoundType>>,
                {align: true},
            )

            const bestCumulativeHistoryRankCount = jiNotationLevelsBestCumulativeHistoryRanks[jiNotationLevel][rank]
            let formattedBestCumulativeHistoryRankCount =
                formatIntegerDecimal(bestCumulativeHistoryRankCount, {align: true})

            const jiNotationLevelRankRow = [
                FORMATTED_RANKS[rank],
                formattedBestHistoryRankCount,
                formattedBestCumulativeHistoryRankCount,
            ] as Row as Row<{of: JiNotationLevelId}>

            rows.push(jiNotationLevelRankRow)
        })

    return rows
}

export {
    computeJiNotationLevelAnalysisRows,
}
