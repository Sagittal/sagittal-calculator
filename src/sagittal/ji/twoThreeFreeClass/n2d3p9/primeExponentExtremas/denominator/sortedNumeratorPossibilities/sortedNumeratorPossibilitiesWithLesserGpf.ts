import { KeyPath, sort } from "../../../../../../../general"
import { computeN2 } from "./n2"
import { NumeratorPossibilityForDenominatorGivenMaxN2D3P9 } from "./numeratorPossibilities"
import {
    NumeratorPossibilityWithLesserGpfThanDenominatorPrime,
    SortedNumeratorPossibilitiesOptions,
    SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
} from "./types"

const computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2 = (
    { denominatorPrime, numeratorPossibilitiesForDenominatorGivenMaxN2D3P9 }: SortedNumeratorPossibilitiesOptions,
): SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[] => {
    const numeratorPossibilitiesWithLesserGpf: NumeratorPossibilityWithLesserGpfThanDenominatorPrime[] =
        numeratorPossibilitiesForDenominatorGivenMaxN2D3P9
            .filter((numeratorPossibility: NumeratorPossibilityForDenominatorGivenMaxN2D3P9): boolean => {
                // unlike when computing numerator possibilities with greater GPF than the denominator prime
                // there is no need to filter by if it divides evenly
                // because when the GPF of the numerator is less than the denominator prime,
                // the numerator could not possibly be divisible by it
                return numeratorPossibility.gpf < denominatorPrime
            }) as NumeratorPossibilityWithLesserGpfThanDenominatorPrime[]
    const numeratorPossibilitiesWithLesserGpfIncludingN2 = numeratorPossibilitiesWithLesserGpf
        .map((
            numeratorPossibility: NumeratorPossibilityWithLesserGpfThanDenominatorPrime,
        ): SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2 => {
            return { ...numeratorPossibility, n2: computeN2(numeratorPossibility.numerator) }
        })

    return sort(numeratorPossibilitiesWithLesserGpfIncludingN2, { by: "n2" as KeyPath })
}

export {
    computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2,
}