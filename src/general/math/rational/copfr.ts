import { abs } from "../typedOperations"
import { Exponent } from "../types"
import { computeMonzoFromIntegerOrMonzo, Monzo } from "./monzo"
import { Copfr, Integer, Prime, RationalNumTypeParameters } from "./types"

// Count Of Prime Factors with Repetition (big omega)

const computeCopfr = <T extends RationalNumTypeParameters>(integerOrMonzo: Integer | Monzo<T>): Copfr<T> => {
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
