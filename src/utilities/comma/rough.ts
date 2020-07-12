import { PRIMES } from "../constants"
import { Monzo, PrimeExponent } from "./types"

const computeRoughNumberMonzo = (monzo: Monzo, roughness: number): Monzo => {
    const roughnessIndex = PRIMES.findIndex(prime => prime === roughness)

    return monzo.map((primeExponent: PrimeExponent, index): PrimeExponent => { // todo: repalce term and monzoTerm with primeExponent where you can
        return index < roughnessIndex ? 0 as PrimeExponent : primeExponent
    })
}

export {
    computeRoughNumberMonzo,
}
