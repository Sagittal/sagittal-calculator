import { JI_BOUNDS } from "../../sagittal"
import { analyzeBound, BoundAnalysis } from "./analyzeBound"
import { computeHistories } from "./histories"

const analyzeBounds = (): BoundAnalysis[] => {
    return JI_BOUNDS.map(bound => {
        const histories = computeHistories(bound)

        return analyzeBound(histories, bound)
    })
}

export {
    analyzeBounds,
}
