import { dividesEvenly } from "../../dividesEvenly"
import { NumericTypeParameters } from "../../types"
import { PotentiallyIrrationalRatioParameter, Ratio } from "./types"

const computeRatioIsInteger = <T extends NumericTypeParameters>(
    ratio: PotentiallyIrrationalRatioParameter<T>,
): ratio is Ratio<T & { integer: true }> => {
    const [numerator, denominator] = ratio

    return dividesEvenly(numerator, denominator)
}

export {
    computeRatioIsInteger,
}
