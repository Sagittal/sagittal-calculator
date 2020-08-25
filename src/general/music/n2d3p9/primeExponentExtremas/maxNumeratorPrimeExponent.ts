import { computeLog, Exponent } from "../../../math"
import { Max, Prime } from "../../../types"
import { N2D3P9 } from "../types"

const computeMaxNumeratorPrimeExponentGivenMaxN2D3P3 = (numeratorPrime: Prime, maxN2D3P9: Max<N2D3P9>): Max<Exponent<Prime>> => {
    const power = maxN2D3P9 * (9 / numeratorPrime)

    return power > 0 ?
        Math.floor(computeLog(power, numeratorPrime / 2)) as Max<Exponent<Prime>> :
        0 as Max<Exponent<Prime>>
}

export {
    computeMaxNumeratorPrimeExponentGivenMaxN2D3P3,
}
