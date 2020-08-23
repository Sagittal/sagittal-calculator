import { PRIMES } from "../../../constants"
import { Exponent } from "../../../math"
import { Index, Prime } from "../../../types"
import { N2D3P9 } from "../types"
import { computeMaximumNumeratorPrimeExponentGivenMaximumN2D3P3 } from "./maximumNumeratorPrimeExponent"

const computeMaximumNumeratorPrimeExponentsGivenMaximumN2D3P9 = (maximumN2D3P9: N2D3P9): Array<Exponent<Prime>> => {
    // TODO: FIVE ROUGH LINK add constants for the 2 and [0,0] re: five-rough
    let numeratorPrimeIndex = 2 as Index<Prime>
    const maximumNumeratorPrimeExponentsGivenMaximumN2D3P9 = [0, 0] as Array<Exponent<Prime>>
    while (true) {
        const numeratorPrime = PRIMES[ numeratorPrimeIndex ]

        const maximumNumeratorPrimeExponentGivenMaximumN2D3P3 =
            computeMaximumNumeratorPrimeExponentGivenMaximumN2D3P3(numeratorPrime, maximumN2D3P9)

        if (maximumNumeratorPrimeExponentGivenMaximumN2D3P3 === 0) {
            break
        }
        maximumNumeratorPrimeExponentsGivenMaximumN2D3P9.push(maximumNumeratorPrimeExponentGivenMaximumN2D3P3)
        numeratorPrimeIndex = numeratorPrimeIndex + 1 as Index<Prime>
    }

    return maximumNumeratorPrimeExponentsGivenMaximumN2D3P9
}

export {
    computeMaximumNumeratorPrimeExponentsGivenMaximumN2D3P9,
}
