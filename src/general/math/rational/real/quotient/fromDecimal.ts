import { Multiplier } from "../../../../types"
import { NumericProperties } from "../../../real"
import { multiply } from "../../../typedOperations"
import { isIntegerDecimal, RationalDecimal } from "../decimal"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"
import { IntegerDenominator, IntegerNumerator, RationalQuotient } from "./types"

const computeRationalQuotientFromRationalDecimal = <T extends NumericProperties>(
    rationalDecimal: RationalDecimal<T>,
): RationalQuotient<T> => {
    let integerDenominator: IntegerDenominator = 1 as IntegerDenominator
    let rationalNumerator = rationalDecimal as number
    while (!isIntegerDecimal(rationalNumerator)) {
        integerDenominator = multiply(integerDenominator, 10 as Multiplier<IntegerDenominator>)
        rationalNumerator = rationalNumerator * 10
    }

    const rationalQuotient = [rationalNumerator as IntegerNumerator, integerDenominator] as RationalQuotient<T>

    return computeLowestTermsRationalQuotient(rationalQuotient)
}

export {
    computeRationalQuotientFromRationalDecimal,
}
