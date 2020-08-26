import { PRIMES } from "../math"

// Prime Counting Function (π)
// https://mathworld.wolfram.com/PrimeCountingFunction.html

const computePrimeCount = (value: number) =>
    PRIMES.findIndex(prime => prime > value)

export {
    computePrimeCount,
}
