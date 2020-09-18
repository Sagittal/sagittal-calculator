import { Denominator, Exponent, Extrema, Integer, Max, Min, negative, Numerator, Prime } from "../../../../../general"
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
    const maxNumeratorPrimeExponentGivenMaxN2D3P9: Max<Numerator & Exponent<Prime>> =
        computeMaxNumeratorPrimeExponentGivenMaxN2D3P9(prime as Numerator & Prime, maxN2D3P9)
    const maxDenominatorPrimeExponentGivenMaxN2D3P9: Max<Denominator & Exponent<Prime>> =
        mirrored ?
            maxNumeratorPrimeExponentGivenMaxN2D3P9 as
                Max<Integer & Exponent<Prime>> as Max<Denominator & Exponent<Prime>> :
            computeMaxDenominatorPrimeExponentGivenMaxN2D3P9(
                prime as Denominator & Prime,
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
