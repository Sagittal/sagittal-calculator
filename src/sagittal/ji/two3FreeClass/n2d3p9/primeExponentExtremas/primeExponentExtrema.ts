import {
    Decimal,
    Denominator,
    Exponent,
    Extrema,
    Max,
    Min,
    negative,
    Numerator,
    Of,
    Prime,
} from "../../../../../general"
import {N2D3P9} from "../types"
import {
    computeMaxDenominatorPrimeExponentGivenMaxN2D3P9,
    NumeratorPossibilityForDenominatorGivenMaxN2D3P9,
} from "./denominator"
import {computeMaxNumeratorPrimeExponentGivenMaxN2D3P9} from "./maxNumeratorPrimeExponent"

const computePrimeExponentExtremaGivenMaxN2D3P9 = (
    prime: Prime,
    maxN2D3P9: Max<N2D3P9>,
    numeratorPossibilitiesForDenominatorGivenMaxN2D3P9: NumeratorPossibilityForDenominatorGivenMaxN2D3P9[],
    {mirrored}: {mirrored?: boolean} = {},
): Extrema<Decimal<{integer: true}> & Exponent<Prime>> => {
    const maxNumeratorPrimeExponentGivenMaxN2D3P9: Max<Numerator & Decimal<{integer: true}> & Exponent<Prime>> =
        computeMaxNumeratorPrimeExponentGivenMaxN2D3P9(prime as Prime & Of<Numerator>, maxN2D3P9)

    const maxDenominatorPrimeExponentGivenMaxN2D3P9: Max<Denominator & Decimal<{integer: true}> & Exponent<Prime>> =
        mirrored ?
            maxNumeratorPrimeExponentGivenMaxN2D3P9 as
                Max<Decimal<{integer: true}> & Exponent<Prime>> as
                Max<Denominator & Decimal<{integer: true}> & Exponent<Prime>> :
            computeMaxDenominatorPrimeExponentGivenMaxN2D3P9(
                prime as Prime & Of<Denominator>,
                maxN2D3P9,
                numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
            )

    return [
        negative(
            maxDenominatorPrimeExponentGivenMaxN2D3P9,
        ) as number as Min<Decimal<{integer: true}> & Exponent<Prime>>,
        maxNumeratorPrimeExponentGivenMaxN2D3P9 as number as Max<Decimal<{integer: true}> & Exponent<Prime>>,
    ]
}

export {
    computePrimeExponentExtremaGivenMaxN2D3P9,
}
