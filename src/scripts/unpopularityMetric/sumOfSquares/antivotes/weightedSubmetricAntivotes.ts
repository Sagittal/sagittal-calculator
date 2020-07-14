import { computeLog, Ratio } from "../../../../general"
import { ParameterValue, Submetric } from "../../types"
import { Antivotes } from "../types"
import * as ratioSubmetricUnpopularity from "./ratioSubmetricAntivotes"

const computeWeightedSubmetricAntivotes = (fiveRoughRatio: Ratio, submetric = {}): Antivotes => {
    const { weight = 1 as ParameterValue, weightIsBase = false, weightIsExponent = false }: Submetric = submetric

    let submetricAntivotes = 0 as Antivotes
    if (weight !== 0) {
        submetricAntivotes = ratioSubmetricUnpopularity.computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)
    }

    const weightedSubmetricAntivotes: Antivotes = weightIsBase ?
        computeLog(submetricAntivotes, weight) as Antivotes :
        weightIsExponent ?
            submetricAntivotes ** weight as Antivotes :
            submetricAntivotes * weight as Antivotes

    if (isNaN(weightedSubmetricAntivotes)) { throw new Error(`You got NaN! ${fiveRoughRatio} ${JSON.stringify(submetric, null, 4)} ${submetricAntivotes} ${weight} ${weightIsBase} ${weightIsExponent}`) }

    return weightedSubmetricAntivotes
}

export {
    computeWeightedSubmetricAntivotes,
}
