import { decrement, Denominator, Exponent, increment, Max, Prime } from "../../../../../../general"
import { N2D3P9 } from "../../types"
import { computeMinN2D3P9ForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 } from "./minN2D3P9"
import {
    computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
    NumeratorPossibilityForDenominatorGivenMaxN2D3P9,
} from "./sortedNumeratorPossibilities"

/*

Helpful references for this implementation:

http://forum.sagittal.org/viewtopic.php?p=2287#p2287
http://forum.sagittal.org/viewtopic.php?p=2288#p2288
http://forum.sagittal.org/viewtopic.php?p=2289#p2289
http://forum.sagittal.org/viewtopic.php?p=2294#p2294
http://forum.sagittal.org/viewtopic.php?p=2295#p2295

*/

const computeMaxDenominatorPrimeExponentGivenMaxN2D3P9 = (
    denominatorPrime: Denominator & Prime,
    maxN2D3P9: Max<N2D3P9>,
    numeratorPossibilitiesForDenominatorGivenMaxN2D3P9: NumeratorPossibilityForDenominatorGivenMaxN2D3P9[],
): Max<Denominator & Exponent<Prime>> => {
    const sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 =
        computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9(
            denominatorPrime,
            maxN2D3P9,
            numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
        )

    let candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 = 1 as Max<Denominator & Exponent<Prime>>
    while (true) {
        const minN2D3P9ForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 =
            computeMinN2D3P9ForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9({
                sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
                denominatorPrime,
                candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9,
            })

        if (minN2D3P9ForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 > maxN2D3P9) {
            candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 =
                decrement(candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9)
            break
        } else {
            candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 =
                increment(candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9)
        }
    }

    return candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 as Max<Denominator & Exponent<Prime>>
}

export {
    computeMaxDenominatorPrimeExponentGivenMaxN2D3P9,
}