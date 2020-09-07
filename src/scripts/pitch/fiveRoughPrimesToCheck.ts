import { computePrimeCount, isUndefined, min, PRIMES, ZERO_ONE_INDEX_DIFF } from "../../general"
import { FiveRoughPrimesToCheckOptions } from "./types"

const computeFiveRoughPrimesToCheck = (options: FiveRoughPrimesToCheckOptions) => {
    const { maxPrimeLimit, maxFiveRoughSopfr, primeExponentExtremasGivenMaxN2D3P9 } = options

    if (
        isUndefined(maxPrimeLimit) &&
        isUndefined(maxFiveRoughSopfr) &&
        isUndefined(primeExponentExtremasGivenMaxN2D3P9)
    ) {
        throw new Error("The maximum prime must be limited somehow.")
    }

    const indexOfMaxPrimeByPrimeLimit =
        !isUndefined(maxPrimeLimit) ? computePrimeCount(maxPrimeLimit) - ZERO_ONE_INDEX_DIFF : Infinity
    const indexOfMaxPrimeByFiveRoughSopfr =
        !isUndefined(maxFiveRoughSopfr) ? computePrimeCount(maxFiveRoughSopfr) - ZERO_ONE_INDEX_DIFF : Infinity
    const indexOfMaxPrimeByN2D3P9 =
        !isUndefined(primeExponentExtremasGivenMaxN2D3P9) ? primeExponentExtremasGivenMaxN2D3P9.length - 1 : Infinity

    const indexOfMaxPrime = min(indexOfMaxPrimeByPrimeLimit, indexOfMaxPrimeByFiveRoughSopfr, indexOfMaxPrimeByN2D3P9)

    return PRIMES.slice(2, indexOfMaxPrime + 1)
}

export {
    computeFiveRoughPrimesToCheck,
}
