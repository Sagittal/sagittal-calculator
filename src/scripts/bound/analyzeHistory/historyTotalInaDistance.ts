import { Multiplier, sum, Sum } from "../../../general"
import { Ina } from "../../../sagittal"
import { EventAnalysis } from "./analyzeEvents"

const computeHistoryTotalInaDistance = (eventAnalyses: EventAnalysis[]): Sum<Multiplier<Ina>> => {
    const inaDistances = eventAnalyses.map((eventAnalysis: EventAnalysis): Multiplier<Ina> => eventAnalysis.inaDistance)

    return sum(...inaDistances)
}

export {
    computeHistoryTotalInaDistance,
}
