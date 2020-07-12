import { PRIMES } from "../constants"
import { computeMonzoFromInteger } from "./monzoFromInteger"
import { Monzo, PrimeExponent, Sopfr } from "./types"

// sum of prime factors
const computeSopfr = (monzoOrInteger: Monzo | number): Sopfr => {
    let monzo: Monzo
    if (typeof monzoOrInteger === "number") {
        monzo = computeMonzoFromInteger(monzoOrInteger)
    } else {
        monzo = monzoOrInteger
    }

    return monzo.reduce(
        (sopfr: number, primeExponent: PrimeExponent, index: number): Sopfr => {
            return sopfr + Math.abs(primeExponent * PRIMES[ index ]) as Sopfr
        },
        0 as Sopfr,
    )
}

export {
    computeSopfr,
}
