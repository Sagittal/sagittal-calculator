import {JiNotationBoundClassEntry, JI_NOTATION_BOUND_CLASS_ENTRIES} from "../../sagittal"
import {analyzeJiNotationBoundClass, JiNotationBoundClassAnalysis} from "./boundClass"
import {computeHistories} from "./histories"

const analyzeJiNotationBoundClasses = (): JiNotationBoundClassAnalysis[] =>
    JI_NOTATION_BOUND_CLASS_ENTRIES.map(
        ([boundClassId, jiNotationBoundClass]: JiNotationBoundClassEntry): JiNotationBoundClassAnalysis => {
            const histories = computeHistories(jiNotationBoundClass)

            return analyzeJiNotationBoundClass(histories, [boundClassId, jiNotationBoundClass])
        },
    )

export {
    analyzeJiNotationBoundClasses,
}
