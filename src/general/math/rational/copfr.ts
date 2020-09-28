import { NumTypeParameters } from "../num"
import { abs } from "../typedOperations"
import { Exponent } from "../types"
import { computeRationalMonzoFromIntegerOrRationalMonzo, RationalMonzo } from "./num"
import { Copfr, Integer, Prime } from "./types"

// Count Of Prime Factors with Repetition (big omega)

const computeCopfr = <T extends NumTypeParameters>(integerOrRationalMonzo: Integer<T> | RationalMonzo<T>): Copfr<T> => {
    const monzo = computeRationalMonzoFromIntegerOrRationalMonzo(integerOrRationalMonzo)

    return monzo.reduce(
        (copfr: Copfr<T>, primeExponent: Integer & Exponent<Prime>): Copfr<T> =>
            copfr + abs(primeExponent) as Copfr<T>,
        0 as Copfr<T>,
    )
}

export {
    computeCopfr,
}
