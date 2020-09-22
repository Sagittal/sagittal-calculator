import { NumericTypeParameters } from "../../types"
import { isInteger } from "../isInteger"
import { PotentiallyIrrationalRatioParameter, Ratio } from "./types"

const computeRatioIsRational = <T extends NumericTypeParameters>(
    ratio: PotentiallyIrrationalRatioParameter<T>,
): ratio is Ratio<T & { rational: true }> => {
    const [numerator, denominator] = ratio

    return isInteger(numerator) && isInteger(denominator)
}

export {
    computeRatioIsRational,
}
