import { deepEquals } from "../../../code"
import { PRIMES } from "../../../constants"
import { Index, Prime } from "../../../types"
import { N2D3P9 } from "../types"
import { computePrimeExponentExtremaGivenMaximumN2D3P3 } from "./primeExponentExtrema"
import { PrimeExponentExtrema } from "./types"

const computePrimeExponentExtremasGivenMaximumN2D3P9 = (maximumN2D3P9: N2D3P9): Array<PrimeExponentExtrema> => {
    const primeExponentExtremasGivenMaximumN2D3P9 = []

    let primeIndex = 2 as Index<Prime> // TODO: FIVE ROUGH LINK and also make sure to be mindful of five rough vs five sliced!
    while (true) {
        const prime = PRIMES[ primeIndex ]
        const primeExponentExtremaGivenMaximumN2D3P9: PrimeExponentExtrema =
            computePrimeExponentExtremaGivenMaximumN2D3P3(prime, maximumN2D3P9)

        // TODO: use a constant for an empty prime exponent extrema, to avoid confusion with the [0,0] for five rough stuff
        if (deepEquals(primeExponentExtremaGivenMaximumN2D3P9, [0, 0])) {
            break
        } else {
            primeExponentExtremasGivenMaximumN2D3P9.push(primeExponentExtremaGivenMaximumN2D3P9)
            primeIndex = primeIndex + 1 as Index<Prime>
        }
    }

    return primeExponentExtremasGivenMaximumN2D3P9
}

export {
    computePrimeExponentExtremasGivenMaximumN2D3P9,
}
