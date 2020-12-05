import {Decimal, Max, Numerator} from "@sagittal/general"
import {N2D3P9} from "../../../../types"
import {computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9} from "../../maxNumeratorWithLessN2D3P9"
import {computeNumeratorPrimeExponentExtremasGivenMaxN2D3P9} from "./numeratorPrimeExponentExtremas"

const computeMaxNumeratorGivenMaxN2D3P9 = (maxN2D3P9: Max<N2D3P9>): Max<Numerator & Decimal<{integer: true}>> => {
    const numeratorPrimeExponentExtremasGivenMaxN2D3P9 = computeNumeratorPrimeExponentExtremasGivenMaxN2D3P9(maxN2D3P9)

    return computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9(numeratorPrimeExponentExtremasGivenMaxN2D3P9, maxN2D3P9)
}

export {
    computeMaxNumeratorGivenMaxN2D3P9,
}
