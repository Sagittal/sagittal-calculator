import {Row} from "@sagittal/general"
import {formatJiNotationLevel, JiNotationLevelId} from "@sagittal/system"

const computeJiNotationLevelAnalysisHeaderRow = (jiNotationLevel: JiNotationLevelId): Row<{of: JiNotationLevelId}> =>
    [formatJiNotationLevel(jiNotationLevel), "here", "cumulative"] as Row<{of: JiNotationLevelId}>

export {
    computeJiNotationLevelAnalysisHeaderRow,
}
