import { Monzo, NumTypeParameters } from "../num"
import { abs } from "../typedOperations"
import { Exponent } from "../types"
import { computeMonzoFromIntegerOrMonzo } from "./num"
import { PRIMES } from "./primes"
import { Integer, Prime, Sopfr } from "./types"

// Sum of prime factors

const computeSopfr = <T extends NumTypeParameters>(integerOrMonzo: Integer<T> | Monzo<T>): Sopfr<T> => {
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
