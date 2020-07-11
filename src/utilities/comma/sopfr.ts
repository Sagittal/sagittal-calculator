import { PRIMES } from "../constants"
import { computeMonzoFromInteger } from "./monzoFromInteger"
import { Monzo, PrimeExponent } from "./types"

// sum of prime factors
const computeSopfr: (monzoOrInteger: Monzo | number) => number =
    (monzoOrInteger: Monzo | number): number => {
        let monzo: Monzo
        if (typeof monzoOrInteger === "number") {
            monzo = computeMonzoFromInteger(monzoOrInteger)
        } else {
            monzo = monzoOrInteger
        }

        return monzo.reduce(
            (sopfr: number, term: PrimeExponent, index: number) => {
                return sopfr + Math.abs(term * PRIMES[ index ])
            },
            0,
        )
    }

export {
    computeSopfr,
}
