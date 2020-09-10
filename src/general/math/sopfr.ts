import { abs, Exponent, Integer, NumericTypeParameters, Prime, PRIMES } from "../math"
import { JiPitch } from "../music"
import { computeMonzoFromIntegerOrJiPitch, Monzo } from "./monzo"
import { Sopfr } from "./types"

// Sum of prime factors

const computeSopfr = (integerOrJiPitch: Integer | JiPitch): Sopfr => {
    const monzo = computeMonzoFromIntegerOrJiPitch(integerOrJiPitch)

    return monzo.reduce(
        (sopfr: Sopfr, primeExponent: Exponent<Prime>, index: number): Sopfr => {
            const prime = abs(primeExponent * PRIMES[ index ])

            return sopfr + prime as Sopfr
        },
        0 as Sopfr,
    )
}

export {
    computeSopfr,
}
