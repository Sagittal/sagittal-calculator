import { stringify, TwoThreeFreeClass } from "../../../../general"
import { Antivotes, ParameterValue, Submetric } from "../types"
import { compute23FreeClassSubmetricAntivotes } from "./twoThreeFreeClassSubmetricAntivotes"
import { computeWeightedAntivotes } from "./weightedAntivotes"

const computeWeightedSubmetricAntivotes = (
    twoThreeFreeClass: TwoThreeFreeClass,
    submetric: Submetric = {},
): Antivotes => {
    const {
        weightAsCoefficient = 1 as ParameterValue,
        weightAsLogarithmBase,
        weightAsPowerExponent,
        weightAsPowerBase,
    }: Submetric = submetric

    let submetricAntivotes = 0 as Antivotes
    if (weightAsCoefficient !== 0) {
        submetricAntivotes = compute23FreeClassSubmetricAntivotes(twoThreeFreeClass, submetric)
    }

    submetricAntivotes = computeWeightedAntivotes(submetricAntivotes, {
        logarithmBase: weightAsLogarithmBase,
        powerExponent: weightAsPowerExponent,
        powerBase: weightAsPowerBase,
        coefficient: weightAsCoefficient,
    })

    if (isNaN(submetricAntivotes)) {
        throw new Error(`You got NaN! ${twoThreeFreeClass} ${stringify(submetric, { multiline: true })} ${submetricAntivotes} ${weightAsCoefficient} ${weightAsLogarithmBase} ${weightAsPowerExponent} ${weightAsPowerBase}`)
    }

    return submetricAntivotes
}

export {
    computeWeightedSubmetricAntivotes,
}
