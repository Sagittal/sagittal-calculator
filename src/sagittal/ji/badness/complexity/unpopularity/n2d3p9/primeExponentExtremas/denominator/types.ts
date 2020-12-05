import {Decimal, Denominator, Exponent, Max, Of, Prime} from "@sagittal/general"
import {SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9} from "./sortedNumeratorPossibilities"

interface D39ForPossibleMaxDenominatorPrimeExponentOptions {
    denominatorPrime: Prime & Of<Denominator>,
    possibleMaxDenominatorPrimeExponentGivenMaxN2D3P9: Max<Denominator & Decimal<{integer: true}> & Exponent<Prime>>,
}

interface MinN2PForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9Options
    extends D39ForPossibleMaxDenominatorPrimeExponentOptions {
    sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9:
        SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
}

type D39 = number & {_D39Brand: boolean}

export {
    MinN2PForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9Options,
    D39ForPossibleMaxDenominatorPrimeExponentOptions,
    D39,
}
