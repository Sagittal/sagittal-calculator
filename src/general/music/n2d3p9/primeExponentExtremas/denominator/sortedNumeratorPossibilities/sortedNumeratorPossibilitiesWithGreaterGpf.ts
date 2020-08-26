import { sort } from "../../../../../code"
import { dividesEvenly } from "../../../../../math"
import { computeN2P } from "./n2p"
import {
    ComputeSortedNumeratorPossibilitiesOptions,
    NumeratorPossibilityWithGreaterGpfThanDenominatorPrime,
    SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
} from "./types"

const computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P = ({ denominatorPrime, numeratorPossibilitiesGivenMaxN2D3P3 }: ComputeSortedNumeratorPossibilitiesOptions): SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[] => {
    const numeratorPossibilitiesWithGreaterGpf: NumeratorPossibilityWithGreaterGpfThanDenominatorPrime[] = numeratorPossibilitiesGivenMaxN2D3P3.filter(numeratorPossibility => {
        return numeratorPossibility.gpf > denominatorPrime && !dividesEvenly(numeratorPossibility.numerator, denominatorPrime)
    }) as NumeratorPossibilityWithGreaterGpfThanDenominatorPrime[]
    const numeratorPossibilitiesWithGreaterGpfIncludingN2P: SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[] = numeratorPossibilitiesWithGreaterGpf.map(numeratorPossibility => {
        return { ...numeratorPossibility, n2p: computeN2P(numeratorPossibility.numerator) }
    })

    return sort(numeratorPossibilitiesWithGreaterGpfIncludingN2P, { by: "n2p" })
}

export {
    computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P,
}
