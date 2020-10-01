import {
    computeIntegerDecimalFromIntegerMonzo,
    computeRealFromMonzo,
    doForEachMonzo,
    Exponent,
    Extrema,
    IntegerDecimal,
    IntegerMonzo,
    IntegerNumerator,
    max,
    Max,
    Maybe,
    Prime,
    RationalMonzo,
    Two3FreeClass,
} from "../../../../../../general"
import { computeN2D3P9 } from "../../n2d3p9"
import { N2D3P9 } from "../../types"

const computeMaybeNumeratorWithinMaxN2D3P9 = (
    numeratorMonzoToCheck: IntegerMonzo,
    maxN2D3P9: Max<N2D3P9>,
): Maybe<IntegerNumerator> => {
    const n2d3p9 = computeN2D3P9(computeRealFromMonzo(numeratorMonzoToCheck as RationalMonzo) as Two3FreeClass)

    return n2d3p9 < maxN2D3P9 ?
        computeIntegerDecimalFromIntegerMonzo(numeratorMonzoToCheck) as IntegerNumerator :
        undefined
}

const computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9 = (
    numeratorPrimeExponentExtremasGivenMaxN2D3P9: Array<Extrema<IntegerDecimal & Exponent<Prime>>>,
    maxN2D3P9: Max<N2D3P9>,
): Max<IntegerNumerator> => {
    const numerators = doForEachMonzo(
        numeratorPrimeExponentExtremasGivenMaxN2D3P9,
        computeMaybeNumeratorWithinMaxN2D3P9,
        maxN2D3P9,
    )

    return max(...numerators)
}

export {
    computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9,
}
