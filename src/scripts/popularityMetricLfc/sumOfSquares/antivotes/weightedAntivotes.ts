import {Base, isUndefined, log} from "../../../../general"
import {Parameter} from "../../../types"
import {Antivotes, WeightedAntivotesOptions} from "../types"

const computeWeightedAntivotes = (antivotes: Antivotes, options: WeightedAntivotesOptions): Antivotes => {
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
        ) as number as Antivotes
    }
    if (!isUndefined(powerExponent)) {
        weightedAntivotes = weightedAntivotes ** powerExponent as Antivotes
    }
    if (!isUndefined(powerBase)) {
        weightedAntivotes = powerBase ** weightedAntivotes as Antivotes

    }
    weightedAntivotes = weightedAntivotes * coefficient as Antivotes

    return weightedAntivotes as Antivotes
}

export {
    computeWeightedAntivotes,
}
