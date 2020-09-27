import { Divisor } from "../../../../types"
import { Denominator, FractionalPart, Numerator, NumTypeParameters, Ratio } from "../../../num"
import { divide } from "../../../typedOperations"
import { computeGreatestCommonDivisor } from "../../common"

const computeLowestTermsRatio = <T extends NumTypeParameters>(
    [numerator, denominator]: Ratio<T>,
): Ratio<T> => {
    const greatestCommonDivisor = computeGreatestCommonDivisor(
        numerator as FractionalPart<T>,
        denominator as FractionalPart<T>,
    )

    return [
        divide(numerator, greatestCommonDivisor as Divisor<Numerator>),
        divide(denominator, greatestCommonDivisor as Divisor<Denominator>),
    ] as Ratio<T>
}

export {
    computeLowestTermsRatio,
}
