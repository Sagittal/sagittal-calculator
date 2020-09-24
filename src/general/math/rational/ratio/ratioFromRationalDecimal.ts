import { Multiplier } from "../../../types"
import { dividesEvenly } from "../../dividesEvenly"
import { multiply } from "../../typedOperations"
import { Decimal } from "../../types"
import { RationalNumTypeParameters } from "../types"
import { computeLowestTermsRatio } from "./lowestTerms"
import { Denominator, Numerator, Ratio } from "./types"

const computeRatioFromRationalDecimal = <T extends RationalNumTypeParameters>(
    rationalDecimal: Decimal<{ potentiallyIrrational: false }>,
): Ratio<T> => {
    let denominator: Denominator = 1 as Denominator
    let numerator: Numerator = rationalDecimal as Numerator
    while (!dividesEvenly(numerator, 1)) {
        denominator = multiply(denominator, 10 as Multiplier<Denominator>)
        numerator = multiply(numerator, 10 as Multiplier<Numerator>)
    }

    const ratio = [numerator, denominator] as Ratio<T>

    return computeLowestTermsRatio(ratio)
}

export {
    computeRatioFromRationalDecimal,
}
