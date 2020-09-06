import { Denominator, Exponent, Extrema, Integer, Max, Min, negative, Numerator, Prime } from "../../../../general"
import { N2D3P9 } from "../types"
import { computeMaxDenominatorPrimeExponentGivenMaxN2D3P3 } from "./denominator"
import { computeMaxNumeratorPrimeExponentGivenMaxN2D3P3 } from "./maxNumeratorPrimeExponent"

const computePrimeExponentExtremaGivenMaxN2D3P3 = (
    prime: Prime,
    maxN2D3P9: Max<N2D3P9>,
    { mirrored }: { mirrored?: boolean } = {},
): Extrema<Integer & Exponent<Prime>> => {
    const maxNumeratorPrimeExponentGivenMaxN2D3P3: Max<Integer & Exponent<Prime<Numerator>>> =
        computeMaxNumeratorPrimeExponentGivenMaxN2D3P3(prime as Prime<Numerator>, maxN2D3P9)
    const maxDenominatorPrimeExponentGivenMaxN2D3P3: Max<Integer & Exponent<Prime<Denominator>>> =
        mirrored ?
            maxNumeratorPrimeExponentGivenMaxN2D3P3 as
                Max<Integer & Exponent<Prime>> as Max<Integer & Exponent<Prime<Denominator>>> :
            computeMaxDenominatorPrimeExponentGivenMaxN2D3P3(prime as Prime<Denominator>, maxN2D3P9)

    return [
        negative(maxDenominatorPrimeExponentGivenMaxN2D3P3) as number as Min<Integer & Exponent<Prime>>,
        maxNumeratorPrimeExponentGivenMaxN2D3P3 as number as Max<Integer & Exponent<Prime>>,
    ]
}

export {
    computePrimeExponentExtremaGivenMaxN2D3P3,
}
