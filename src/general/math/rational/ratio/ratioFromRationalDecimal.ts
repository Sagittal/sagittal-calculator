import { Multiplier } from "../../../types"
import { multiply } from "../../typedOperations"
import { Decimal } from "../../types"
import { isInteger } from "../isInteger"
import { RationalNumTypeParameters } from "../types"
import { computeLowestTermsRatio } from "./lowestTerms"
import { Denominator, Numerator, Ratio } from "./types"

const computeRatioFromRationalDecimal = <T extends RationalNumTypeParameters>(
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
