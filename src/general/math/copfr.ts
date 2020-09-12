import { computeMonzoFromIntegerOrMonzo, Monzo } from "./monzo"
import { abs } from "./typedOperations"
import { Copfr, Numeric, RationalTypeParameters } from "./types"

// Count Of Prime Factors with Repetition (big omega)

const computeCopfr = <T extends RationalTypeParameters>(integerOrMonzo: Numeric<T> | Monzo<T>): Copfr<T> => {
    const monzo = computeMonzoFromIntegerOrMonzo(integerOrMonzo)

    return monzo.reduce(
        (copfr, primeExponent) =>
            copfr + abs(primeExponent) as Copfr<T>,
        0 as Copfr<T>,
    )
}

export {
    computeCopfr,
}
