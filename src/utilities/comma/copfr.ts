// Count Of Prime Factors with Repetition (big omega)
import { Monzo } from "./types"

const computeCopfr = (monzo: Monzo) => {
    return monzo.reduce(
        (copfr, primeExponent) => {
            return copfr + Math.abs(primeExponent)
        },
        0,
    )
}

export {
    computeCopfr,
}
