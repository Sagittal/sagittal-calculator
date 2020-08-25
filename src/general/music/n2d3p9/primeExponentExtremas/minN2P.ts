import { Min } from "../../../types"
import {
    ComputeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9Options,
    N2P,
    NumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
    NumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
} from "./types"

const computeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9 = (options: ComputeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9Options): Min<N2P> => {
    const {
        sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
        denominatorPrime,
        candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9,
    } = options
    const {
        numeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2,
        numeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P,
    } = sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9

    // TODO: are there other places where I named something "possible" but "candidate" would have been better?
    const candidateMaxDenominatorPower = Math.pow(
        denominatorPrime,
        candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9,
    )

    const actualNumeratorPossibilityWithLesserGpfThanDenominatorPrimeWithLeastN2: NumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2 | undefined =
        numeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2.find(numeratorPossibility => {
            return numeratorPossibility.numerator > candidateMaxDenominatorPower
        })
    const fromNumeratorsWithLesserGpfThanDenominatorPrimeDenominatorPowerMinN2P =
        actualNumeratorPossibilityWithLesserGpfThanDenominatorPrimeWithLeastN2 ?
            actualNumeratorPossibilityWithLesserGpfThanDenominatorPrimeWithLeastN2.n2 * denominatorPrime :
            Infinity

    const actualNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeWithLeastN2P: NumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P | undefined =
        numeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P.find(numeratorPossibility => {
            return numeratorPossibility.numerator > candidateMaxDenominatorPower
        })
    const fromNumeratorsWithGreaterGpfThanDenominatorPrimeDenominatorPowerMinN2P =
        actualNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeWithLeastN2P ?
            actualNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeWithLeastN2P.n2p :
            Infinity

    // TODO: a typed helper which adds Min when taking min (and same for max)
    return Math.min(
        fromNumeratorsWithLesserGpfThanDenominatorPrimeDenominatorPowerMinN2P,
        fromNumeratorsWithGreaterGpfThanDenominatorPrimeDenominatorPowerMinN2P,
    ) as Min<N2P>
}

export {
    computeMinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9,
}
