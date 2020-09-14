import { computeMonzoFromIntegerOrMonzo, Monzo } from "./monzo"
import { abs } from "./typedOperations"
import { Copfr, Exponent, Integer, IntegerTypeParameters, Numeric, Prime } from "./types"

// Count Of Prime Factors with Repetition (big omega)

const computeCopfr = <T extends IntegerTypeParameters>(integerOrMonzo: Numeric<T> | Monzo<T>): Copfr<T> => {
    const monzo = computeMonzoFromIntegerOrMonzo(integerOrMonzo)

    return monzo.reduce(
        (copfr: Copfr<T>, primeExponent: Integer & Exponent<Prime>): Copfr<T> =>
            copfr + abs(primeExponent) as Copfr<T>,
        0 as Copfr<T>,
    )
}

export {
    computeCopfr,
}
