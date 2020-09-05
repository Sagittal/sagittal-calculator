import { Base, Exponent, floor, Integer, log, Max, Numerator, Power, Prime } from "../../../../general"
import { N2D3P9 } from "../types"

const computeMaxNumeratorPrimeExponentGivenMaxN2D3P3 = (
    numeratorPrime: Prime<Numerator>,
    maxN2D3P9: Max<N2D3P9>,
): Max<Integer & Exponent<Prime<Numerator>>> => {
    const power = maxN2D3P9 * 9 * (1 / numeratorPrime) as Power<Prime<Numerator>>

    return power > 0 ?
        floor(log(power, numeratorPrime / 2 as Base<Prime<Numerator>>)) as Max<Integer & Exponent<Prime<Numerator>>> :
        0 as Max<Integer & Exponent<Prime<Numerator>>>
}

export {
    computeMaxNumeratorPrimeExponentGivenMaxN2D3P3,
}
