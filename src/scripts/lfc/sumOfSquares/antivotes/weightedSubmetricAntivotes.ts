import { stringify, TwoThreeFreeClassAsRatio } from "../../../../general"
import { Antivotes, ParameterValue, Submetric } from "../types"
import { computeRatioSubmetricAntivotes } from "./ratioSubmetricAntivotes"
import { computeWeightedAntivotes } from "./weightedAntivotes"

const computeWeightedSubmetricAntivotes = (
    twoThreeFreeClassAsRatio: TwoThreeFreeClassAsRatio,
    submetric = {},
): Antivotes => {
    const {
        weightAsCoefficient = 1 as ParameterValue,
        weightAsLogarithmBase,
        weightAsPowerExponent,
        weightAsPowerBase,
    }: Submetric = submetric

    let submetricAntivotes = 0 as Antivotes
    if (weightAsCoefficient !== 0) {
        submetricAntivotes = computeRatioSubmetricAntivotes(twoThreeFreeClassAsRatio, submetric)
    }

    submetricAntivotes = computeWeightedAntivotes(submetricAntivotes, {
        logarithmBase: weightAsLogarithmBase,
        powerExponent: weightAsPowerExponent,
        powerBase: weightAsPowerBase,
        coefficient: weightAsCoefficient,
    })

    if (isNaN(submetricAntivotes)) {
        throw new Error(`You got NaN! ${twoThreeFreeClassAsRatio} ${stringify(submetric, { multiline: true })} ${submetricAntivotes} ${weightAsCoefficient} ${weightAsLogarithmBase} ${weightAsPowerExponent} ${weightAsPowerBase}`)
    }

    return submetricAntivotes
}

export {
    computeWeightedSubmetricAntivotes,
}
