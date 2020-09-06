import {
    deepEquals,
    Exponent,
    Extrema,
    FIVE_PRIME_INDEX,
    Index,
    Integer,
    Max,
    Prime,
    PRIMES,
    shallowClone,
} from "../../../../general"
import { N2D3P9 } from "../types"
import { EMPTY_PRIME_EXPONENT_EXTREMA, INITIAL_PRIME_EXPONENT_EXTREMAS_FOR_TWO_AND_THREE } from "./constants"
import { computePrimeExponentExtremaGivenMaxN2D3P3 } from "./primeExponentExtrema"

const computePrimeExponentExtremasGivenMaxN2D3P9 = (
    maxN2D3P9: Max<N2D3P9>,
    options: { mirrored?: boolean } = {},
): Array<Extrema<Integer & Exponent<Prime>>> => {
    const primeExponentExtremasGivenMaxN2D3P9: Array<Extrema<Integer & Exponent<Prime>>> =
        shallowClone(INITIAL_PRIME_EXPONENT_EXTREMAS_FOR_TWO_AND_THREE)

    let index = FIVE_PRIME_INDEX
    while (true) {
        const prime = PRIMES[ index ]
        const primeExponentExtremaGivenMaxN2D3P9: Extrema<Integer & Exponent<Prime>> =
            computePrimeExponentExtremaGivenMaxN2D3P3(prime, maxN2D3P9, options)

        if (deepEquals(primeExponentExtremaGivenMaxN2D3P9, EMPTY_PRIME_EXPONENT_EXTREMA)) {
            break
        } else {
            primeExponentExtremasGivenMaxN2D3P9.push(primeExponentExtremaGivenMaxN2D3P9)
            index = index + 1 as Index<Prime>
        }
    }

    return primeExponentExtremasGivenMaxN2D3P9
}

export {
    computePrimeExponentExtremasGivenMaxN2D3P9,
}
