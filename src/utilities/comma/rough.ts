import { PRIMES } from "../constants"
import { Monzo, PrimeExponent } from "./types"

const computeRoughNumberMonzo = (monzo: Monzo, roughness: number): Monzo => {
    const roughnessIndex = PRIMES.findIndex(prime => prime === roughness)

    return monzo.map((term: PrimeExponent, index): PrimeExponent => {
        return index < roughnessIndex ? 0 as PrimeExponent : term
    })
}

export {
    computeRoughNumberMonzo,
}
