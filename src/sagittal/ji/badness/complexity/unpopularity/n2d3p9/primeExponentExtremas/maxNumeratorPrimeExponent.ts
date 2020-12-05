import {Decimal, Exponent, floor, log, Max, Numerator, Of, Power, Prime} from "@sagittal/general"
import {N2D3P9} from "../types"

const computeMaxNumeratorPrimeExponentGivenMaxN2D3P9 = (
    numeratorPrime: Prime & Of<Numerator>,
    maxN2D3P9: Max<N2D3P9>,
): Max<Numerator & Decimal<{integer: true}> & Exponent<Prime>> => {
    const power = maxN2D3P9 * 9 * (1 / numeratorPrime) as Power<Prime & Of<Numerator>>

    if (power <= 0) {
        return 0 as Max<Numerator & Decimal<{integer: true}> & Exponent<Prime>>
    }

    const base = numeratorPrime / 2

    return floor(log(power, base)) as Max<Numerator & Decimal<{integer: true}> & Exponent<Prime>>

}

export {
    computeMaxNumeratorPrimeExponentGivenMaxN2D3P9,
}
