import {Abs, Cents, sum, Sum} from "@sagittal/general"
import {BoundEventAnalysis} from "./events"

const computeBoundHistoryTotalDistance = (boundEventAnalyses: BoundEventAnalysis[]): Sum<Abs<Cents>> => {
    const distances = boundEventAnalyses
        .map((boundEventAnalysis: BoundEventAnalysis): Abs<Cents> => boundEventAnalysis.distance)

    return sum(...distances)
}

export {
    computeBoundHistoryTotalDistance,
}
