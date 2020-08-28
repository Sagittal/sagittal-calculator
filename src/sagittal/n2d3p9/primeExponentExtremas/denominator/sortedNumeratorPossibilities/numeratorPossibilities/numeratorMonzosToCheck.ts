import {
    computeMonzosFromPrimeExponentExtremas,
    Exponent,
    Extrema,
    Max,
    Min,
    Monzo,
    Prime,
} from "../../../../../../general"
import { N2D3P9 } from "../../../../types"
import { computeMaxNumeratorPrimeExponentsGivenMaxN2D3P9 } from "./maxNumeratorPrimeExponents"

const computeNumeratorMonzosToCheckGivenMaxN2D3P9 = (maxN2D3P9: Max<N2D3P9>): Monzo[] => {
    const maxNumeratorPrimeExponentsGivenMaxN2D3P9 = computeMaxNumeratorPrimeExponentsGivenMaxN2D3P9(maxN2D3P9)

    const numeratorPrimeExponentExtremaGivenMaxN2D3P9: Array<Extrema<Exponent<Prime>>> =
        maxNumeratorPrimeExponentsGivenMaxN2D3P9.map(maxNumeratorPrimeExponentGivenMaxN2D3P9 => {
            return [0 as Min<Exponent<Prime>>, maxNumeratorPrimeExponentGivenMaxN2D3P9]
        })

    return computeMonzosFromPrimeExponentExtremas(numeratorPrimeExponentExtremaGivenMaxN2D3P9)
}

export {
    computeNumeratorMonzosToCheckGivenMaxN2D3P9,
}
