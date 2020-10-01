import { Exponent, Extrema, IntegerDecimal, IntegerNumerator, Max, Min, Prime } from "../../../../../../../../general"
import { N2D3P9 } from "../../../../types"
import { computeMaxNumeratorPrimeExponentsGivenMaxN2D3P9 } from "./maxNumeratorPrimeExponents"

const computeNumeratorPrimeExponentExtremasGivenMaxN2D3P9 = (
    maxN2D3P9: Max<N2D3P9>,
): Array<Extrema<IntegerDecimal & Exponent<Prime>>> => {
    const maxNumeratorPrimeExponentsGivenMaxN2D3P9 = computeMaxNumeratorPrimeExponentsGivenMaxN2D3P9(maxN2D3P9)

    return maxNumeratorPrimeExponentsGivenMaxN2D3P9.map((
        maxNumeratorPrimeExponentGivenMaxN2D3P9: Max<IntegerNumerator & Exponent<Prime>>,
    ): Extrema<IntegerDecimal & Exponent<Prime>> => {
        return [0 as Min<IntegerDecimal & Exponent<Prime>>, maxNumeratorPrimeExponentGivenMaxN2D3P9]
    })
}

export {
    computeNumeratorPrimeExponentExtremasGivenMaxN2D3P9,
}
