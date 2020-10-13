import { Abs, Cents, sum, Sum } from "../../../general"
import { BoundClassEventAnalysis } from "./events"

const computeBoundClassHistoryTotalDistance = (boundClassEventAnalyses: BoundClassEventAnalysis[]): Sum<Abs<Cents>> => {
    const distances = boundClassEventAnalyses
        .map((boundClassEventAnalysis: BoundClassEventAnalysis): Abs<Cents> => boundClassEventAnalysis.distance)

    return sum(...distances)
}

export {
    computeBoundClassHistoryTotalDistance,
}
