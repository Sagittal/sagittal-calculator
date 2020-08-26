import { abs, Integer } from "../math"
import { computeMonzoFromIntegerOrMonzo } from "./monzoFromIntegerOrMonzo"
import { Copfr, Monzo } from "./types"

// Count Of Prime Factors with Repetition (big omega)

const computeCopfr = (integerOrMonzo: Integer | Monzo): Copfr => {
    const monzo = computeMonzoFromIntegerOrMonzo(integerOrMonzo)

    return monzo.reduce(
        (copfr, primeExponent) =>
            copfr + abs(primeExponent) as Copfr,
        0 as Copfr,
    )
}

export {
    computeCopfr,
}
