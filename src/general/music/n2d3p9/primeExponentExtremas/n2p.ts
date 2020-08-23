import { dividesEvenly, Numerator } from "../../../math"
import { computeGpf } from "../../gpf"
import { computeN2 } from "./n2"
import {
    ComputeSortedNumeratorPossibilitiesOptions,
    N2P,
    NumeratorPossibilityWithGreaterGpfThanDenominatorPrime,
    NumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
} from "./types"

const computeN2P = (possibleNumerator: Numerator): N2P => {
    return computeN2(possibleNumerator) * computeGpf(possibleNumerator) as N2P
}

const computeNumeratorPossibilitiesGivenMaximumN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P = ({ denominatorPrime, numeratorPossibilitiesGivenMaximumN2D3P3 }: ComputeSortedNumeratorPossibilitiesOptions) => {
    const numeratorPossibilitiesWithGreaterGpf: NumeratorPossibilityWithGreaterGpfThanDenominatorPrime[] = numeratorPossibilitiesGivenMaximumN2D3P3.filter(numeratorPossibility => {
        return numeratorPossibility.gpf > denominatorPrime && !dividesEvenly(numeratorPossibility.numerator, denominatorPrime)
    }) as NumeratorPossibilityWithGreaterGpfThanDenominatorPrime[]
    const numeratorPossibilitiesWithGreaterGpfIncludingN2P: NumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[] = numeratorPossibilitiesWithGreaterGpf.map(numeratorPossibility => {
        return { ...numeratorPossibility, n2p: computeN2P(numeratorPossibility.numerator) }
    })

    return numeratorPossibilitiesWithGreaterGpfIncludingN2P.sort((numeratorPossibility, nextNumeratorPossibility) => {
        return numeratorPossibility.n2p - nextNumeratorPossibility.n2p
    })
}

export {
    computeNumeratorPossibilitiesGivenMaximumN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P,
}
