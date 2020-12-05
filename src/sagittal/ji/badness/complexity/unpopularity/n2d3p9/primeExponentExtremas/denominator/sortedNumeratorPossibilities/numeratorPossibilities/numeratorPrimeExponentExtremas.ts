import {Decimal, Exponent, Extrema, Max, Min, Numerator, Prime} from "@sagittal/general"
import {N2D3P9} from "../../../../types"
import {computeMaxNumeratorPrimeExponentsGivenMaxN2D3P9} from "./maxNumeratorPrimeExponents"

const computeNumeratorPrimeExponentExtremasGivenMaxN2D3P9 = (
    maxN2D3P9: Max<N2D3P9>,
): Array<Extrema<{of: Decimal<{integer: true}> & Exponent<Prime>}>> => {
    const maxNumeratorPrimeExponentsGivenMaxN2D3P9 = computeMaxNumeratorPrimeExponentsGivenMaxN2D3P9(maxN2D3P9)

    return maxNumeratorPrimeExponentsGivenMaxN2D3P9.map((
        maxNumeratorPrimeExponentGivenMaxN2D3P9: Max<Numerator & Decimal<{integer: true}> & Exponent<Prime>>,
    ): Extrema<{of: Decimal<{integer: true}> & Exponent<Prime>}> => {
        return [0 as Min<Decimal<{integer: true}> & Exponent<Prime>>, maxNumeratorPrimeExponentGivenMaxN2D3P9]
    })
}

export {
    computeNumeratorPrimeExponentExtremasGivenMaxN2D3P9,
}
