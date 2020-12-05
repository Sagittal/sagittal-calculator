import {Min} from "@sagittal/general"
import {N2D3P9} from "../../types"
import {computeD39ForPossibleMaxDenominatorPrimeExponent} from "./d39"
import {computeMinN2PForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9} from "./minN2P"
import {MinN2PForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9Options} from "./types"

const computeMinN2D3P9ForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9 = (
    options: MinN2PForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9Options,
): Min<N2D3P9> => {
    const {
        sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
        denominatorPrime,
        possibleMaxDenominatorPrimeExponentGivenMaxN2D3P9,
    } = options

    const minN2PForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9 =
        computeMinN2PForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9({
            sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
            denominatorPrime,
            possibleMaxDenominatorPrimeExponentGivenMaxN2D3P9,
        })
    const d39ForPossibleMaxDenominatorPrimeExponent =
        computeD39ForPossibleMaxDenominatorPrimeExponent({
            denominatorPrime,
            possibleMaxDenominatorPrimeExponentGivenMaxN2D3P9,
        })

    return minN2PForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9 *
    d39ForPossibleMaxDenominatorPrimeExponent as Min<N2D3P9>
}

export {
    computeMinN2D3P9ForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9,
}
