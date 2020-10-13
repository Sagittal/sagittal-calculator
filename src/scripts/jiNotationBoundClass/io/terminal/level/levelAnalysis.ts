import { formatTable, Io } from "../../../../../general"
import { JiNotationLevel } from "../../../../../sagittal"
import { computeJiNotationLevelAnalysisHeaderRow } from "./levelAnalysisHeaderRow"
import { computeJiNotationLevelAnalysisRowColors } from "./levelAnalysisRowColors"
import { computeJiNotationLevelAnalysisRows } from "./levelAnalysisRows"

const formatJiNotationLevelAnalysis = (jiNotationLevel: JiNotationLevel): Io => {
    const jiNotationLevelAnalysisHeaderRow = computeJiNotationLevelAnalysisHeaderRow(jiNotationLevel)
    const jiNotationLevelAnalysisRows = computeJiNotationLevelAnalysisRows(jiNotationLevel)
    const jiNotationLevelAnalysisRowColors = computeJiNotationLevelAnalysisRowColors(jiNotationLevel)
    jiNotationLevelAnalysisRowColors.unshift(undefined)

    const jiNotaitonLevelAnalysisTable = [
        jiNotationLevelAnalysisHeaderRow,
        ...jiNotationLevelAnalysisRows,
    ]

    return formatTable(jiNotaitonLevelAnalysisTable, { colors: jiNotationLevelAnalysisRowColors })
}

export {
    formatJiNotationLevelAnalysis,
}
