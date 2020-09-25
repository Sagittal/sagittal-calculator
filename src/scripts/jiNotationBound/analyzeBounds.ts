import { JiNotationBound, JI_NOTATION_BOUNDS } from "../../sagittal"
import { analyzeJiNotationBound, JiNotationBoundAnalysis } from "./bound"
import { computeHistories } from "./histories"

const analyzeJiNotationBounds = (): JiNotationBoundAnalysis[] => {
    return JI_NOTATION_BOUNDS.map((jiNotationBound: JiNotationBound): JiNotationBoundAnalysis => {
        const histories = computeHistories(jiNotationBound)

        return analyzeJiNotationBound(histories, jiNotationBound)
    })
}

export {
    analyzeJiNotationBounds,
}
