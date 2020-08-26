import { Base, Denominator, Min, min, pow, Prime } from "../../../../math"
import {
    N2P,
    SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
    SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
} from "./sortedNumeratorPossibilities"
import { ComputeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9Options } from "./types"

const computeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 = (options: ComputeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9Options): Min<N2P> => {
    const {
        sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
        denominatorPrime,
        candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9,
    } = options
    const {
        sortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2,
        sortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P,
    } = sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9

    const candidateMaxDenominatorPower = pow(
        denominatorPrime as Base<Prime<Denominator>>,
        candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9,
    )

    const actualNumeratorPossibilityWithLesserGpfThanDenominatorPrimeWithLeastN2: SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2 | undefined =
        sortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2.find(numeratorPossibility => {
            return numeratorPossibility.numerator > candidateMaxDenominatorPower
        })
    const fromNumeratorsWithLesserGpfThanDenominatorPrimeDenominatorPowerMinN2P: Min<N2P> =
        actualNumeratorPossibilityWithLesserGpfThanDenominatorPrimeWithLeastN2 ?
            actualNumeratorPossibilityWithLesserGpfThanDenominatorPrimeWithLeastN2.n2 * denominatorPrime as Min<N2P> :
            Infinity as Min<N2P>

    const actualNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeWithLeastN2P: SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P | undefined =
        sortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P.find(numeratorPossibility => {
            return numeratorPossibility.numerator > candidateMaxDenominatorPower
        })
    const fromNumeratorsWithGreaterGpfThanDenominatorPrimeDenominatorPowerMinN2P: Min<N2P> =
        actualNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeWithLeastN2P ?
            actualNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeWithLeastN2P.n2p as Min<N2P> :
            Infinity as Min<N2P>

    return min(
        fromNumeratorsWithLesserGpfThanDenominatorPrimeDenominatorPowerMinN2P,
        fromNumeratorsWithGreaterGpfThanDenominatorPrimeDenominatorPowerMinN2P,
    )
}

export {
    computeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9,
}
