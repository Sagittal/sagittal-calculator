import { Divisor } from "../../types"
import { computeGreatestCommonDivisor } from "../common"
import { divide } from "../typedOperations"
import { NumericTypeParameters } from "../types"
import { Denominator, FractionalPart, Numerator, PotentiallyIrrationalRatioParameter, Ratio } from "./types"

const computeLowestTermsRatio = <T extends NumericTypeParameters>(
    [ numerator, denominator ]: PotentiallyIrrationalRatioParameter<T>,
): Ratio<T> => {
    const greatestCommonDivisor = computeGreatestCommonDivisor(
        numerator as FractionalPart,
        denominator as FractionalPart,
    )

    return [
        divide(numerator, greatestCommonDivisor as Divisor<Numerator>),
        divide(denominator, greatestCommonDivisor as Divisor<Denominator>),
    ] as Ratio<T>
}

export {
    computeLowestTermsRatio,
}
