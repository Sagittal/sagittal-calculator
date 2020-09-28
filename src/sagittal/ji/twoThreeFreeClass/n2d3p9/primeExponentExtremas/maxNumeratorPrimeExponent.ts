import { Exponent, floor, IntegerNumerator, log, Max, Power, Prime } from "../../../../../general"
import { N2D3P9 } from "../types"

const computeMaxNumeratorPrimeExponentGivenMaxN2D3P9 = (
    numeratorPrime: IntegerNumerator & Prime,
    maxN2D3P9: Max<N2D3P9>,
): Max<IntegerNumerator & Exponent<Prime>> => {
    const power = maxN2D3P9 * 9 * (1 / numeratorPrime) as Power<IntegerNumerator & Prime>

    if (power <= 0) {
        return 0 as Max<IntegerNumerator & Exponent<Prime>>
    }

    const base = numeratorPrime / 2

    return floor(log(power, base)) as Max<IntegerNumerator & Exponent<Prime>>

}

export {
    computeMaxNumeratorPrimeExponentGivenMaxN2D3P9,
}
