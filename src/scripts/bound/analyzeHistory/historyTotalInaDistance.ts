import { Multiplier, Sum } from "../../../general"
import { Ina } from "../../../sagittal"
import { EventAnalysis } from "./analyzeEvents"

const computeHistoryTotalInaDistance = (eventAnalyses: EventAnalysis[]): Sum<Multiplier<Ina>> =>
    eventAnalyses.reduce(
        (inaDistance: Sum<Multiplier>, eventAnalysis: EventAnalysis) =>
            inaDistance + eventAnalysis.inaDistance as Sum<Multiplier<Ina>>,
        0 as Sum<Multiplier<Ina>>,
    )

export {
    computeHistoryTotalInaDistance,
}
