import { Base, Exponent, floor, Integer, log, Max, Numerator, Power, Prime } from "../../../../../general"
import { N2D3P9 } from "../types"

const computeMaxNumeratorPrimeExponentGivenMaxN2D3P9 = (
    numeratorPrime: Prime<Numerator>,
    maxN2D3P9: Max<N2D3P9>,
): Max<Integer & Exponent<Prime<Numerator>>> => {
    const power = maxN2D3P9 * 9 * (1 / numeratorPrime) as Power<Prime<Numerator>>

    if (power <= 0) {
        return 0 as Max<Integer & Exponent<Prime<Numerator>>>
    }

    const base = numeratorPrime / 2

    return floor(log(power, base)) as Max<Integer & Exponent<Prime<Numerator>>>

}

export {
    computeMaxNumeratorPrimeExponentGivenMaxN2D3P9,
}
