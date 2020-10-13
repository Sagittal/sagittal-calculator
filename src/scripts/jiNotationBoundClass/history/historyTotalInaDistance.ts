import { Multiplier, sum, Sum } from "../../../general"
import { Ina } from "../../../sagittal"
import { BoundClassEventAnalysis } from "./events"

const computeBoundClassHistoryTotalInaDistance = (
    boundClassEventAnalyses: BoundClassEventAnalysis[],
): Sum<Multiplier<Ina>> => {
    const inaDistances = boundClassEventAnalyses
        .map((boundClassEventAnalysis: BoundClassEventAnalysis): Multiplier<Ina> => boundClassEventAnalysis.inaDistance)

    return sum(...inaDistances)
}

export {
    computeBoundClassHistoryTotalInaDistance,
}
