import { Exponent } from "../../../math"
import { Prime } from "../../../types"
import { N2D3P9 } from "../types"
import { computeMinimumN2D3P9ForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9 } from "./minimumN2D3P9"
import { computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9 } from "./sortedNumeratorPossibilities"

/*

Helpful references for this implementation:

http://forum.sagittal.org/viewtopic.php?p=2287#p2287
http://forum.sagittal.org/viewtopic.php?p=2288#p2288
http://forum.sagittal.org/viewtopic.php?p=2289#p2289
http://forum.sagittal.org/viewtopic.php?p=2294#p2294
http://forum.sagittal.org/viewtopic.php?p=2295#p2295

*/

const computeMaximumDenominatorPrimeExponentGivenMaximumN2D3P3 = (denominatorPrime: Prime, maximumN2D3P9: N2D3P9): Exponent<Prime> => {
    const sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9 =
        computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9(denominatorPrime, maximumN2D3P9)

    let candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9: Exponent<Prime> = 1 as Exponent<Prime>
    while (true) {
        const minimumN2D3P9ForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9 =
            computeMinimumN2D3P9ForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9({
                sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9,
                denominatorPrime,
                candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9,
            })

        if (minimumN2D3P9ForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9 > maximumN2D3P9) {
            candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9 =
                candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9 - 1 as Exponent<Prime>
            break
        } else {
            candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9 =
                candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9 + 1 as Exponent<Prime>
        }
    }

    return candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9
}

export {
    computeMaximumDenominatorPrimeExponentGivenMaximumN2D3P3,
}
