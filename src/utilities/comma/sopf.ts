import { PRIMES } from "../constants"
import { computeMonzoFromInteger } from "./monzoFromInteger"
import { Monzo } from "./types"

// sum of prime factors (without repetition)
const computeSopf = (monzoOrInteger: Monzo | number) => {
    let monzo: Monzo
    if (typeof monzoOrInteger === "number") {
        monzo = computeMonzoFromInteger(monzoOrInteger)
    } else {
        monzo = monzoOrInteger
    }

    return monzo.reduce(
        (sopf, term, index) => {
            const prime = term === 0 ? 0 : PRIMES[ index ]

            return sopf + prime
        },
        0,
    )
}

export {
    computeSopf,
}
