import { dividesEvenly } from "../../dividesEvenly"
import { NumTypeParameters } from "../../types"
import { Ratio, RatioNotDefaultingToRational } from "./types"

const computeRatioIsInteger = <T extends NumTypeParameters>(
    ratio: RatioNotDefaultingToRational<T>,
): ratio is Ratio<T & { integer: true }> => {
    const [numerator, denominator] = ratio

    return dividesEvenly(numerator, denominator)
}

export {
    computeRatioIsInteger,
}
