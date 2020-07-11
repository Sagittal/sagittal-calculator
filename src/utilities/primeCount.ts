import { PRIMES } from "./constants"

const computePrimeCount = (value: number) => {
    return PRIMES.findIndex(prime => prime > value)
}

export {
    computePrimeCount,
}
