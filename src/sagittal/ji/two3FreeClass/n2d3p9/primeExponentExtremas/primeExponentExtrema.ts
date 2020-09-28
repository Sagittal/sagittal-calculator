import { Exponent, Extrema, IntegerDecimal, IntegerDenominator, IntegerNumerator, Max, Min, negative, Prime } from "../../../../../general"
import { N2D3P9 } from "../types"
import {
    computeMaxDenominatorPrimeExponentGivenMaxN2D3P9,
    NumeratorPossibilityForDenominatorGivenMaxN2D3P9,
} from "./denominator"
import { computeMaxNumeratorPrimeExponentGivenMaxN2D3P9 } from "./maxNumeratorPrimeExponent"

const computePrimeExponentExtremaGivenMaxN2D3P9 = (
    prime: Prime,
    maxN2D3P9: Max<N2D3P9>,
    numeratorPossibilitiesForDenominatorGivenMaxN2D3P9: NumeratorPossibilityForDenominatorGivenMaxN2D3P9[],
    { mirrored }: { mirrored?: boolean } = {},
): Extrema<IntegerDecimal & Exponent<Prime>> => {
    const maxNumeratorPrimeExponentGivenMaxN2D3P9: Max<IntegerNumerator & Exponent<Prime>> =
        computeMaxNumeratorPrimeExponentGivenMaxN2D3P9(prime as IntegerNumerator & Prime, maxN2D3P9)
    const maxDenominatorPrimeExponentGivenMaxN2D3P9: Max<IntegerDenominator & Exponent<Prime>> =
        mirrored ?
            maxNumeratorPrimeExponentGivenMaxN2D3P9 as
                Max<IntegerDecimal & Exponent<Prime>> as Max<IntegerDenominator & Exponent<Prime>> :
            computeMaxDenominatorPrimeExponentGivenMaxN2D3P9(
                prime as IntegerDenominator & Prime,
                maxN2D3P9,
                numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
            )

    return [
        negative(maxDenominatorPrimeExponentGivenMaxN2D3P9) as number as Min<IntegerDecimal & Exponent<Prime>>,
        maxNumeratorPrimeExponentGivenMaxN2D3P9 as number as Max<IntegerDecimal & Exponent<Prime>>,
    ]
}

export {
    computePrimeExponentExtremaGivenMaxN2D3P9,
}
