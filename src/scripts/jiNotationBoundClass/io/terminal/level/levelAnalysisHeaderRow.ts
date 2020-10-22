import {Row} from "../../../../../general"
import {formatJiNotationLevel, JiNotationLevel} from "../../../../../sagittal"

const computeJiNotationLevelAnalysisHeaderRow = (jiNotationLevel: JiNotationLevel): Row<{of: JiNotationLevel}> =>
    [formatJiNotationLevel(jiNotationLevel), "here", "cumulative"] as Row<{of: JiNotationLevel}>

export {
    computeJiNotationLevelAnalysisHeaderRow,
}
