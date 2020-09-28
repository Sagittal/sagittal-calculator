import { Divisor } from "../../../../types"
import { NumTypeParameters } from "../../../num"
import { divide } from "../../../typedOperations"
import { computeGreatestCommonDivisor } from "../../common"
import { RationalDenominator, RationalFractionalPart, RationalNumerator, RationalQuotient } from "./types"

const computeLowestTermsRationalQuotient = <T extends NumTypeParameters>(
    [numerator, denominator]: RationalQuotient<T>,
): RationalQuotient<T> => {
    const greatestCommonDivisor = computeGreatestCommonDivisor(
        numerator as RationalFractionalPart<T>,
        denominator as RationalFractionalPart<T>,
    )

    return [
        divide(numerator, greatestCommonDivisor as Divisor<RationalNumerator>),
        divide(denominator, greatestCommonDivisor as Divisor<RationalDenominator>),
    ] as RationalQuotient<T>
}

export {
    computeLowestTermsRationalQuotient,
}
