import {JiNotationBoundClass, JI_NOTATION_BOUND_CLASSES} from "../../sagittal"
import {analyzeJiNotationBoundClass, JiNotationBoundClassAnalysis} from "./boundClass"
import {computeHistories} from "./histories"

const analyzeJiNotationBoundClasses = (): JiNotationBoundClassAnalysis[] => {
    return JI_NOTATION_BOUND_CLASSES.map((jiNotationBoundClass: JiNotationBoundClass): JiNotationBoundClassAnalysis => {
        const histories = computeHistories(jiNotationBoundClass)

        return analyzeJiNotationBoundClass(histories, jiNotationBoundClass)
    })
}

export {
    analyzeJiNotationBoundClasses,
}
