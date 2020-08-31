import { BOUNDS } from "../../sagittal"
import { analyzeBound, AnalyzedBound } from "./analyzeBound"
import { computeHistories } from "./histories"

const analyzeBounds = (): AnalyzedBound[] => {
    return BOUNDS.map(bound => {
        const histories = computeHistories(bound)

        return analyzeBound(histories, bound)
    })
}

export {
    analyzeBounds,
}
