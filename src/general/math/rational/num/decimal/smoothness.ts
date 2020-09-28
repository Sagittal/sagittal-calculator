import { MULTIPLICATIVE_IDENTITY } from "../../../constants"
import { SMOOTH_ROUGH_OFFSET } from "../../constants"
import { Roughness, Smoothness } from "../../types"
import { computeIntegerMonzoFromIntegerDecimal, computeRationalMonzoSmoothness } from "../monzo"
import { computeRationalQuotientFromRationalDecimal, computeRationalQuotientSmoothness } from "../quotient"

import { computeRoughIntegerDecimal } from "./roughness"
import { IntegerDecimal, RationalDecimal } from "./types"

const isSmoothIntegerDecimal = (integerDecimal: IntegerDecimal, smoothness: Smoothness): boolean => {
    return computeRoughIntegerDecimal(
        integerDecimal,
        smoothness + SMOOTH_ROUGH_OFFSET as Roughness,
    ) === MULTIPLICATIVE_IDENTITY
}

const computeIntegerDecimalSmoothness = (integerDecimal: IntegerDecimal): Smoothness => {
    const integerMonzo = computeIntegerMonzoFromIntegerDecimal(integerDecimal)

    return computeRationalMonzoSmoothness(integerMonzo)
}

const computeRationalDecimalSmoothness = (rationalDecimal: RationalDecimal): Smoothness => {
    const rationalQuotient = computeRationalQuotientFromRationalDecimal(rationalDecimal)

    return computeRationalQuotientSmoothness(rationalQuotient)
}

export {
    isSmoothIntegerDecimal,
    computeIntegerDecimalSmoothness,
    computeRationalDecimalSmoothness,
}
