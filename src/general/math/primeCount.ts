import { PRIMES } from "../constants"

const computePrimeCount = (value: number) =>
    PRIMES.findIndex(prime => prime > value)

export {
    computePrimeCount,
}
