import { computeRealFromRealOrRealDecimal, NumericProperties } from "../real"
import { abs } from "../typedOperations"
import { Exponent } from "../types"
import { PRIMES } from "./primes"
import { computeRationalMonzoFromRational, Rational, RationalDecimal } from "./real"
import { Prime, Sopfr } from "./types"

// Sum of prime factors

const computeSopfr = <T extends NumericProperties>(
    rationalOrRationalDecimal: Rational<T> | RationalDecimal<T>
): Sopfr<T> => {
    const rationalMonzo = computeRationalMonzoFromRational(computeRealFromRealOrRealDecimal(rationalOrRationalDecimal))

    return rationalMonzo.reduce(
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
