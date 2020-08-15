import { PRIMES } from "../primes"
import { computeMonzoFromInteger } from "./monzoFromInteger"
import { Monzo, Sopfr } from "./types"
import { Exponent } from "../math"
import { Prime } from "../types"

// Sum of prime factors
const computeSopfr = (monzoOrInteger: Monzo | number): Sopfr => {
    let monzo: Monzo
    if (typeof monzoOrInteger === "number") {
        monzo = computeMonzoFromInteger(monzoOrInteger)
    } else {
        monzo = monzoOrInteger
    }

    return monzo.reduce(
        (sopfr: number, primeExponent: Exponent<Prime>, index: number): Sopfr =>
            sopfr + Math.abs(primeExponent * PRIMES[ index ]) as Sopfr,
        0 as Sopfr,
    )
}

export {
    computeSopfr,
}
