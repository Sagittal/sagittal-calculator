import { Exponent, FIVE_PRIME_INDEX, Numerator, Prime, PRIMES } from "../../../math"
import { Index, Max } from "../../../types"
import { N2D3P9 } from "../types"
import { INITIAL_MAX_NUMERATOR_PRIME_EXPONENTS_FOR_TWO_AND_THREE } from "./constants"
import { computeMaxNumeratorPrimeExponentGivenMaxN2D3P3 } from "./maxNumeratorPrimeExponent"

const computeMaxNumeratorPrimeExponentsGivenMaxN2D3P9 = (maxN2D3P9: Max<N2D3P9>): Array<Max<Exponent<Prime<Numerator>>>> => {
    let numeratorPrimeIndex = FIVE_PRIME_INDEX
    const maxNumeratorPrimeExponentsGivenMaxN2D3P9 = INITIAL_MAX_NUMERATOR_PRIME_EXPONENTS_FOR_TWO_AND_THREE.slice()
    while (true) {
        const numeratorPrime = PRIMES[ numeratorPrimeIndex ] as Prime<Numerator>

        const maxNumeratorPrimeExponentGivenMaxN2D3P3 =
            computeMaxNumeratorPrimeExponentGivenMaxN2D3P3(numeratorPrime, maxN2D3P9)

        if (maxNumeratorPrimeExponentGivenMaxN2D3P3 === 0) {
            break
        }
        maxNumeratorPrimeExponentsGivenMaxN2D3P9.push(maxNumeratorPrimeExponentGivenMaxN2D3P3)
        numeratorPrimeIndex = numeratorPrimeIndex + 1 as Index<Prime<Numerator>>
    }

    return maxNumeratorPrimeExponentsGivenMaxN2D3P9
}

export {
    computeMaxNumeratorPrimeExponentsGivenMaxN2D3P9,
}
