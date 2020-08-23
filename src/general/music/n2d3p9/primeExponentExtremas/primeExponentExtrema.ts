import { Exponent } from "../../../math"
import { Prime } from "../../../types"
import { N2D3P9 } from "../types"
import { computeMaximumDenominatorPrimeExponentGivenMaximumN2D3P3 } from "./maximumDenominatorPrimeExponent"
import { computeMaximumNumeratorPrimeExponentGivenMaximumN2D3P3 } from "./maximumNumeratorPrimeExponent"
import { PrimeExponentExtrema } from "./types"

const computePrimeExponentExtremaGivenMaximumN2D3P3 = (prime: Prime, maximumN2D3P9: N2D3P9): PrimeExponentExtrema => {
    const maximumNumeratorPrimeExponentGivenMaximumN2D3P3 =
        computeMaximumNumeratorPrimeExponentGivenMaximumN2D3P3(prime, maximumN2D3P9)
    const maximumDenominatorPrimeExponentGivenMaximumN2D3P3 =
        computeMaximumDenominatorPrimeExponentGivenMaximumN2D3P3(prime, maximumN2D3P9)

    // TODO: A "negate" function which preserved the nominal typed number and prevented negative zeroes would be nice
    return [
        maximumDenominatorPrimeExponentGivenMaximumN2D3P3 === 0 ? maximumDenominatorPrimeExponentGivenMaximumN2D3P3 : -maximumDenominatorPrimeExponentGivenMaximumN2D3P3 as Exponent<Prime>,
        maximumNumeratorPrimeExponentGivenMaximumN2D3P3,
    ]
}

export {
    computePrimeExponentExtremaGivenMaximumN2D3P3,
}
