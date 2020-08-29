import { Denominator, Max, Prime } from "../../../../../../general"
import { N2D3P9 } from "../../../types"
import { computeNumeratorPossibilitiesGivenMaxN2D3P3 } from "./numeratorPossibilities"
import { computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P } from "./sortedNumeratorPossibilitiesWithGreaterGpf"
import { computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2 } from "./sortedNumeratorPossibilitiesWithLesserGpf"
import { SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 } from "./types"

const computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 = (
    denominatorPrime: Prime<Denominator>,
    maxN2D3P9: Max<N2D3P9>,
): SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 => {
    const numeratorPossibilitiesGivenMaxN2D3P3 = computeNumeratorPossibilitiesGivenMaxN2D3P3(maxN2D3P9)

    const sortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2 =
        computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2({
            denominatorPrime,
            numeratorPossibilitiesGivenMaxN2D3P3,
        })
    const sortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P =
        computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P({
            denominatorPrime,
            numeratorPossibilitiesGivenMaxN2D3P3,
        })

    return {
        sortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2,
        sortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P,
    }
}

export {
    computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
}
