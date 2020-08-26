import { abs, Exponent, Integer, Prime, PRIMES } from "../math"
import { computeMonzoFromIntegerOrMonzo } from "./monzoFromIntegerOrMonzo"
import { Monzo, Sopfr } from "./types"

// Sum of prime factors

// TODO: perhaps without repetition should just be an option to this thing

const computeSopfr = (integerOrMonzo: Integer | Monzo): Sopfr => {
    const monzo = computeMonzoFromIntegerOrMonzo(integerOrMonzo)

    return monzo.reduce(
        (sopfr: Sopfr, primeExponent: Exponent<Prime>, index: number): Sopfr =>
            sopfr + abs(primeExponent * PRIMES[ index ]) as Sopfr,
        0 as Sopfr,
    )
}

export {
    computeSopfr,
}
