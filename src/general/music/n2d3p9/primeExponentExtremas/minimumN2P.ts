import {
    ComputeMinimumN2PForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9Options,
    NumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
    NumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
} from "./types"

const computeMinimumN2PForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9 = (options: ComputeMinimumN2PForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9Options) => {
    const {
        sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9,
        denominatorPrime,
        candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9,
    } = options
    const {
        numeratorPossibilitiesGivenMaximumN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2,
        numeratorPossibilitiesGivenMaximumN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P,
    } = sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaximumN2D3P9

    // TODO: are there other places where I named something "possible" but "candidate" would have been better?
    const candidateMaximumDenominatorPower = Math.pow(
        denominatorPrime,
        candidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9,
    )

    const actualNumeratorPossibilityWithLesserGpfThanDenominatorPrimeWithLeastN2: NumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2 | undefined =
        numeratorPossibilitiesGivenMaximumN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2.find(numeratorPossibility => {
            return numeratorPossibility.numerator > candidateMaximumDenominatorPower
        })
    const fromNumeratorsWithLesserGpfThanDenominatorPrimeDenominatorPowerMinimumN2P =
        actualNumeratorPossibilityWithLesserGpfThanDenominatorPrimeWithLeastN2 ?
            actualNumeratorPossibilityWithLesserGpfThanDenominatorPrimeWithLeastN2.n2 * denominatorPrime :
            Infinity

    const actualNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeWithLeastN2P: NumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P | undefined =
        numeratorPossibilitiesGivenMaximumN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P.find(numeratorPossibility => {
            return numeratorPossibility.numerator > candidateMaximumDenominatorPower
        })
    const fromNumeratorsWithGreaterGpfThanDenominatorPrimeDenominatorPowerMinimumN2P =
        actualNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeWithLeastN2P ?
            actualNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeWithLeastN2P.n2p :
            Infinity

    return Math.min(
        fromNumeratorsWithLesserGpfThanDenominatorPrimeDenominatorPowerMinimumN2P,
        fromNumeratorsWithGreaterGpfThanDenominatorPrimeDenominatorPowerMinimumN2P,
    )
}

export {
    computeMinimumN2PForCandidateMaximumDenominatorPrimeExponentGivenMaximumN2D3P9,
}
