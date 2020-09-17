import { JiNotationBound, JI_NOTATION_BOUNDS } from "../../sagittal"
import { analyzeJiNotationBound, JiNotationBoundAnalysis } from "./bound"
import { computeHistories } from "./histories"

const analyzeJiNotationBounds = (): JiNotationBoundAnalysis[] => {
    return JI_NOTATION_BOUNDS.map((jiNotationBound: JiNotationBound): JiNotationBoundAnalysis => {
        const histories = computeHistories(jiNotationBound)

        return analyzeJiNotationBound(histories, jiNotationBound)
    })
}

// TODO: When adding the second approach to bounds analysis, don’t get rid of the old one
//  http://forum.sagittal.org/viewtopic.php?p=1808#p1808

export {
    analyzeJiNotationBounds,
}
