import { NumTypeParameters } from "../num"
import { abs } from "../typedOperations"
import { Exponent } from "../types"
import { computeRationalMonzoFromIntegerDecimalOrRationalMonzo, IntegerDecimal, RationalMonzo } from "./num"
import { Copfr, Prime } from "./types"

// Count Of Prime Factors with Repetition (big omega)

const computeCopfr = <T extends NumTypeParameters>(
    integerDecimalOrRationalMonzo: IntegerDecimal<T> | RationalMonzo<T>
): Copfr<T> => {
    const monzo = computeRationalMonzoFromIntegerDecimalOrRationalMonzo(integerDecimalOrRationalMonzo)

    return monzo.reduce(
        (copfr: Copfr<T>, primeExponent: IntegerDecimal & Exponent<Prime>): Copfr<T> =>
            copfr + abs(primeExponent) as Copfr<T>,
        0 as Copfr<T>,
    )
}

export {
    computeCopfr,
}
