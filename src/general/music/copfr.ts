import { Integer } from "../math"
import { Count, Prime } from "../types"
import { computeMonzoFromIntegerOrMonzo } from "./monzoFromIntegerOrMonzo"
import { Copfr, Monzo } from "./types"

// Count Of Prime Factors with Repetition (big omega)

const computeCopfr = (integerOrMonzo: Integer | Monzo): Copfr => {
    const monzo = computeMonzoFromIntegerOrMonzo(integerOrMonzo)

    return monzo.reduce(
        (copfr, primeExponent) =>
            copfr + Math.abs(primeExponent) as Count<Prime>,
        0 as Copfr,
    )
}

export {
    computeCopfr,
}
