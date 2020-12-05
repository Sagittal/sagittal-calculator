import {Base, Grade, isUndefined, log, Parameter} from "@sagittal/general"
import {LfcUnpopularityEstimate, WeightedAntivotesOptions} from "../types"

const computeWeightedAntivotes = (
    antivotes: Grade<LfcUnpopularityEstimate>,
    options: WeightedAntivotesOptions,
): Grade<LfcUnpopularityEstimate> => {
    const {
        coefficient = 1 as Parameter,
        logarithmBase,
        powerExponent,
        powerBase,
    } = options

    let weightedAntivotes = antivotes

    if (!isUndefined(logarithmBase)) {
        weightedAntivotes = log(
            weightedAntivotes,
            logarithmBase as number as Base,
        ) as number as Grade<LfcUnpopularityEstimate>
    }
    if (!isUndefined(powerExponent)) {
        weightedAntivotes = weightedAntivotes ** powerExponent as Grade<LfcUnpopularityEstimate>
    }
    if (!isUndefined(powerBase)) {
        weightedAntivotes = powerBase ** weightedAntivotes as Grade<LfcUnpopularityEstimate>

    }
    weightedAntivotes = weightedAntivotes * coefficient as Grade<LfcUnpopularityEstimate>

    return weightedAntivotes as Grade<LfcUnpopularityEstimate>
}

export {
    computeWeightedAntivotes,
}
