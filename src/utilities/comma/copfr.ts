// Count Of Prime Factors with Repetition (big omega)
import { Monzo } from "./types"

const computeCopfr = (monzo: Monzo) => {
    return monzo.reduce(
        (copfr, term) => {
            return copfr + Math.abs(term)
        },
        0,
    )
}

export {
    computeCopfr,
}
