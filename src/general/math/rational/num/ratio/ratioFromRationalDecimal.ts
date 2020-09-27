import { Multiplier } from "../../../../types"
import { Decimal, Denominator, Numerator, NumTypeParameters, Ratio } from "../../../num"
import { multiply } from "../../../typedOperations"
import { isInteger } from "../../typeGuards"
import { computeLowestTermsRatio } from "./lowestTerms"

const computeRatioFromRationalDecimal = <T extends NumTypeParameters>(
    rationalDecimal: Decimal<T & { potentiallyIrrational: false }>,
): Ratio<T> => {
    let denominator: Denominator = 1 as Denominator
    let numerator = rationalDecimal as number
    while (!isInteger(numerator)) {
        denominator = multiply(denominator, 10 as Multiplier<Denominator>)
        numerator = numerator * 10
    }

    const ratio = [numerator as Numerator, denominator] as Ratio<T>

    return computeLowestTermsRatio(ratio)
}

export {
    computeRatioFromRationalDecimal,
}
