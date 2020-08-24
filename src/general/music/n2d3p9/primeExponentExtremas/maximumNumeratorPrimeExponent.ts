import { computeLog, Exponent } from "../../../math"
import { Prime } from "../../../types"
import { N2D3P9 } from "../types"

const computeMaximumNumeratorPrimeExponentGivenMaximumN2D3P3 = (numeratorPrime: Prime, maximumN2D3P9: N2D3P9): Exponent<Prime> => {
    const power = maximumN2D3P9 * (9 / numeratorPrime)

    return power > 0 ?
        Math.floor(computeLog(power, numeratorPrime / 2)) as Exponent<Prime> :
        0 as Exponent<Prime>
}

export {
    computeMaximumNumeratorPrimeExponentGivenMaximumN2D3P3,
}
