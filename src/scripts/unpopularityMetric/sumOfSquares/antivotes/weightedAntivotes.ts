import { Base, isUndefined, log, Power } from "../../../../general"
import { Antivotes, ComputeWeightedAntivotesOptions, ParameterValue } from "../types"

const computeWeightedAntivotes = (antivotes: Antivotes, options: ComputeWeightedAntivotesOptions): Antivotes => {
    const {
        coefficient = 1 as ParameterValue,
        logarithmBase,
        powerExponent,
        powerBase,
    } = options

    let weightedAntivotes = antivotes

    if (!isUndefined(logarithmBase)) {
        weightedAntivotes = log(weightedAntivotes as number as Power, logarithmBase as number as Base) as number as Antivotes
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
