import { PRIMES } from "../constants"
import { Monzo } from "./types"
import { Denominator, Numerator, Ratio } from "../types"

const computeRatioFromMonzo = (monzo: Monzo): Ratio => {
    let numerator: Numerator = 1 as Numerator
    let denominator: Denominator = 1 as Denominator

    monzo.forEach((term, index) => {
        if (term > 0) {
            numerator = numerator * PRIMES[ index ] ** term as Numerator
        }
        if (term < 0) {
            denominator = denominator * PRIMES[ index ] ** -term as Denominator
        }
    })

    return [numerator, denominator]
}

export {
    computeRatioFromMonzo,
}
