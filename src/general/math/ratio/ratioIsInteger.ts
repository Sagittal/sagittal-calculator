import { dividesEvenly } from "../dividesEvenly"
import { NumericTypeParameters } from "../types"
import { PotentiallyIrrationalRatioParameter, Ratio } from "./types"

const computeRatioIsInteger = <T extends NumericTypeParameters>(
    ratio: PotentiallyIrrationalRatioParameter<Omit<T, "integer">>,
): ratio is Ratio<Omit<T, "integer"> & { integer: true }> => {
    const [numerator, denominator] = ratio

    return dividesEvenly(numerator, denominator)
}

export {
    computeRatioIsInteger,
}
