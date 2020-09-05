import { Exponent, Integer, Monzo, Prime, PRIMES } from "../math"
import { Roughness } from "./types"

const computeRoughNumberMonzo = (monzo: Monzo, roughness: Roughness): Monzo => {
    const roughnessIndex = PRIMES.findIndex(prime => prime as Integer >= roughness)

    return monzo.map((primeExponent: Integer & Exponent<Prime>, index): Integer & Exponent<Prime> =>
        index < roughnessIndex ? 0 as Integer & Exponent<Prime> : primeExponent)
}

export {
    computeRoughNumberMonzo,
}
