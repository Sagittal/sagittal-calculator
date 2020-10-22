import {stringify, Two3FreeClass} from "../../../../general"
import {Antivotes, ParameterValue, Submetric} from "../types"
import {compute23FreeClassSubmetricAntivotes} from "./two3FreeClassSubmetricAntivotes"
import {computeWeightedAntivotes} from "./weightedAntivotes"

const computeWeightedSubmetricAntivotes = (
    two3FreeClass: Two3FreeClass,
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
        submetricAntivotes = compute23FreeClassSubmetricAntivotes(two3FreeClass, submetric)
    }

    submetricAntivotes = computeWeightedAntivotes(submetricAntivotes, {
        logarithmBase: weightAsLogarithmBase,
        powerExponent: weightAsPowerExponent,
        powerBase: weightAsPowerBase,
        coefficient: weightAsCoefficient,
    })

    if (isNaN(submetricAntivotes)) {
        throw new Error(`You got NaN! ${two3FreeClass} ${stringify(submetric, {multiline: true})} ${submetricAntivotes} ${weightAsCoefficient} ${weightAsLogarithmBase} ${weightAsPowerExponent} ${weightAsPowerBase}`)
    }

    return submetricAntivotes
}

export {
    computeWeightedSubmetricAntivotes,
}
