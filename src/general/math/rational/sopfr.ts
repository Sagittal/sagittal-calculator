import { NumTypeParameters } from "../num"
import { abs } from "../typedOperations"
import { Exponent } from "../types"
import { computeRationalMonzoFromIntegerDecimalOrRationalMonzo, IntegerDecimal, RationalMonzo } from "./num"
import { PRIMES } from "./primes"
import { Prime, Sopfr } from "./types"

// Sum of prime factors

const computeSopfr = <T extends NumTypeParameters>(
    integerDecimalOrRationalMonzo: IntegerDecimal<T> | RationalMonzo<T>
): Sopfr<T> => {
    const monzo = computeRationalMonzoFromIntegerDecimalOrRationalMonzo(integerDecimalOrRationalMonzo)

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
