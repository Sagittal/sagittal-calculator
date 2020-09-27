import { Divisor } from "../../../../types"
import { NumTypeParameters } from "../../../num"
import { divide } from "../../../typedOperations"
import { computeGreatestCommonDivisor } from "../../common"
import { RationalDenominator, RationalFractionalPart, RationalNumerator, RationalRatio } from "./types"

const computeLowestTermsRationalRatio = <T extends NumTypeParameters>(
    [numerator, denominator]: RationalRatio<T>,
): RationalRatio<T> => {
    const greatestCommonDivisor = computeGreatestCommonDivisor(
        numerator as RationalFractionalPart<T>,
        denominator as RationalFractionalPart<T>,
    )

    return [
        divide(numerator, greatestCommonDivisor as Divisor<RationalNumerator>),
        divide(denominator, greatestCommonDivisor as Divisor<RationalDenominator>),
    ] as RationalRatio<T>
}

export {
    computeLowestTermsRationalRatio,
}
