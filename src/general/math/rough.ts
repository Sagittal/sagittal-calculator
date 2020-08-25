import { Exponent, Prime, PRIMES } from "../math"
import { Monzo } from "./types"

const computeRoughNumberMonzo = (monzo: Monzo, roughness: number): Monzo => { // TODO: probably just search for all ": number" because they could probably be improved
    const roughnessIndex = PRIMES.findIndex(prime => prime === roughness)

    return monzo.map((primeExponent: Exponent<Prime>, index): Exponent<Prime> =>
        index < roughnessIndex ? 0 as Exponent<Prime> : primeExponent)
}

export {
    computeRoughNumberMonzo,
}
