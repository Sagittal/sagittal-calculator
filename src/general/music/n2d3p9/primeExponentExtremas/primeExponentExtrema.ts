import { Denominator, Exponent, Max, Min, negative, Numerator, Prime } from "../../../math"
import { Extrema } from "../../../types"
import { N2D3P9 } from "../types"
import { computeMaxDenominatorPrimeExponentGivenMaxN2D3P3 } from "./denominator"
import { computeMaxNumeratorPrimeExponentGivenMaxN2D3P3 } from "./maxNumeratorPrimeExponent"

const computePrimeExponentExtremaGivenMaxN2D3P3 = (prime: Prime, maxN2D3P9: Max<N2D3P9>): Extrema<Exponent<Prime>> => {
    const maxNumeratorPrimeExponentGivenMaxN2D3P3 =
        computeMaxNumeratorPrimeExponentGivenMaxN2D3P3(prime as Prime<Numerator>, maxN2D3P9)
    const maxDenominatorPrimeExponentGivenMaxN2D3P3 =
        computeMaxDenominatorPrimeExponentGivenMaxN2D3P3(prime as Prime<Denominator>, maxN2D3P9)

    return [
        negative(maxDenominatorPrimeExponentGivenMaxN2D3P3) as Exponent<Prime> as Min<Exponent<Prime>>,
        maxNumeratorPrimeExponentGivenMaxN2D3P3,
    ]
}

export {
    computePrimeExponentExtremaGivenMaxN2D3P3,
}
