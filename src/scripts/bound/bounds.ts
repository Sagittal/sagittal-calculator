import { Bound, JI_BOUNDS } from "../../sagittal"
import { analyzeBound, BoundAnalysis } from "./analyzeBound"
import { computeHistories } from "./histories"

// TODO: I don't actually need to change anything in this script group to acknowledge that this is all only relevant
//  to the JI notation, do I? I saw some variables named "jiBound", but mightn't it be tedious to acknowledge that
//  everywhere? maybe I wouldn't rename History or Event etc. but since Bound actually lives in sagittal/notations/ji
//  perhaps it should be JiBound

const analyzeBounds = (): BoundAnalysis[] => {
    return JI_BOUNDS.map((bound: Bound): BoundAnalysis => {
        const histories = computeHistories(bound)

        return analyzeBound(histories, bound)
    })
}

export {
    analyzeBounds,
}
