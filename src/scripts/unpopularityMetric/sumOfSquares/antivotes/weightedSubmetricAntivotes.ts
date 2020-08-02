import { computeLog, isUndefined, Ratio } from "../../../../general"
import { Antivotes, ParameterValue, Submetric } from "../types"
import { computeRatioSubmetricAntivotes } from "./ratioSubmetricAntivotes"

const computeWeightedSubmetricAntivotes = (fiveRoughRatio: Ratio, submetric = {}): Antivotes => {
    const {
        weightAsCoefficient = 1 as ParameterValue,
        weightAsLogarithmBase = undefined,
        weightAsPowerExponent = undefined,
        weightAsPowerBase = undefined,
    }: Submetric = submetric

    let submetricAntivotes = 0 as Antivotes
    if (weightAsCoefficient !== 0) {
        submetricAntivotes = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)
    }

    if (!isUndefined(weightAsLogarithmBase)) {
        submetricAntivotes =  computeLog(submetricAntivotes, weightAsLogarithmBase) as Antivotes
    }

    if (!isUndefined(weightAsPowerExponent)) {
        submetricAntivotes = submetricAntivotes ** weightAsPowerExponent as Antivotes
    }

    if (!isUndefined(weightAsPowerBase)) {
        submetricAntivotes = weightAsPowerBase ** submetricAntivotes as Antivotes
    }

    submetricAntivotes = submetricAntivotes * weightAsCoefficient as Antivotes

    if (isNaN(submetricAntivotes)) {
        throw new Error(`You got NaN! ${fiveRoughRatio} ${JSON.stringify(submetric, null, 4)} ${submetricAntivotes} ${weightAsCoefficient} ${weightAsLogarithmBase} ${weightAsPowerExponent} ${weightAsPowerBase}`)
    }

    return submetricAntivotes
}

export {
    computeWeightedSubmetricAntivotes,
}
