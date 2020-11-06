import {Base, isUndefined, log, Parameter, Score} from "../../../../general"
import {LfcUnpopularityEstimate, WeightedAntivotesOptions} from "../types"

const computeWeightedAntivotes = (
    antivotes: Score<LfcUnpopularityEstimate>,
    options: WeightedAntivotesOptions,
): Score<LfcUnpopularityEstimate> => {
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
        ) as number as Score<LfcUnpopularityEstimate>
    }
    if (!isUndefined(powerExponent)) {
        weightedAntivotes = weightedAntivotes ** powerExponent as Score<LfcUnpopularityEstimate>
    }
    if (!isUndefined(powerBase)) {
        weightedAntivotes = powerBase ** weightedAntivotes as Score<LfcUnpopularityEstimate>

    }
    weightedAntivotes = weightedAntivotes * coefficient as Score<LfcUnpopularityEstimate>

    return weightedAntivotes as Score<LfcUnpopularityEstimate>
}

export {
    computeWeightedAntivotes,
}
