import { computeLog, isUndefined, Ratio } from "../../../../general"
import { ParameterValue, Submetric } from "../../types"
import { Antivotes } from "../types"
import { computeRatioSubmetricAntivotes } from "./ratioSubmetricAntivotes"

const computeWeightedSubmetricAntivotes = (fiveRoughRatio: Ratio, submetric = {}): Antivotes => {
    const {
        weightAsCoefficient = 1 as ParameterValue,
        weightAsBase = undefined,
        weightAsExponent = undefined,
    }: Submetric = submetric

    let submetricAntivotes = 0 as Antivotes
    if (weightAsCoefficient !== 0) {
        submetricAntivotes = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)
    }

    const weightedSubmetricAntivotes: Antivotes = !isUndefined(weightAsBase) ?
        computeLog(submetricAntivotes, weightAsBase) as Antivotes :
        !isUndefined(weightAsExponent) ?
            submetricAntivotes ** weightAsExponent as Antivotes :
            submetricAntivotes * weightAsCoefficient as Antivotes

    if (isNaN(weightedSubmetricAntivotes)) {
        throw new Error(`You got NaN! ${fiveRoughRatio} ${JSON.stringify(submetric, null, 4)} ${submetricAntivotes} ${weightAsCoefficient} ${weightAsBase} ${weightAsExponent}`)
    }

    return weightedSubmetricAntivotes
}

export {
    computeWeightedSubmetricAntivotes,
}
