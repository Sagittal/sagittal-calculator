import {Denominator, Io, LogTarget, Max, Of, Prime, saveLog, stringify} from "@sagittal/general"
import {N2D3P9} from "../../../types"
import {NumeratorPossibilityForDenominatorGivenMaxN2D3P9} from "./numeratorPossibilities"
import {computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P} from "./sortedNumeratorPossibilitiesWithGreaterGpf"
import {computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2} from "./sortedNumeratorPossibilitiesWithLesserGpf"
import {SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9} from "./types"

const computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 = (
    denominatorPrime: Prime & Of<Denominator>,
    maxN2D3P9: Max<N2D3P9>,
    numeratorPossibilitiesForDenominatorGivenMaxN2D3P9: NumeratorPossibilityForDenominatorGivenMaxN2D3P9[],
): SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 => {
    const sortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2 =
        computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2({
            denominatorPrime,
            numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
        })
    saveLog(
        stringify(
            sortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2,
            {multiline: true},
        ) as Io,
        LogTarget.PROGRESS,
    )

    const sortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P =
        computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P({
            denominatorPrime,
            numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
        })
    saveLog(
        stringify(
            sortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P,
            {multiline: true},
        ) as Io,
        LogTarget.PROGRESS,
    )

    return {
        sortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2,
        sortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P,
    }
}

export {
    computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
}
