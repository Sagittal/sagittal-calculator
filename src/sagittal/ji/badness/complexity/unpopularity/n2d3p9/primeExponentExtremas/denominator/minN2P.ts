import {Min, min, pow} from "@sagittal/general"
import {
    N2P,
    SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
    SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
} from "./sortedNumeratorPossibilities"
import {MinN2PForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9Options} from "./types"

const computeMinN2PForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9 = (
    options: MinN2PForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9Options,
): Min<N2P> => {
    const {
        sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
        denominatorPrime,
        possibleMaxDenominatorPrimeExponentGivenMaxN2D3P9,
    } = options
    const {
        sortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2,
        sortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P,
    } = sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9

    const possibleMaxDenominatorPower = pow(
        denominatorPrime,
        possibleMaxDenominatorPrimeExponentGivenMaxN2D3P9,
    )

    const actualNumeratorPossibilityWithLesserGpfThanDenominatorPrimeWithLeastN2 =
        sortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2
            .find((
                numeratorPossibility: SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
            ): boolean => {
                return numeratorPossibility.numerator > possibleMaxDenominatorPower
            })
    const fromNumeratorsWithLesserGpfThanDenominatorPrimeDenominatorPowerMinN2P: Min<N2P> =
        actualNumeratorPossibilityWithLesserGpfThanDenominatorPrimeWithLeastN2 ?
            actualNumeratorPossibilityWithLesserGpfThanDenominatorPrimeWithLeastN2.n2 * denominatorPrime as Min<N2P> :
            Infinity as Min<N2P>

    const actualNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeWithLeastN2P =
        sortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P
            .find((
                numeratorPossibility: SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
            ): boolean => {
                return numeratorPossibility.numerator > possibleMaxDenominatorPower
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
    computeMinN2PForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9,
}
