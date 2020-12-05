import {computeKeyPath, sort} from "@sagittal/general"
import {computeN2} from "./n2"
import {NumeratorPossibilityForDenominatorGivenMaxN2D3P9} from "./numeratorPossibilities"
import {
    NumeratorPossibilityWithLesserGpfThanDenominatorPrime,
    SortedNumeratorPossibilitiesOptions,
    SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
} from "./types"

const computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2 = (
    {denominatorPrime, numeratorPossibilitiesForDenominatorGivenMaxN2D3P9}: SortedNumeratorPossibilitiesOptions,
): SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[] => {
    const numeratorPossibilitiesWithLesserGpf: NumeratorPossibilityWithLesserGpfThanDenominatorPrime[] =
        numeratorPossibilitiesForDenominatorGivenMaxN2D3P9
            .filter((numeratorPossibility: NumeratorPossibilityForDenominatorGivenMaxN2D3P9): boolean => {
                // Unlike when computing numerator possibilities with greater GPF than the denominator prime
                // There is no need to filter by if it divides evenly
                // Because when the GPF of the numerator is less than the denominator prime,
                // The numerator could not possibly be divisible by it
                return numeratorPossibility.gpf < denominatorPrime
            }) as NumeratorPossibilityWithLesserGpfThanDenominatorPrime[]
    const numeratorPossibilitiesWithLesserGpfIncludingN2 = numeratorPossibilitiesWithLesserGpf
        .map((
            numeratorPossibility: NumeratorPossibilityWithLesserGpfThanDenominatorPrime,
        ): SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2 => {
            return {...numeratorPossibility, n2: computeN2(numeratorPossibility.numerator)}
        })

    return sort(numeratorPossibilitiesWithLesserGpfIncludingN2, {by: computeKeyPath("n2")})
}

export {
    computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2,
}
