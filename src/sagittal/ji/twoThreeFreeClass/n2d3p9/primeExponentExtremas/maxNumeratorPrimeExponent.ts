import { Exponent, floor, log, Max, Power, Prime, RationalNumerator } from "../../../../../general"
import { N2D3P9 } from "../types"

const computeMaxNumeratorPrimeExponentGivenMaxN2D3P9 = (
    numeratorPrime: RationalNumerator & Prime,
    maxN2D3P9: Max<N2D3P9>,
): Max<RationalNumerator & Exponent<Prime>> => {
    const power = maxN2D3P9 * 9 * (1 / numeratorPrime) as Power<RationalNumerator & Prime>

    if (power <= 0) {
        return 0 as Max<RationalNumerator & Exponent<Prime>>
    }

    const base = numeratorPrime / 2

    return floor(log(power, base)) as Max<RationalNumerator & Exponent<Prime>>

}

export {
    computeMaxNumeratorPrimeExponentGivenMaxN2D3P9,
}
