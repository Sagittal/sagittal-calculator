import { Multiplier } from "../../../../types"
import { NumTypeParameters } from "../../../num"
import { multiply } from "../../../typedOperations"
import { isInteger } from "../../typeGuards"
import { RationalDecimal } from "../decimal"
import { computeLowestTermsRationalRatio } from "./lowestTerms"
import { RationalDenominator, RationalNumerator, RationalRatio } from "./types"

const computeRationalRatioFromRationalDecimal = <T extends NumTypeParameters>(
    rationalDecimal: RationalDecimal<T>,
): RationalRatio<T> => {
    let denominator: RationalDenominator = 1 as RationalDenominator
    let numerator = rationalDecimal as number
    while (!isInteger(numerator)) {
        denominator = multiply(denominator, 10 as Multiplier<RationalDenominator>)
        numerator = numerator * 10
    }

    const ratio = [numerator as RationalNumerator, denominator] as RationalRatio<T>

    return computeLowestTermsRationalRatio(ratio)
}

export {
    computeRationalRatioFromRationalDecimal,
}
