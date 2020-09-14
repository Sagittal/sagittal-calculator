import { Cents, sum, Sum } from "../../../general"
import { EventAnalysis } from "./analyzeEvents"

const computeHistoryTotalDistance = (eventAnalyses: EventAnalysis[]): Sum<Cents> => {
    const distances = eventAnalyses.map((eventAnalysis: EventAnalysis): Cents => eventAnalysis.distance)

    return sum(...distances)
}

export {
    computeHistoryTotalDistance,
}
