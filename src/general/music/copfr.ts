// Count Of Prime Factors with Repetition (big omega)
import { Monzo } from "./types"

const computeCopfr = (monzo: Monzo) =>
    monzo.reduce(
        (copfr, primeExponent) =>
            copfr + Math.abs(primeExponent),
        0,
    )

export {
    computeCopfr,
}
