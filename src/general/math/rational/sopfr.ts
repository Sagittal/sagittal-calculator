import { abs } from "../typedOperations"
import { Exponent } from "../types"
import { computeMonzoFromIntegerOrMonzo, Monzo } from "./monzo"
import { PRIMES } from "./primes"
import { Integer, Prime, RationalNumTypeParameters, Sopfr } from "./types"

// Sum of prime factors

const computeSopfr = <T extends RationalNumTypeParameters>(integerOrMonzo: Integer | Monzo<T>): Sopfr<T> => {
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
