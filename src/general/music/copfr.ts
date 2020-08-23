import { Count, Prime } from "../types"
import { computeMonzoFromInteger } from "./monzoFromInteger"
import { Copfr, Monzo } from "./types"

// Count Of Prime Factors with Repetition (big omega)

const computeCopfr = (monzoOrInteger: Monzo | number): Copfr => {
    // TODO: this monzo or integer adapter is now used in about five places; extract it
    let monzo
    if (typeof monzoOrInteger === "number") {
        monzo = computeMonzoFromInteger(monzoOrInteger)
    } else {
        monzo = monzoOrInteger
    }

    return monzo.reduce(
        (copfr, primeExponent) =>
            copfr + Math.abs(primeExponent) as Count<Prime>,
        0 as Copfr,
    )
}

export {
    computeCopfr,
}
