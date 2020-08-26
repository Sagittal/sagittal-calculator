import { abs, Exponent, Integer, Prime, PRIMES } from "../math"
import { computeMonzoFromIntegerOrMonzo } from "./monzoFromIntegerOrMonzo"
import { Monzo, Sopfr } from "./types"

// Sum of prime factors

const computeSopfr = (integerOrMonzo: Integer | Monzo): Sopfr => {
    const monzo = computeMonzoFromIntegerOrMonzo(integerOrMonzo)

    return monzo.reduce(
        (sopfr: Sopfr, primeExponent: Exponent<Prime>, index: number): Sopfr => {
            const prime = abs(primeExponent * PRIMES[ index ])

            return sopfr + prime as Sopfr
        },
        0 as Sopfr,
    )
}

export {
    computeSopfr,
}
