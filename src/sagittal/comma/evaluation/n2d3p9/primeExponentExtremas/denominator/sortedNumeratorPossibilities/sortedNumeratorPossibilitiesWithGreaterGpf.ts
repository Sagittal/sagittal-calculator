import { dividesEvenly, sort } from "../../../../../../../general"
import { computeN2P } from "./n2p"
import { NumeratorPossibilityForDenominatorGivenMaxN2D3P3 } from "./numeratorPossibilities"
import {
    NumeratorPossibilityWithGreaterGpfThanDenominatorPrime,
    SortedNumeratorPossibilitiesOptions,
    SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
} from "./types"

const computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P = (
    { denominatorPrime, numeratorPossibilitiesForDenominatorGivenMaxN2D3P3 }: SortedNumeratorPossibilitiesOptions,
): SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[] => {
    const numeratorPossibilitiesWithGreaterGpf: NumeratorPossibilityWithGreaterGpfThanDenominatorPrime[] =
        numeratorPossibilitiesForDenominatorGivenMaxN2D3P3.filter(
            (numeratorPossibility: NumeratorPossibilityForDenominatorGivenMaxN2D3P3): boolean => {
                return numeratorPossibility.gpf > denominatorPrime &&
                    !dividesEvenly(numeratorPossibility.numerator, denominatorPrime)
            },
        ) as NumeratorPossibilityWithGreaterGpfThanDenominatorPrime[]
    const numeratorPossibilitiesWithGreaterGpfIncludingN2P = numeratorPossibilitiesWithGreaterGpf
        .map((
            numeratorPossibility: NumeratorPossibilityWithGreaterGpfThanDenominatorPrime,
        ): SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P => {
            return { ...numeratorPossibility, n2p: computeN2P(numeratorPossibility.numerator) }
        })

    return sort(numeratorPossibilitiesWithGreaterGpfIncludingN2P, { by: "n2p" })
}

export {
    computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P,
}
