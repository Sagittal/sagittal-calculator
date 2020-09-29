import { computeNumFromNumParameter, NumTypeParameters } from "../num"
import { abs } from "../typedOperations"
import { Exponent } from "../types"
import { computeRationalMonzoFromRatio, IntegerDecimal, RatioOrRationalDecimal } from "./num"
import { Copfr, Prime } from "./types"

// Count Of Prime Factors with Repetition (big omega)

const computeCopfr = <T extends NumTypeParameters>(rationalParameter: RatioOrRationalDecimal<T>): Copfr<T> => {
    const rationalMonzo = computeRationalMonzoFromRatio(computeNumFromNumParameter(rationalParameter))

    return rationalMonzo.reduce(
        (copfr: Copfr<T>, primeExponent: IntegerDecimal & Exponent<Prime>): Copfr<T> =>
            copfr + abs(primeExponent) as Copfr<T>,
        0 as Copfr<T>,
    )
}

export {
    computeCopfr,
}
