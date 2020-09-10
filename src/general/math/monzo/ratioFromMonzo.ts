import { MAX_JAVASCRIPT_INTEGER_VALUE } from "../../code"
import { formatMonzo } from "../../io"
import { PRIMES } from "../primes"
import { Denominator, Numerator, Ratio } from "../types"
import { Monzo, NumericTypeParameters } from "./types"

const computeRatioFromMonzo = <T extends NumericTypeParameters = { irrational: true }>(
    monzo: Monzo<T>,
    { disableErrorBecauseExactValueNotRequired }: { disableErrorBecauseExactValueNotRequired?: boolean } = {},
): Ratio => {
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

    if (
        !disableErrorBecauseExactValueNotRequired &&
        (numerator > MAX_JAVASCRIPT_INTEGER_VALUE || denominator > MAX_JAVASCRIPT_INTEGER_VALUE)
    ) {
        throw new Error(`Tried to convert a monzo to a ratio where a fractional part would exceed JavaScript's maximum safe integer value. ${formatMonzo(monzo)}`)
    }

    return [numerator, denominator]
}

export {
    computeRatioFromMonzo,
}
