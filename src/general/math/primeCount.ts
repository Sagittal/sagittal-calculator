import { Integer, Prime, PRIMES, Roughness, Smoothness } from "../math"
import { Count, Index } from "../types"
import { SMOOTH_ROUGH_OFFSET } from "./constants"

// Prime Counting Function (π)
// https://mathworld.wolfram.com/PrimeCountingFunction.html

const computePrimeCount = (value: number): Count<Prime> =>
    PRIMES.findIndex(prime => prime > value) as Count<Prime>

const computeRoughnessIndex = (roughness: Roughness): Index<Prime> =>
    PRIMES.findIndex(prime => prime >= roughness) as Index<Prime>

const computeSmoothnessIndex = (smoothness: Smoothness): Index<Prime> =>
    computeRoughnessIndex(smoothness as Integer as Roughness) + SMOOTH_ROUGH_OFFSET as Index<Prime>

export {
    computePrimeCount,
    computeRoughnessIndex,
    computeSmoothnessIndex,
}
