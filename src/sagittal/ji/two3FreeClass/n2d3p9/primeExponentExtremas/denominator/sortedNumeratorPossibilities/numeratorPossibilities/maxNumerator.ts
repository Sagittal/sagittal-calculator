import { IntegerNumerator, Max } from "../../../../../../../../general"
import { N2D3P9 } from "../../../../types"
import { computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9 } from "../../maxNumeratorWithLessN2D3P9"
import { computeNumeratorPrimeExponentExtremasGivenMaxN2D3P9 } from "./numeratorPrimeExponentExtremas"

const computeMaxNumeratorGivenMaxN2D3P9 = (maxN2D3P9: Max<N2D3P9>): Max<IntegerNumerator> => {
    // TODO: really try to refactor to memoize that numerator max
    //  Did I just give up on it before or something?
    //  Also try out Dave's strategy for getting further along: http://forum.sagittal.org/viewtopic.php?p=2481#p2481
    const numeratorPrimeExponentExtremasGivenMaxN2D3P9 = computeNumeratorPrimeExponentExtremasGivenMaxN2D3P9(maxN2D3P9)

    return computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9(numeratorPrimeExponentExtremasGivenMaxN2D3P9, maxN2D3P9)
}

export {
    computeMaxNumeratorGivenMaxN2D3P9,
}
