import { Exponent, Extrema, Integer, Max, Min, negative, Prime, RationalDenominator, RationalNumerator } from "../../../../../general"
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
): Extrema<Integer & Exponent<Prime>> => {
    const maxNumeratorPrimeExponentGivenMaxN2D3P9: Max<RationalNumerator & Exponent<Prime>> =
        computeMaxNumeratorPrimeExponentGivenMaxN2D3P9(prime as RationalNumerator & Prime, maxN2D3P9)
    const maxDenominatorPrimeExponentGivenMaxN2D3P9: Max<RationalDenominator & Exponent<Prime>> =
        mirrored ?
            maxNumeratorPrimeExponentGivenMaxN2D3P9 as
                Max<Integer & Exponent<Prime>> as Max<RationalDenominator & Exponent<Prime>> :
            computeMaxDenominatorPrimeExponentGivenMaxN2D3P9(
                prime as RationalDenominator & Prime,
                maxN2D3P9,
                numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
            )

    return [
        negative(maxDenominatorPrimeExponentGivenMaxN2D3P9) as number as Min<Integer & Exponent<Prime>>,
        maxNumeratorPrimeExponentGivenMaxN2D3P9 as number as Max<Integer & Exponent<Prime>>,
    ]
}

export {
    computePrimeExponentExtremaGivenMaxN2D3P9,
}
