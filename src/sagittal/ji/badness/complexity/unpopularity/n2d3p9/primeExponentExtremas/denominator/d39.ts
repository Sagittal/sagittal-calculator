import {pow} from "@sagittal/general"
import {D39, D39ForPossibleMaxDenominatorPrimeExponentOptions} from "./types"

const computeD39ForPossibleMaxDenominatorPrimeExponent = (
    options: D39ForPossibleMaxDenominatorPrimeExponentOptions,
): D39 => {
    const {denominatorPrime, possibleMaxDenominatorPrimeExponentGivenMaxN2D3P9} = options

    return pow(denominatorPrime / 3, possibleMaxDenominatorPrimeExponentGivenMaxN2D3P9) / 9 as D39
}

export {
    computeD39ForPossibleMaxDenominatorPrimeExponent,
}
