import { Abs, Cents, sum, Sum } from "../../../general"
import { EventAnalysis } from "./events"

const computeHistoryTotalDistance = (eventAnalyses: EventAnalysis[]): Sum<Abs<Cents>> => {
    const distances = eventAnalyses.map((eventAnalysis: EventAnalysis): Abs<Cents> => eventAnalysis.distance)

    return sum(...distances)
}

export {
    computeHistoryTotalDistance,
}
