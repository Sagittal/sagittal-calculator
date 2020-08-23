import { Prime } from "../../../types"
import { N2D3P9 } from "../types"
import { computeNumeratorPossibilitiesGivenMaximumN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2 } from "./n2"
import { computeNumeratorPossibilitiesGivenMaximumN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P } from "./n2p"
import { computeNumeratorPossibilitiesGivenMaximumN2D3P3 } from "./numeratorPossibilities"
import { SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9 } from "./types"

const computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9 = (denominatorPrime: Prime, maximumN2D3P9: N2D3P9): SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9 => {
    const numeratorPossibilitiesGivenMaximumN2D3P3 = computeNumeratorPossibilitiesGivenMaximumN2D3P3(maximumN2D3P9)

    const numeratorPossibilitiesGivenMaximumN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2 =
        computeNumeratorPossibilitiesGivenMaximumN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2({
            denominatorPrime,
            numeratorPossibilitiesGivenMaximumN2D3P3,
        })
    const numeratorPossibilitiesGivenMaximumN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P =
        computeNumeratorPossibilitiesGivenMaximumN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P({
            denominatorPrime,
            numeratorPossibilitiesGivenMaximumN2D3P3,
        })

    return {
        numeratorPossibilitiesGivenMaximumN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2,
        numeratorPossibilitiesGivenMaximumN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P,
    }
}

export {
    computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9,
}
