import {
    computeRationalMonzosFromPrimeExponentExtremas,
    Direction,
    Exponent,
    Extrema,
    Integer,
    IntegerMonzo,
    IntegerNumerator,
    Max,
    Min,
    Prime,
} from "../../../../../../../../general"
import { N2D3P9 } from "../../../../types"
import { computeMaxNumeratorPrimeExponentsGivenMaxN2D3P9 } from "./maxNumeratorPrimeExponents"

const computeNumeratorMonzosToCheckGivenMaxN2D3P9 = (
    maxN2D3P9: Max<N2D3P9>,
): Array<IntegerMonzo<{ direction: Direction.SUPER, rough: 5 }>> => {
    const maxNumeratorPrimeExponentsGivenMaxN2D3P9 = computeMaxNumeratorPrimeExponentsGivenMaxN2D3P9(maxN2D3P9)

    const numeratorPrimeExponentExtremaGivenMaxN2D3P9: Array<Extrema<Integer & Exponent<Prime>>> =
        maxNumeratorPrimeExponentsGivenMaxN2D3P9.map((
            maxNumeratorPrimeExponentGivenMaxN2D3P9: Max<IntegerNumerator & Exponent<Prime>>,
        ): Extrema<Integer & Exponent<Prime>> => {
            return [0 as Min<Integer & Exponent<Prime>>, maxNumeratorPrimeExponentGivenMaxN2D3P9]
        })

    // TODO: SPEED UP MAX N2D3P9 FILTERING
    //  See if you can abstract and adapt what you're doing
    //  In popular23FreeClasses to avoid precalculating all the monzos for the prime exponent extrema
    //  The ones which include both the denominator and the numerator
    //  So that you can use it here, since this computeRationalMonzosFromPrimeExponentExtremas turns out to be
    //  So ill-advised. try to get rid of it.
    //  - and I'm pretty sure this is the same thing we want to try to do in compute23FreeMonzosToCheck!!
    //  I.e. Might it be preferable to do the strategy where instead of populating the whole list of monzos to check
    //  You instead go with the technique the N2D3P9 is already taking with the prime exponent extremas?
    //  That is maybe you should abstract/extract that bit in the popular 2,3-free script group
    //  Which found a way to take some prime exponent extremas and check each of them
    //  And just have the artifact from here be one of those extremas?
    //  - might also save some energy, what with these all being mirrored

    return computeRationalMonzosFromPrimeExponentExtremas(
        numeratorPrimeExponentExtremaGivenMaxN2D3P9,
    ) as Array<IntegerMonzo<{ direction: Direction.SUPER, rough: 5 }>>
}

export {
    computeNumeratorMonzosToCheckGivenMaxN2D3P9,
}
