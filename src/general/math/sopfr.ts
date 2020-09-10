import { abs, Exponent, Integer, NumericTypeParameters, Prime, PRIMES } from "../math"
import { computeMonzoFromIntegerOrMonzo, Monzo } from "./monzo"
import { Sopfr } from "./types"

// Sum of prime factors

const computeSopfr = <T extends NumericTypeParameters = { irrational: true }>(
    integerOrMonzo: Integer | Monzo<T>,
): Sopfr => {
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
