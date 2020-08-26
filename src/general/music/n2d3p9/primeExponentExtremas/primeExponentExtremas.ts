import { deepEquals } from "../../../code"
import { Exponent, Prime, PRIMES } from "../../../math"
import { Extrema, Index, Max } from "../../../types"
import { N2D3P9 } from "../types"
import { computePrimeExponentExtremaGivenMaxN2D3P3 } from "./primeExponentExtrema"

const computePrimeExponentExtremasGivenMaxN2D3P9 = (maxN2D3P9: Max<N2D3P9>): Array<Extrema<Exponent<Prime>>> => {
    const primeExponentExtremasGivenMaxN2D3P9 = []

    let primeIndex = 2 as Index<Prime> // TODO: FIVE ROUGH LINK and also make sure to be mindful of five rough vs five sliced!
    while (true) {
        const prime = PRIMES[ primeIndex ]
        const primeExponentExtremaGivenMaxN2D3P9: Extrema<Exponent<Prime>> =
            computePrimeExponentExtremaGivenMaxN2D3P3(prime, maxN2D3P9)

        // TODO: use a constant for an empty prime exponent extrema, to avoid confusion with the [0,0] for five rough stuff
        if (deepEquals(primeExponentExtremaGivenMaxN2D3P9, [0, 0])) {
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
