import {Multiplier, sum, Sum} from "@sagittal/general"
import {Ina} from "@sagittal/system"
import {BoundEventAnalysis} from "./events"

const computeBoundHistoryTotalInaDistance = (
    boundEventAnalyses: BoundEventAnalysis[],
): Sum<Multiplier<Ina>> => {
    const inaDistances = boundEventAnalyses
        .map((boundEventAnalysis: BoundEventAnalysis): Multiplier<Ina> => boundEventAnalysis.inaDistance)

    return sum(...inaDistances)
}

export {
    computeBoundHistoryTotalInaDistance,
}
