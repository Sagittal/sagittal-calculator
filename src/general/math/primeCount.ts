import { PRIMES } from "../math"

const computePrimeCount = (value: number) => // TODO: isn't this just copf ???
    PRIMES.findIndex(prime => prime > value)

export {
    computePrimeCount,
}
