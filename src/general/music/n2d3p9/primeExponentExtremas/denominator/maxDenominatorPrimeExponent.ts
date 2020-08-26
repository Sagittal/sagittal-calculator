import { Denominator, Exponent, Max, Prime } from "../../../../math"
import { N2D3P9 } from "../../types"
import { computeMinN2D3P9ForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 } from "./minN2D3P9"
import { computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 } from "./sortedNumeratorPossibilities"

/*

Helpful references for this implementation:

http://forum.sagittal.org/viewtopic.php?p=2287#p2287
http://forum.sagittal.org/viewtopic.php?p=2288#p2288
http://forum.sagittal.org/viewtopic.php?p=2289#p2289
http://forum.sagittal.org/viewtopic.php?p=2294#p2294
http://forum.sagittal.org/viewtopic.php?p=2295#p2295

*/

const computeMaxDenominatorPrimeExponentGivenMaxN2D3P3 = (denominatorPrime: Prime<Denominator>, maxN2D3P9: Max<N2D3P9>): Max<Exponent<Prime<Denominator>>> => {
    const sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 =
        computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9(denominatorPrime, maxN2D3P9)

    let candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9: Max<Exponent<Prime<Denominator>>> = 1 as Max<Exponent<Prime<Denominator>>>
    while (true) {
        const minN2D3P9ForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 =
            computeMinN2D3P9ForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9({
                sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
                denominatorPrime,
                candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9,
            })

        if (minN2D3P9ForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 > maxN2D3P9) {
            candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 =
                candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 - 1 as Max<Exponent<Prime<Denominator>>>
            break
        } else {
            candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 =
                candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 + 1 as Max<Exponent<Prime<Denominator>>>
        }
    }

    return candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 as Max<Exponent<Prime<Denominator>>>
}

export {
    computeMaxDenominatorPrimeExponentGivenMaxN2D3P3,
}
