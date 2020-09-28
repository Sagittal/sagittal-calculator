import { Divisor } from "../../../../types"
import { NumTypeParameters } from "../../../num"
import { divide } from "../../../typedOperations"
import { computeGreatestCommonDivisor } from "../../common"
import { IntegerDenominator, IntegerNumerator, IntegerQuotientPart, RationalQuotient } from "./types"

const computeLowestTermsRationalQuotient = <T extends NumTypeParameters>(
    [numerator, denominator]: RationalQuotient<T>,
): RationalQuotient<T> => {
    const greatestCommonDivisor = computeGreatestCommonDivisor(
        numerator as IntegerQuotientPart<T>,
        denominator as IntegerQuotientPart<T>,
    )

    return [
        divide(numerator, greatestCommonDivisor as Divisor<IntegerNumerator>),
        divide(denominator, greatestCommonDivisor as Divisor<IntegerDenominator>),
    ] as RationalQuotient<T>
}

export {
    computeLowestTermsRationalQuotient,
}
