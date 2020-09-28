import { Multiplier } from "../../../../types"
import { NumTypeParameters } from "../../../num"
import { multiply } from "../../../typedOperations"
import { isInteger } from "../../typeGuards"
import { RationalDecimal } from "../decimal"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"
import { IntegerDenominator, IntegerNumerator, RationalQuotient } from "./types"

const computeRationalQuotientFromRationalDecimal = <T extends NumTypeParameters>(
    rationalDecimal: RationalDecimal<T>,
): RationalQuotient<T> => {
    let denominator: IntegerDenominator = 1 as IntegerDenominator
    let numerator = rationalDecimal as number
    while (!isInteger(numerator)) {
        denominator = multiply(denominator, 10 as Multiplier<IntegerDenominator>)
        numerator = numerator * 10
    }

    const quotient = [numerator as IntegerNumerator, denominator] as RationalQuotient<T>

    return computeLowestTermsRationalQuotient(quotient)
}

export {
    computeRationalQuotientFromRationalDecimal,
}
