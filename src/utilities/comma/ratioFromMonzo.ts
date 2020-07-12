import { PRIMES } from "../constants"
import { Monzo } from "./types"
import { Denominator, Numerator, Ratio } from "../types"

const computeRatioFromMonzo = (monzo: Monzo): Ratio => {
    let numerator: Numerator = 1 as Numerator
    let denominator: Denominator = 1 as Denominator

    monzo.forEach((primeExponent, index) => {
        if (primeExponent > 0) {
            numerator = numerator * PRIMES[ index ] ** primeExponent as Numerator
        }
        if (primeExponent < 0) {
            denominator = denominator * PRIMES[ index ] ** -primeExponent as Denominator
        }
    })

    return [numerator, denominator]
}

export {
    computeRatioFromMonzo,
}
