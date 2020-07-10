import {PRIMES} from "../constants"
import {computeMonzoFromInteger} from "./monzoFromInteger"

// sum of prime factors
const computeSopfr = monzo => {
    if (typeof monzo === "number") {
        monzo = computeMonzoFromInteger(monzo)
    }

    return monzo.reduce(
        (sopfr, term, index) => {
            return sopfr + Math.abs(term * PRIMES[index])
        },
        0,
    )
}

export {
    computeSopfr,
}
