import { sort } from "../../../code"
import { computeGpf, dividesEvenly, Numerator } from "../../../math"
import { computeN2 } from "./n2"
import {
    ComputeSortedNumeratorPossibilitiesOptions,
    N2P,
    NumeratorPossibilityWithGreaterGpfThanDenominatorPrime,
    SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
} from "./types"

const computeN2P = (numerator: Numerator): N2P => {
    return computeN2(numerator) * computeGpf(numerator) as N2P
}

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
