import { PRIMES } from "../primes"

const computePrimeCount = (value: number) =>
    PRIMES.findIndex(prime => prime > value)

export {
    computePrimeCount,
}
