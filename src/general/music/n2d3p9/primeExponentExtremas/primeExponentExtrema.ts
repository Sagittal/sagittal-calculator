import { Denominator, Exponent, Numerator, Prime } from "../../../math"
import { Extrema, Max, Min } from "../../../types"
import { N2D3P9 } from "../types"
import { computeMaxDenominatorPrimeExponentGivenMaxN2D3P3 } from "./maxDenominatorPrimeExponent"
import { computeMaxNumeratorPrimeExponentGivenMaxN2D3P3 } from "./maxNumeratorPrimeExponent"

const computePrimeExponentExtremaGivenMaxN2D3P3 = (prime: Prime, maxN2D3P9: Max<N2D3P9>): Extrema<Exponent<Prime>> => {
    const maxNumeratorPrimeExponentGivenMaxN2D3P3 =
        computeMaxNumeratorPrimeExponentGivenMaxN2D3P3(prime as Prime<Numerator>, maxN2D3P9)
    const maxDenominatorPrimeExponentGivenMaxN2D3P3 =
        computeMaxDenominatorPrimeExponentGivenMaxN2D3P3(prime as Prime<Denominator>, maxN2D3P9)

    // TODO: A "negate" function which preserved the nominal typed number and prevented negative zeroes would be nice
    return [
        maxDenominatorPrimeExponentGivenMaxN2D3P3 === 0 ?
            maxDenominatorPrimeExponentGivenMaxN2D3P3 as unknown as Min<Exponent<Prime>> :
            -maxDenominatorPrimeExponentGivenMaxN2D3P3 as Min<Exponent<Prime>>,
        maxNumeratorPrimeExponentGivenMaxN2D3P3,
    ]
}

export {
    computePrimeExponentExtremaGivenMaxN2D3P3,
}
