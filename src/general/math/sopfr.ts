import { abs, Exponent, Integer, NumericTypeParameters, Prime, PRIMES } from "../math"
import { computeMonzoFromIntegerOrMonzo, Monzo } from "./monzo"
import { Sopfr } from "./types"

// Sum of prime factors

const computeSopfr = <T extends NumericTypeParameters>(integerOrMonzo: Integer | Monzo<T>): Sopfr<T> => {
    const monzo = computeMonzoFromIntegerOrMonzo(integerOrMonzo)

    return monzo.reduce(
        (sopfr: Sopfr<T>, primeExponent: Exponent<Prime>, index: number): Sopfr<T> => {
            const prime = abs(primeExponent * PRIMES[ index ])

            return sopfr + prime as Sopfr<T>
        },
        0 as Sopfr<T>,
    )
}

export {
    computeSopfr,
}
