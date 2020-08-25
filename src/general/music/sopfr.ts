import { PRIMES } from "../constants"
import { Exponent } from "../math"
import { Prime } from "../types"
import { computeMonzoFromIntegerOrMonzo } from "./monzoFromIntegerOrMonzo"
import { Monzo, Sopfr } from "./types"

// Sum of prime factors
const computeSopfr = (integerOrMonzo: number | Monzo): Sopfr => {
    const monzo = computeMonzoFromIntegerOrMonzo(integerOrMonzo)

    return monzo.reduce(
        (sopfr: number, primeExponent: Exponent<Prime>, index: number): Sopfr =>
            sopfr + Math.abs(primeExponent * PRIMES[ index ]) as Sopfr,
        0 as Sopfr,
    )
}

export {
    computeSopfr,
}
