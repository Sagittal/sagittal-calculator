import { Multiplier } from "../../../../types"
import { NumTypeParameters } from "../../../num"
import { multiply } from "../../../typedOperations"
import { isInteger } from "../../typeGuards"
import { RationalDecimal } from "../decimal"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"
import { RationalDenominator, RationalNumerator, RationalQuotient } from "./types"

const computeRationalQuotientFromRationalDecimal = <T extends NumTypeParameters>(
    rationalDecimal: RationalDecimal<T>,
): RationalQuotient<T> => {
    let denominator: RationalDenominator = 1 as RationalDenominator
    let numerator = rationalDecimal as number
    while (!isInteger(numerator)) {
        denominator = multiply(denominator, 10 as Multiplier<RationalDenominator>)
        numerator = numerator * 10
    }

    const quotient = [numerator as RationalNumerator, denominator] as RationalQuotient<T>

    return computeLowestTermsRationalQuotient(quotient)
}

export {
    computeRationalQuotientFromRationalDecimal,
}
