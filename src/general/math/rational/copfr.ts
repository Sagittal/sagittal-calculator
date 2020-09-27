import { Monzo, NumTypeParameters } from "../num"
import { abs } from "../typedOperations"
import { Exponent } from "../types"
import { computeMonzoFromIntegerOrMonzo } from "./num"
import { Copfr, Integer, Prime } from "./types"

// Count Of Prime Factors with Repetition (big omega)

const computeCopfr = <T extends NumTypeParameters>(integerOrMonzo: Integer<T> | Monzo<T>): Copfr<T> => {
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
