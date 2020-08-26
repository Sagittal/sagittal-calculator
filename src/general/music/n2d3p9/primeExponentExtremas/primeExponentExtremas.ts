import { deepEquals } from "../../../code"
import { Exponent, FIVE_PRIME_INDEX, Prime, PRIMES } from "../../../math"
import { Extrema, Index, Max } from "../../../types"
import { N2D3P9 } from "../types"
import { EMPTY_PRIME_EXPONENT_EXTREMA, INITIAL_PRIME_EXPONENT_EXTREMAS_FOR_TWO_AND_THREE } from "./constants"
import { computePrimeExponentExtremaGivenMaxN2D3P3 } from "./primeExponentExtrema"

const computePrimeExponentExtremasGivenMaxN2D3P9 = (maxN2D3P9: Max<N2D3P9>): Array<Extrema<Exponent<Prime>>> => {
    const primeExponentExtremasGivenMaxN2D3P9 = INITIAL_PRIME_EXPONENT_EXTREMAS_FOR_TWO_AND_THREE

    let primeIndex = FIVE_PRIME_INDEX
    while (true) {
        const prime = PRIMES[ primeIndex ]
        const primeExponentExtremaGivenMaxN2D3P9: Extrema<Exponent<Prime>> =
            computePrimeExponentExtremaGivenMaxN2D3P3(prime, maxN2D3P9)

        if (deepEquals(primeExponentExtremaGivenMaxN2D3P9, EMPTY_PRIME_EXPONENT_EXTREMA)) {
            break
        } else {
            primeExponentExtremasGivenMaxN2D3P9.push(primeExponentExtremaGivenMaxN2D3P9)
            primeIndex = primeIndex + 1 as Index<Prime>
        }
    }

    return primeExponentExtremasGivenMaxN2D3P9
}

export {
    computePrimeExponentExtremasGivenMaxN2D3P9,
}
