import { Divisor } from "../../../types"
import { divide } from "../../typedOperations"
import { NumericTypeParameters } from "../../types"
import { computeGreatestCommonDivisor } from "../common"
import { Denominator, FractionalPart, Numerator, Ratio } from "./types"

const computeLowestTermsRatio = <T extends NumericTypeParameters>(
    [numerator, denominator]: Ratio<T>,
): Ratio<T & { unreduced: false }> => {
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
