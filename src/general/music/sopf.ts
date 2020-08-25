import { PRIMES } from "../constants"
import { Integer } from "../math"
import { computeMonzoFromIntegerOrMonzo } from "./monzoFromIntegerOrMonzo"
import { Monzo } from "./types"

// Sum of prime factors (without repetition)

const computeSopf = (integerOrMonzo: Integer | Monzo) => {
    const monzo = computeMonzoFromIntegerOrMonzo(integerOrMonzo)

    return monzo.reduce(
        (sopf, primeExponent, index) => {
            const prime = primeExponent === 0 ? 0 : PRIMES[ index ]

            return sopf + prime
        },
        0,
    )
}

export {
    computeSopf,
}
