import { Divisor } from "../../../types"
import { computeGreatestCommonDivisor } from "../../rational"
import { divide } from "../../typedOperations"
import { NumTypeParameters } from "../types"
import { Denominator, FractionalPart, Numerator, Ratio } from "./types"

const computeLowestTermsRatio = <T extends NumTypeParameters>(
    [numerator, denominator]: Ratio<T>,
): Ratio<T & { potentiallyUnreduced: false }> => {
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
