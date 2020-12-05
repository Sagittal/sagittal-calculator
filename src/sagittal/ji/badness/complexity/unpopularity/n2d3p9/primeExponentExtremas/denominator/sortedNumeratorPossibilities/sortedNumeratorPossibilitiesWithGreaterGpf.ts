import {computeKeyPath, dividesEvenly, sort} from "@sagittal/general"
import {computeN2P} from "./n2p"
import {NumeratorPossibilityForDenominatorGivenMaxN2D3P9} from "./numeratorPossibilities"
import {
    NumeratorPossibilityWithGreaterGpfThanDenominatorPrime,
    SortedNumeratorPossibilitiesOptions,
    SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
} from "./types"

const computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P = (
    {denominatorPrime, numeratorPossibilitiesForDenominatorGivenMaxN2D3P9}: SortedNumeratorPossibilitiesOptions,
): SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[] => {
    const numeratorPossibilitiesWithGreaterGpf: NumeratorPossibilityWithGreaterGpfThanDenominatorPrime[] =
        numeratorPossibilitiesForDenominatorGivenMaxN2D3P9.filter(
            (numeratorPossibility: NumeratorPossibilityForDenominatorGivenMaxN2D3P9): boolean => {
                return numeratorPossibility.gpf > denominatorPrime &&
                    !dividesEvenly(numeratorPossibility.numerator, denominatorPrime)
            },
        ) as NumeratorPossibilityWithGreaterGpfThanDenominatorPrime[]
    const numeratorPossibilitiesWithGreaterGpfIncludingN2P = numeratorPossibilitiesWithGreaterGpf
        .map((
            numeratorPossibility: NumeratorPossibilityWithGreaterGpfThanDenominatorPrime,
        ): SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P => {
            return {...numeratorPossibility, n2p: computeN2P(numeratorPossibility.numerator)}
        })

    return sort(numeratorPossibilitiesWithGreaterGpfIncludingN2P, {by: computeKeyPath("n2p")})
}

export {
    computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P,
}
