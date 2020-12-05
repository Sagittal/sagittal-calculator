import {formatTable, Io} from "@sagittal/general"
import {JiNotationLevelId} from "@sagittal/system"
import {computeJiNotationLevelAnalysisHeaderRow} from "./levelAnalysisHeaderRow"
import {computeJiNotationLevelAnalysisRowColors} from "./levelAnalysisRowColors"
import {computeJiNotationLevelAnalysisRows} from "./levelAnalysisRows"

const formatJiNotationLevelAnalysis = (jiNotationLevel: JiNotationLevelId): Io => {
    const jiNotationLevelAnalysisHeaderRow = computeJiNotationLevelAnalysisHeaderRow(jiNotationLevel)
    const jiNotationLevelAnalysisRows = computeJiNotationLevelAnalysisRows(jiNotationLevel)
    const jiNotationLevelAnalysisRowColors = computeJiNotationLevelAnalysisRowColors(jiNotationLevel)
    jiNotationLevelAnalysisRowColors.unshift(undefined)

    const jiNotationLevelAnalysisTable = [
        jiNotationLevelAnalysisHeaderRow,
        ...jiNotationLevelAnalysisRows,
    ]

    return formatTable(jiNotationLevelAnalysisTable, {colors: jiNotationLevelAnalysisRowColors})
}

export {
    formatJiNotationLevelAnalysis,
}
