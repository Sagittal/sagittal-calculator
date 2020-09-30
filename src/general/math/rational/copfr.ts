import { computeRealFromRealOrDecimal, NumericProperties } from "../real"
import { abs } from "../typedOperations"
import { Exponent } from "../types"
import { computeRationalMonzoFromRational, IntegerDecimal, Rational, RationalDecimal } from "./real"
import { Copfr, Prime } from "./types"

// Count Of Prime Factors with Repetition (big omega)

const computeCopfr = <T extends NumericProperties>(
    rationalOrRationalDecimal: Rational<T> | RationalDecimal<T>
): Copfr<T> => {
    const rationalMonzo = computeRationalMonzoFromRational(computeRealFromRealOrDecimal(rationalOrRationalDecimal))

    return rationalMonzo.reduce(
        (copfr: Copfr<T>, primeExponent: IntegerDecimal & Exponent<Prime>): Copfr<T> =>
            copfr + abs(primeExponent) as Copfr<T>,
        0 as Copfr<T>,
    )
}

export {
    computeCopfr,
}
