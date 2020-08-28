import { BOUNDS } from "../../sagittal"
import { analyzeBound } from "./bound"
import { computeHistories } from "./plot"
import { AnalyzedBound } from "./types"

const analyzeBounds = (): AnalyzedBound[] => {
    return BOUNDS.map(bound => {
        const histories = computeHistories(bound)

        return analyzeBound(histories, bound)
    })
}

export {
    analyzeBounds,
}
