import {PRIMES} from "./constants"

const computePrimeCount = value => {
    return PRIMES.findIndex(prime => prime > value)
}

export {
    computePrimeCount,
}
