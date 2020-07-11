import * as ratioSubmetricUnpopularity from "./ratioSubmetricAntivotes"
import { computeLog } from "../../../utilities/log"
import { Ratio } from "../../../utilities/types"
import { Antivotes } from "../sumOfSquares/types"

const computeWeightedSubmetricAntivotes = (fiveRoughRatio: Ratio, submetric = {}): Antivotes => {
    const { weight = 1, weightIsBase = false, weightIsExponent = false }: any = submetric

    let submetricAntivotes = 0 as Antivotes
    if (weight !== 0) {
        submetricAntivotes = ratioSubmetricUnpopularity.computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)
    }

    const weightedSubmetricAntivotes: Antivotes = weightIsBase ?
        computeLog(submetricAntivotes, weight) as Antivotes :
        weightIsExponent ?
            submetricAntivotes ** weight as Antivotes :
            submetricAntivotes * weight as Antivotes

    if (isNaN(weightedSubmetricAntivotes)) throw new Error(`You got NaN! ${fiveRoughRatio} ${JSON.stringify(submetric, null, 4)} ${submetricAntivotes} ${weight} ${weightIsBase} ${weightIsExponent}`)

    return weightedSubmetricAntivotes
}

export {
    computeWeightedSubmetricAntivotes,
}
