import { computePrimeCount, indexOfFinalElement, isUndefined, min, PRIMES, ZERO_ONE_INDEX_DIFF } from "../../general"
import { TwoThreeFreePrimesToCheckOptions } from "./types"

const compute23FreePrimesToCheck = (options: TwoThreeFreePrimesToCheckOptions) => {
    const { maxPrimeLimit, max23FreeSopfr, primeExponentExtremasGivenMaxN2D3P9 } = options

    if (
        isUndefined(maxPrimeLimit) &&
        isUndefined(max23FreeSopfr) &&
        isUndefined(primeExponentExtremasGivenMaxN2D3P9)
    ) {
        throw new Error("The maximum prime must be limited somehow.")
    }

    const indexOfMaxPrimeByPrimeLimit =
        !isUndefined(maxPrimeLimit) ? computePrimeCount(maxPrimeLimit) - ZERO_ONE_INDEX_DIFF : Infinity
    const indexOfMaxPrimeBy23FreeSopfr =
        !isUndefined(max23FreeSopfr) ? computePrimeCount(max23FreeSopfr) - ZERO_ONE_INDEX_DIFF : Infinity
    const indexOfMaxPrimeByN2D3P9 =
        !isUndefined(primeExponentExtremasGivenMaxN2D3P9) ? 
            indexOfFinalElement(primeExponentExtremasGivenMaxN2D3P9) : 
            Infinity

    const indexOfMaxPrime = min(
        indexOfMaxPrimeByPrimeLimit,
        indexOfMaxPrimeBy23FreeSopfr,
        indexOfMaxPrimeByN2D3P9,
    )

    return PRIMES.slice(2, indexOfMaxPrime + 1)
}

export {
    compute23FreePrimesToCheck,
}
