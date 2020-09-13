import { sort } from "../../../../../../../general"
import { computeN2 } from "./n2"
import { NumeratorPossibilityGivenMaxN2D3P3 } from "./numeratorPossibilities"
import {
    NumeratorPossibilityWithLesserGpfThanDenominatorPrime,
    SortedNumeratorPossibilitiesOptions,
    SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
} from "./types"

const computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2 = (
    { denominatorPrime, numeratorPossibilitiesGivenMaxN2D3P3 }: SortedNumeratorPossibilitiesOptions,
): SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[] => {
    const numeratorPossibilitiesWithLesserGpf: NumeratorPossibilityWithLesserGpfThanDenominatorPrime[] =
        numeratorPossibilitiesGivenMaxN2D3P3
            .filter((numeratorPossibility: NumeratorPossibilityGivenMaxN2D3P3): boolean => {
                // unlike when computing numerator possibilities with greater gpf than the denominator prime
                // there is no need to filter by if it divides evenly
                // because when the gpf of the numerator is less than the denominator prime,
                // the numerator could not possibly be divisible by it
                return numeratorPossibility.gpf < denominatorPrime
            }) as NumeratorPossibilityWithLesserGpfThanDenominatorPrime[]
    const numeratorPossibilitiesWithLesserGpfIncludingN2 = numeratorPossibilitiesWithLesserGpf
        .map((
            numeratorPossibility: NumeratorPossibilityWithLesserGpfThanDenominatorPrime,
        ): SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2 => {
            return { ...numeratorPossibility, n2: computeN2(numeratorPossibility.numerator) }
        })

    return sort(numeratorPossibilitiesWithLesserGpfIncludingN2, { by: "n2" })
}

export {
    computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2,
}
