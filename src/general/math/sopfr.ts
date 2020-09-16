import { computeMonzoFromIntegerOrMonzo, Monzo } from "./monzo"
import { PRIMES } from "./primes"
import { abs } from "./typedOperations"
import { Exponent, Integer, Numeric, Prime, RationalTypeParameters, Sopfr } from "./types"

// Sum of prime factors

const computeSopfr = <T extends RationalTypeParameters>(integerOrMonzo: Integer | Monzo<T>): Sopfr<T> => {
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
