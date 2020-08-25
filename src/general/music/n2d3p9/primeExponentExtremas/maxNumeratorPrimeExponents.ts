import { Exponent, Numerator, Prime, PRIMES } from "../../../math"
import { Index, Max } from "../../../types"
import { N2D3P9 } from "../types"
import { computeMaxNumeratorPrimeExponentGivenMaxN2D3P3 } from "./maxNumeratorPrimeExponent"

const computeMaxNumeratorPrimeExponentsGivenMaxN2D3P9 = (maxN2D3P9: Max<N2D3P9>): Array<Max<Exponent<Prime<Numerator>>>> => {
    // TODO: FIVE ROUGH LINK add constants for the 2 and [0,0] re: five-rough
    let numeratorPrimeIndex = 2 as Index<Prime<Numerator>>
    const maxNumeratorPrimeExponentsGivenMaxN2D3P9 = [0, 0] as Array<Max<Exponent<Prime<Numerator>>>>
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
