import {
    computeMonzosFromPrimeExponentExtremas,
    Exponent,
    Extrema,
    Integer,
    Max,
    Min,
    Monzo,
    Prime,
} from "../../../../../../../../general"
import { N2D3P9 } from "../../../../types"
import { computeMaxNumeratorPrimeExponentsGivenMaxN2D3P9 } from "./maxNumeratorPrimeExponents"

const computeNumeratorMonzosToCheckGivenMaxN2D3P9 = (maxN2D3P9: Max<N2D3P9>): Monzo[] => {
    const maxNumeratorPrimeExponentsGivenMaxN2D3P9 = computeMaxNumeratorPrimeExponentsGivenMaxN2D3P9(maxN2D3P9)

    const numeratorPrimeExponentExtremaGivenMaxN2D3P9: Array<Extrema<Integer & Exponent<Prime>>> =
        maxNumeratorPrimeExponentsGivenMaxN2D3P9.map(maxNumeratorPrimeExponentGivenMaxN2D3P9 => {
            return [0 as Min<Integer & Exponent<Prime>>, maxNumeratorPrimeExponentGivenMaxN2D3P9]
        })

    // TODO: ok so the first step, to massively improve the speed, would be to memoize,
    //  for a given run (for a given max N2D3P9) the monzos from the prime exponent extremas for the numerators
    //  so you don't have to calculate them once for each friggin' denominator
    //  - but an even better step I would think would be to find the points of max N2D3P9 (floats, not integers)
    //  where there were breaks in these prime exponent extrema
    //  and just store that as a hardcoded thing (test it, certainly)
    //  - and another improvement you'd want to try to make is to see if you can abstract and adapt what you're doing
    //  in popular23FreeClasses to avoid precalculating all the monzos for the prime exponent extrema
    //  the ones which include both the denominator and the numerator
    //  so that you can use it here, since this computeMonzosFromPrimeExponentExtremas turns out to be
    //  so ill-advised. try to get rid of it.

    return computeMonzosFromPrimeExponentExtremas(numeratorPrimeExponentExtremaGivenMaxN2D3P9)
}

export {
    computeNumeratorMonzosToCheckGivenMaxN2D3P9,
}
