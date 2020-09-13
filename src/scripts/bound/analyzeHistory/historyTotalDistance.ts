import { Cents, Sum } from "../../../general"
import { EventAnalysis } from "./analyzeEvents"

const computeHistoryTotalDistance = (eventAnalyses: EventAnalysis[]): Sum<Cents> =>
    eventAnalyses.reduce(
        (distance, eventAnalysis): Sum<Cents> =>
            distance + eventAnalysis.distance as Sum<Cents>,
        0 as Sum<Cents>,
    )

export {
    computeHistoryTotalDistance,
}
