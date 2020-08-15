import { PRIMES } from "../primes"
import { Denominator, Numerator, Ratio } from "../math"
import { Monzo } from "./types"
import { unpopularityMetricSettings } from "../../scripts/unpopularityMetric/globals"
import { BIG_PRIMES } from "../bigPrimes"

const computeRatioFromMonzo = (monzo: Monzo): Ratio => {
    const primes = unpopularityMetricSettings.onlyTop <= 80 ? PRIMES : BIG_PRIMES

    let numerator: Numerator = 1 as Numerator
    let denominator: Denominator = 1 as Denominator

    monzo.forEach((primeExponent, index) => {
        if (primeExponent > 0) {
            numerator = numerator * primes[ index ] ** primeExponent as Numerator
        }
        if (primeExponent < 0) {
            denominator = denominator * primes[ index ] ** -primeExponent as Denominator
        }
    })

    return [numerator, denominator]
}

export {
    computeRatioFromMonzo,
}
