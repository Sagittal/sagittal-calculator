import { Max, Numerator } from "../../../../../../general"
import { N2D3P9 } from "../../../../types"
import { computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9 } from "../../maxNumeratorWithLessN2D3P9"
import { computeNumeratorMonzosToCheckGivenMaxN2D3P9 } from "./numeratorMonzosToCheck"

const computeMaxNumeratorGivenMaxN2D3P3 = (maxN2D3P9: Max<N2D3P9>): Max<Numerator> => {
    const numeratorMonzosToCheck = computeNumeratorMonzosToCheckGivenMaxN2D3P9(maxN2D3P9)

    return computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9(numeratorMonzosToCheck, maxN2D3P9)
}

export {
    computeMaxNumeratorGivenMaxN2D3P3,
}
