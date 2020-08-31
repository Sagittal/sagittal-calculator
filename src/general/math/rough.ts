import { Exponent, Integer, Monzo, Prime, PRIMES } from "../math"
import { Roughness } from "./types"

const computeRoughNumberMonzo = (monzo: Monzo, roughness: Roughness): Monzo => {
    const roughnessIndex = PRIMES.findIndex(prime => prime as Integer >= roughness)

    return monzo.map((primeExponent: Exponent<Prime>, index): Exponent<Prime> =>
        index < roughnessIndex ? 0 as Exponent<Prime> : primeExponent)
}

export {
    computeRoughNumberMonzo,
}
