import { Count, formatTable, Integer, Io, Maybe, Rank } from "../../../../../general"
import { JiNotationLevel } from "../../../../../sagittal"
import { EventAnalysis } from "../../../history"
import { computeJiNotationLevelAnalysisHeaderRow } from "./levelAnalysisHeaderRow"
import { computeLevelAnalysisRowColors } from "./levelAnalysisRowColors"
import { computeLevelAnalysisRows } from "./levelAnalysisRows"

const formatJiNotationLevelAnalysis = (
    jiNotationLevel: JiNotationLevel,
    jiNotationLevelsBestHistoryRanks: Record<number, Maybe<Count<Integer & Rank<EventAnalysis>>>>,
    jiNotationLevelsBestCumulativeHistoryRanks: Record<number, Count<Integer & Rank<EventAnalysis>>>,
): Io => {
    const jiNotationLevelAnalysisHeaderRow = computeJiNotationLevelAnalysisHeaderRow(jiNotationLevel)

    const levelAnalysisRows = computeLevelAnalysisRows(
        jiNotationLevelsBestHistoryRanks,
        jiNotationLevelsBestCumulativeHistoryRanks,
    )
    const levelAnalysisRowColors = computeLevelAnalysisRowColors(jiNotationLevelsBestHistoryRanks)
    levelAnalysisRowColors.unshift(undefined)
    
    const levelAnalysisTable = [
        jiNotationLevelAnalysisHeaderRow,
        ...levelAnalysisRows,
    ]
    
    return formatTable(levelAnalysisTable, { colors: levelAnalysisRowColors })
}

export {
    formatJiNotationLevelAnalysis,
}
