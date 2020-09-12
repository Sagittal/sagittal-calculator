import { abs, Integer, Monzo, NumericTypeParameters, Sopfr } from "../math"
import { computeMonzoFromIntegerOrMonzo } from "./monzo"
import { Copfr } from "./types"

// Count Of Prime Factors with Repetition (big omega)

const computeCopfr = <T extends NumericTypeParameters>(integerOrMonzo: Integer | Monzo<T>): Copfr<T> => {
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
