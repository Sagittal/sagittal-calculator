import { Denominator, Prime } from "../../../math"
import { Max } from "../../../types"
import { N2D3P9 } from "../types"
import { computeNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2 } from "./n2"
import { computeNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P } from "./n2p"
import { computeNumeratorPossibilitiesGivenMaxN2D3P3 } from "./numeratorPossibilities"
import { SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 } from "./types"

const computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 = (denominatorPrime: Prime<Denominator>, maxN2D3P9: Max<N2D3P9>): SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 => {
    const numeratorPossibilitiesGivenMaxN2D3P3 = computeNumeratorPossibilitiesGivenMaxN2D3P3(maxN2D3P9)

    const numeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2 =
        computeNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2({
            denominatorPrime,
            numeratorPossibilitiesGivenMaxN2D3P3,
        })
    const numeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P =
        computeNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P({
            denominatorPrime,
            numeratorPossibilitiesGivenMaxN2D3P3,
        })

    return {
        numeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2,
        numeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P,
    }
}

export {
    computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
}
